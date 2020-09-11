import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { RequestContextProvider } from '#contexts/RequestContext';
import { ServiceContextProvider } from '#contexts/ServiceContext';
import { ToggleContextProvider } from '#contexts/ToggleContext';
import ArticleMetadata from './index';
import {
  articleDataNews,
  articleDataPersian,
} from '#pages/ArticlePage/fixtureData';

const getISOStringDate = date => new Date(date).toISOString();

// eslint-disable-next-line react/prop-types
const Context = ({ service, children }) => (
  <ServiceContextProvider service={service}>
    <ToggleContextProvider>
      <RequestContextProvider
        bbcOrigin="https://www.test.bbc.co.uk"
        id="c0000000000o"
        isAmp={false}
        pageType="article"
        pathname="/pathname"
        service={service}
        statusCode={200}
      >
        {children}
      </RequestContextProvider>
    </ToggleContextProvider>
  </ServiceContextProvider>
);

const propsForNewsInternational = {
  articleId: articleDataNews.metadata.id,
  title: articleDataNews.promo.headlines.seoHeadline,
  author: 'https://www.facebook.com/bbcnews',
  firstPublished: getISOStringDate(articleDataNews.metadata.firstPublished),
  lastPublished: getISOStringDate(articleDataNews.metadata.lastPublished),
  section: articleDataNews.metadata.passport.genre,
  aboutTags: articleDataNews.metadata.tags.about,
  mentionsTags: articleDataNews.metadata.tags.mentions,
  lang: articleDataNews.metadata.passport.language,
  description: articleDataNews.promo.headlines.seoHeadline,
};

it('should render the article tags', async () => {
  render(
    <Context service="news">
      <ArticleMetadata {...propsForNewsInternational} />
    </Context>,
  );

  const expected = [
    { content: 'Royal Wedding 2018', name: 'article:tag' },
    { content: 'Duchess of Sussex', name: 'article:tag' },
    { content: 'Queen Victoria', name: 'article:tag' },
    { content: 'https://www.facebook.com/bbcnews', name: 'article:author' },
    { content: '2018-01-01T13:00:00.000Z', name: 'article:modified_time' },
    { content: '2018-01-01T12:01:00.000Z', name: 'article:published_time' },
  ];

  await waitFor(() => {
    const actual = Array.from(
      document.querySelectorAll('head > meta[name^="article:"]'),
    ).map(tag => ({
      name: tag.getAttribute('name'),
      content: tag.getAttribute('content'),
    }));

    expect(actual).toEqual(expected);
  });
});

it('should render the article section meta tag if section provided', async () => {
  render(
    <Context service="news">
      <ArticleMetadata
        {...propsForNewsInternational}
        section="Mock Article Section"
      />
    </Context>,
  );

  await waitFor(() => {
    expect(
      document
        .querySelector('head > meta[name="article:section"]')
        .getAttribute('content'),
    ).toEqual('Mock Article Section');
  });
});

shouldMatchSnapshot(
  'should match snapshot for News & International',
  <Context service="news">
    <ArticleMetadata {...propsForNewsInternational} />
  </Context>,
);

shouldMatchSnapshot(
  'should match snapshot for Persian News & UK origin',
  <Context service="persian">
    <ArticleMetadata
      articleId={articleDataPersian.metadata.id}
      title={articleDataPersian.promo.headlines.seoHeadline}
      author="https://www.facebook.com/bbcnews"
      firstPublished={getISOStringDate(
        articleDataPersian.metadata.firstPublished,
      )}
      lastPublished={getISOStringDate(
        articleDataPersian.metadata.lastPublished,
      )}
      section={articleDataPersian.metadata.passport.genre}
      aboutTags={articleDataPersian.metadata.tags.about}
      mentionsTags={articleDataPersian.metadata.tags.mentions}
      lang={articleDataPersian.metadata.passport.language}
      description={articleDataPersian.promo.headlines.seoHeadline}
    />
  </Context>,
);
