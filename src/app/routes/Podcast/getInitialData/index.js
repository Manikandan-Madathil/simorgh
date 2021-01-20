import path from 'ramda/src/path';
import pathOr from 'ramda/src/pathOr';
import fetchPageData from '../../utils/fetchPageData';
import overrideRendererOnTest from '../../utils/overrideRendererOnTest';
import getPlaceholderImageUrlUtil from '../../utils/getPlaceholderImageUrl';
import pathWithLogging, {
  LOG_LEVELS,
} from '../../../lib/utilities/logging/pathWithLogging';
import { RADIO_MISSING_FIELD } from '#lib/logger.const';
import getEpisodeAvailability, {
  getUrl,
} from '#lib/utilities/episodeAvailability';
import getErrorStatusCode from '../../utils/fetchPageData/utils/getErrorStatusCode';
import withRadioSchedule from '#app/routes/utils/withRadioSchedule';
import getRadioService from '../../utils/getRadioService';
import processRecentEpisodes from '../../utils/processRecentEpisodes';

const DEFAULT_TOGGLE_VALUE = { enabled: false, value: 8 };

const getRadioScheduleData = path(['radioScheduleData']);
const getScheduleToggle = path(['onDemandRadioSchedule', 'enabled']);
const getRecentEpisodesToggle = pathOr(DEFAULT_TOGGLE_VALUE, [
  'recentPodcastEpisodes',
]);

export default async ({ path: pathname, pageType, service, toggles }) => {
  try {
    const podcastDataPath = overrideRendererOnTest(pathname);
    const pageDataPromise = await fetchPageData({
      path: podcastDataPath,
      pageType,
    });
    const scheduleIsEnabled = getScheduleToggle(toggles);
    const recentEpisodesToggle = getRecentEpisodesToggle(toggles);
    const {
      enabled: showRecentEpisodes,
      value: recentEpisodesLimit,
    } = recentEpisodesToggle;

    const { json, status } = scheduleIsEnabled
      ? await withRadioSchedule({
          pageDataPromise,
          service,
          path: pathname,
          radioService: getRadioService({ service, pathname }),
          pageType: 'Podcast',
        })
      : await pageDataPromise;

    const withLogging = pathWithLogging(
      getUrl(json),
      RADIO_MISSING_FIELD,
      json,
    );
    const get = (fieldPath, logLevel) =>
      logLevel ? withLogging(fieldPath, logLevel) : path(fieldPath, json);

    const episodeId = get(['content', 'blocks', 0, 'id'], LOG_LEVELS.ERROR);
    const recentEpisodes = showRecentEpisodes
      ? processRecentEpisodes(json, {
          exclude: episodeId,
          recentEpisodesLimit,
        })
      : [];

    return {
      status,
      pageData: {
        metadata: { type: 'Podcast' },
        language: get(['metadata', 'language'], LOG_LEVELS.INFO),
        brandTitle: get(['metadata', 'title'], LOG_LEVELS.INFO),
        episodeTitle: get(['content', 'blocks', 0, 'title']),
        headline: get(['promo', 'headlines', 'headline'], LOG_LEVELS.WARN),
        shortSynopsis: get(['promo', 'media', 'synopses', 'short']),
        id: get(['metadata', 'id']),
        summary: get(
          ['content', 'blocks', 0, 'synopses', 'short'],
          LOG_LEVELS.INFO,
        ),
        contentType: get(
          ['metadata', 'analyticsLabels', 'contentType'],
          LOG_LEVELS.INFO,
        ),
        episodeId,
        brandId: get(['metadata', 'locators', 'brandPid'], LOG_LEVELS.ERROR),
        masterBrand: get(['metadata', 'createdBy'], LOG_LEVELS.ERROR),
        releaseDateTimeStamp: get(
          ['metadata', 'releaseDateTimeStamp'],
          LOG_LEVELS.WARN,
        ),
        pageTitle: get(['metadata', 'analyticsLabels', 'pageTitle']),
        pageIdentifier: get(['metadata', 'analyticsLabels', 'pageIdentifier']),
        imageUrl: get(['content', 'blocks', 0, 'imageUrl'], LOG_LEVELS.INFO),
        promoBrandTitle: get(['promo', 'brand', 'title']),
        durationISO8601: get(
          ['promo', 'media', 'versions', 0, 'durationISO8601'],
          LOG_LEVELS.INFO,
        ),
        thumbnailImageUrl: getPlaceholderImageUrlUtil(
          get(['promo', 'media', 'imageUrl'], LOG_LEVELS.INFO),
        ),
        episodeAvailability: getEpisodeAvailability(json),
        radioScheduleData: getRadioScheduleData(json),
        recentEpisodes,
      },
    };
  } catch ({ message, status = getErrorStatusCode() }) {
    return { error: message, status };
  }
};
