import * as Types from '../../../graphql/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ImageListPageSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type ImageListPageSubscription = { __typename?: 'subscription_root', files: Array<{ __typename?: 'files', id: any }> };


export const ImageListPageDocument = gql`
    subscription ImageListPage {
  files {
    id
  }
}
    `;

/**
 * __useImageListPageSubscription__
 *
 * To run a query within a React component, call `useImageListPageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useImageListPageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImageListPageSubscription({
 *   variables: {
 *   },
 * });
 */
export function useImageListPageSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ImageListPageSubscription, ImageListPageSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ImageListPageSubscription, ImageListPageSubscriptionVariables>(ImageListPageDocument, options);
      }
export type ImageListPageSubscriptionHookResult = ReturnType<typeof useImageListPageSubscription>;
export type ImageListPageSubscriptionResult = Apollo.SubscriptionResult<ImageListPageSubscription>;