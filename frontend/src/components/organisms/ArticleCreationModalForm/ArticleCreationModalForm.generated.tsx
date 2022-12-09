import * as Types from '../../../graphql/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ArticleCreationMutationVariables = Types.Exact<{
  article: Types.Article_Insert_Input;
}>;


export type ArticleCreationMutation = { __typename?: 'mutation_root', insert_article_one?: { __typename?: 'article', id: any } | null };


export const ArticleCreationDocument = gql`
    mutation ArticleCreation($article: article_insert_input!) {
  insert_article_one(object: $article) {
    id
  }
}
    `;
export type ArticleCreationMutationFn = Apollo.MutationFunction<ArticleCreationMutation, ArticleCreationMutationVariables>;

/**
 * __useArticleCreationMutation__
 *
 * To run a mutation, you first call `useArticleCreationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArticleCreationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [articleCreationMutation, { data, loading, error }] = useArticleCreationMutation({
 *   variables: {
 *      article: // value for 'article'
 *   },
 * });
 */
export function useArticleCreationMutation(baseOptions?: Apollo.MutationHookOptions<ArticleCreationMutation, ArticleCreationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ArticleCreationMutation, ArticleCreationMutationVariables>(ArticleCreationDocument, options);
      }
export type ArticleCreationMutationHookResult = ReturnType<typeof useArticleCreationMutation>;
export type ArticleCreationMutationResult = Apollo.MutationResult<ArticleCreationMutation>;
export type ArticleCreationMutationOptions = Apollo.BaseMutationOptions<ArticleCreationMutation, ArticleCreationMutationVariables>;