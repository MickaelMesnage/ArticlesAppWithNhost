import * as Types from '../../../graphql/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ArticleItemFragment = { __typename?: 'article', id: any, title: string, description: string, article_followers: Array<{ __typename?: 'article_follower', id: any }> };

export type FollowArticleMutationVariables = Types.Exact<{
  article_follower: Types.Article_Follower_Insert_Input;
}>;


export type FollowArticleMutation = { __typename?: 'mutation_root', insert_article_follower_one?: { __typename?: 'article_follower', id: any } | null };

export const ArticleItemFragmentDoc = gql`
    fragment ArticleItem on article {
  id
  title
  description
  article_followers {
    id
  }
}
    `;
export const FollowArticleDocument = gql`
    mutation FollowArticle($article_follower: article_follower_insert_input!) {
  insert_article_follower_one(object: $article_follower) {
    id
  }
}
    `;
export type FollowArticleMutationFn = Apollo.MutationFunction<FollowArticleMutation, FollowArticleMutationVariables>;

/**
 * __useFollowArticleMutation__
 *
 * To run a mutation, you first call `useFollowArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followArticleMutation, { data, loading, error }] = useFollowArticleMutation({
 *   variables: {
 *      article_follower: // value for 'article_follower'
 *   },
 * });
 */
export function useFollowArticleMutation(baseOptions?: Apollo.MutationHookOptions<FollowArticleMutation, FollowArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowArticleMutation, FollowArticleMutationVariables>(FollowArticleDocument, options);
      }
export type FollowArticleMutationHookResult = ReturnType<typeof useFollowArticleMutation>;
export type FollowArticleMutationResult = Apollo.MutationResult<FollowArticleMutation>;
export type FollowArticleMutationOptions = Apollo.BaseMutationOptions<FollowArticleMutation, FollowArticleMutationVariables>;