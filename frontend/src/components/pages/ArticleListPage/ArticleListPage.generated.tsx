import * as Types from '../../../graphql/types';

import { gql } from '@apollo/client';
import { ArticleItemFragmentDoc } from '../../molecules/ArticleItem/ArticleItem.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ArticleListPageSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type ArticleListPageSubscription = { __typename?: 'subscription_root', articles: Array<{ __typename?: 'article', id: any, title: string, description: string, article_followers: Array<{ __typename?: 'article_follower', id: any }>, user: { __typename?: 'users', id: any } }> };


export const ArticleListPageDocument = gql`
    subscription ArticleListPage {
  articles {
    id
    ...ArticleItem
  }
}
    ${ArticleItemFragmentDoc}`;

/**
 * __useArticleListPageSubscription__
 *
 * To run a query within a React component, call `useArticleListPageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useArticleListPageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleListPageSubscription({
 *   variables: {
 *   },
 * });
 */
export function useArticleListPageSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ArticleListPageSubscription, ArticleListPageSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ArticleListPageSubscription, ArticleListPageSubscriptionVariables>(ArticleListPageDocument, options);
      }
export type ArticleListPageSubscriptionHookResult = ReturnType<typeof useArticleListPageSubscription>;
export type ArticleListPageSubscriptionResult = Apollo.SubscriptionResult<ArticleListPageSubscription>;