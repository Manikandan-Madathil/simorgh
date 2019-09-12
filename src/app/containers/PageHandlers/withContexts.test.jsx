import React from 'react';
import { render } from '@testing-library/react';
import { shouldShallowMatchSnapshot } from '#testHelpers';
import WithContexts from './withContexts';
import getOriginContext from '#contexts/RequestContext/getOriginContext';
import getStatsDestination from '#contexts/RequestContext/getStatsDestination';
import getStatsPageIdentifier from '#contexts/RequestContext/getStatsPageIdentifier';
import * as requestContextImports from '#contexts/RequestContext';
import * as serviceContextImports from '#contexts/ServiceContext';

jest.mock('#contexts/RequestContext/getOriginContext', () => jest.fn());

getOriginContext.mockImplementation(origin => ({
  isUK: true,
  origin,
}));

jest.mock('#contexts/RequestContext/getStatsDestination', () => jest.fn());

getStatsDestination.mockImplementation(() => 'NEWS_PS_TEST');

jest.mock('#contexts/RequestContext/getStatsPageIdentifier', () => jest.fn());

getStatsPageIdentifier.mockImplementation(
  () => 'news.articles.c0000000000o.page',
);

describe('withContexts HOC', () => {
  const Component = () => <h1>All the contexts!!</h1>;
  const ContextsHOC = WithContexts(Component);

  const props = {
    bbcOrigin: 'https://www.bbc.com',
    id: 'c0000000000o',
    service: 'news',
    isAmp: true,
    pageType: 'article',
    pathname: '/pathname',
  };

  shouldShallowMatchSnapshot(
    `should return all context providers`,
    <ContextsHOC {...props} />,
  );

  describe('assertions', () => {
    let requestContextSpy;
    let serviceContextSpy;
    beforeEach(() => {
      requestContextSpy = jest.spyOn(
        requestContextImports,
        'RequestContextProvider',
      );

      serviceContextSpy = jest.spyOn(
        serviceContextImports,
        'ServiceContextProvider',
      );

      jest.clearAllMocks();
    });

    const pageTypes = ['article', 'frontPage', 'chicken'];

    pageTypes.forEach(pageType => {
      it(`passing pageType==${pageType} should pass along`, () => {
        const fixture = {
          bbcOrigin: 'https://www.bbc.com',
          id: 'c0000000000o',
          service: 'news',
          isAmp: true,
          pageType,
          pathname: '/pathname',
        };

        render(<ContextsHOC {...fixture} />);

        expect(requestContextSpy).toHaveBeenCalled();
        expect(requestContextSpy).toHaveBeenCalledWith(
          expect.objectContaining({
            pageType,
          }),
          {},
        );
        expect(serviceContextSpy).toHaveBeenCalledWith(
          expect.objectContaining({
            variant: null,
          }),
          {},
        );
      });
    });

    it(`should pass variant to the service context provider`, () => {
      const fixture = {
        bbcOrigin: 'https://www.bbc.com',
        id: 'c0000000000o',
        service: 'zhongwen',
        isAmp: true,
        pageType: 'article',
        pathname: '/pathname',
        variant: 'trad',
      };

      render(<ContextsHOC {...fixture} />);

      expect(serviceContextSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          variant: 'trad',
        }),
        {},
      );
      expect(requestContextSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          variant: 'trad',
        }),
        {},
      );
    });
  });
});
