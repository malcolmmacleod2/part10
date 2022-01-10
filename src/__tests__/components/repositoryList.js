import React from 'react';
import { RepositoryListContainer } from '../../components/RepositoryList';
import { render } from '@testing-library/react-native';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      // Add your test code here
      const { debug, getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      debug();

      expect(getAllByTestId('repoName')).toHaveLength(2);
      const name1 = getAllByTestId('repoName')[0];
      expect(name1).toHaveTextContent('jaredpalmer.formik');

      const name2 = getAllByTestId('repoName')[1];
      expect(name2).toHaveTextContent('async-library.react-async');

      expect(getAllByTestId('repoDescription')).toHaveLength(2);
      const description1 = getAllByTestId('repoDescription')[0];
      expect(description1).toHaveTextContent(
        'Build forms in React, without the tears'
      );

      const description2 = getAllByTestId('repoDescription')[1];
      expect(description2).toHaveTextContent(
        'Flexible promise-based React data loader'
      );

      expect(getAllByTestId('repoLanguage')).toHaveLength(2);
      const language1 = getAllByTestId('repoLanguage')[0];
      expect(language1).toHaveTextContent('TypeScript');

      const language2 = getAllByTestId('repoLanguage')[1];
      expect(language2).toHaveTextContent('JavaScript');

      expect(getAllByTestId('repoForksCount')).toHaveLength(2);
      const repoForksCount1 = getAllByTestId('repoForksCount')[0];
      expect(repoForksCount1).toHaveTextContent('1.6K');

      const repoForksCount2 = getAllByTestId('repoForksCount')[1];
      expect(repoForksCount2).toHaveTextContent('69');

      expect(getAllByTestId('repoStargazersCount')).toHaveLength(2);
      const repoStargazersCount1 = getAllByTestId('repoStargazersCount')[0];
      expect(repoStargazersCount1).toHaveTextContent('22K');

      const repoStargazersCount2 = getAllByTestId('repoStargazersCount')[1];
      expect(repoStargazersCount2).toHaveTextContent('1.8K');

      expect(getAllByTestId('repoRatingAverage')).toHaveLength(2);
      const repoRatingAverage1 = getAllByTestId('repoRatingAverage')[0];
      expect(repoRatingAverage1).toHaveTextContent('88');

      const repoRatingAverage2 = getAllByTestId('repoRatingAverage')[1];
      expect(repoRatingAverage2).toHaveTextContent('72');

      expect(getAllByTestId('repoReviewCount')).toHaveLength(2);
      const repoReviewCount1 = getAllByTestId('repoReviewCount')[0];
      expect(repoReviewCount1).toHaveTextContent('3');

      const repoReviewCount2 = getAllByTestId('repoReviewCount')[1];
      expect(repoReviewCount2).toHaveTextContent('3');
    });
  });
});
