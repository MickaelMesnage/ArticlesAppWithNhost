import * as Types from '../../../graphql/types';

import { gql } from '@apollo/client';
export type ArticleItemFragment = { __typename?: 'article', id: any, title: string, description: string };

export const ArticleItemFragmentDoc = gql`
    fragment ArticleItem on article {
  id
  title
  description
}
    `;