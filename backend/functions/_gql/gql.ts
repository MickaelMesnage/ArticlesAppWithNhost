/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n\tquery getInspirationsByURL($url: String!) {\n\t\tinspirations (where: { URL: { _eq: $url } }) {\n\t\t\tid,\n\t\t}\n\t}\n": types.GetInspirationsByUrlDocument,
    "\n  mutation insertInspiration($inspiration: inspiration_insert_input!) {\n    insertInspiration(object: $inspiration) {\n      id\n    }\n  }\n": types.InsertInspirationDocument,
    "\n  query getCreatedUserByEmail($email: citext!) {\n    users (where: {email: {_eq: $email}}) {\n      id \n\t\t\troles {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t}\n    }\n  }\n": types.GetCreatedUserByEmailDocument,
    "\n\tmutation removeInspiration($inspirationId: uuid!) {\n\t\tdeleteInspiration(id: $inspirationId) { id, fileId }\n\t}\n": types.RemoveInspirationDocument,
    "\n\tquery getInspirationById($inspirationId: uuid!) {\n\t\tinspiration(id: $inspirationId) {\n\t\t\tid,\n\t\t\tfileId,\n\t\t\tURL\n\t\t}\n\t}\n": types.GetInspirationByIdDocument,
    "\n  query getProject($id: uuid!) {\n    project(id: $id) {\n      id\n      name\n      user_id\n    }\n  }\n": types.GetProjectDocument,
    "\n  query getUserByEmail($email: citext!) {\n    users (where: {email: {_eq: $email}}) {\n      id \n\t\t\troles {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t}\n    }\n  }\n": types.GetUserByEmailDocument,
    "\n  mutation updateInspiration($id: uuid!, $inspiration: inspiration_set_input!) {\n    updateInspiration(pk_columns: { id: $id }, _set: $inspiration) {\n      id\n    }\n  }\n": types.UpdateInspirationDocument,
    "\n  query getProjectMemberByProjectId($projectId: uuid!) {\n    project_member (where: {projectId: {_eq: $projectId}}) {\n      id\n    }\n  }\n": types.GetProjectMemberByProjectIdDocument,
    "\n  mutation updateProjectMember($id: uuid!, $project_member: project_member_set_input!) {\n    update_project_member_by_pk(pk_columns: { id: $id }, _set: $project_member) {\n      id\n    }\n  }\n": types.UpdateProjectMemberDocument,
    "\n\tmutation updateDecorator($id: uuid!, $user: users_set_input!) {\n\t\tupdateUser(pk_columns: { id: $id }, _set: $user) {\n\t\t\tid\n\t\t}\n\t}\n": types.UpdateDecoratorDocument,
    "\n  mutation updateDecoratorRole($roleId: uuid!, $role: String!) {\n    updateAuthUserRole(pk_columns: { id: $roleId }, _set: { role: $role}) {\n      id\n    }\n  }\n": types.UpdateDecoratorRoleDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery getInspirationsByURL($url: String!) {\n\t\tinspirations (where: { URL: { _eq: $url } }) {\n\t\t\tid,\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getInspirationsByURL($url: String!) {\n\t\tinspirations (where: { URL: { _eq: $url } }) {\n\t\t\tid,\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation insertInspiration($inspiration: inspiration_insert_input!) {\n    insertInspiration(object: $inspiration) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation insertInspiration($inspiration: inspiration_insert_input!) {\n    insertInspiration(object: $inspiration) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCreatedUserByEmail($email: citext!) {\n    users (where: {email: {_eq: $email}}) {\n      id \n\t\t\troles {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t}\n    }\n  }\n"): (typeof documents)["\n  query getCreatedUserByEmail($email: citext!) {\n    users (where: {email: {_eq: $email}}) {\n      id \n\t\t\troles {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t}\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tmutation removeInspiration($inspirationId: uuid!) {\n\t\tdeleteInspiration(id: $inspirationId) { id, fileId }\n\t}\n"): (typeof documents)["\n\tmutation removeInspiration($inspirationId: uuid!) {\n\t\tdeleteInspiration(id: $inspirationId) { id, fileId }\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery getInspirationById($inspirationId: uuid!) {\n\t\tinspiration(id: $inspirationId) {\n\t\t\tid,\n\t\t\tfileId,\n\t\t\tURL\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getInspirationById($inspirationId: uuid!) {\n\t\tinspiration(id: $inspirationId) {\n\t\t\tid,\n\t\t\tfileId,\n\t\t\tURL\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getProject($id: uuid!) {\n    project(id: $id) {\n      id\n      name\n      user_id\n    }\n  }\n"): (typeof documents)["\n  query getProject($id: uuid!) {\n    project(id: $id) {\n      id\n      name\n      user_id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getUserByEmail($email: citext!) {\n    users (where: {email: {_eq: $email}}) {\n      id \n\t\t\troles {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t}\n    }\n  }\n"): (typeof documents)["\n  query getUserByEmail($email: citext!) {\n    users (where: {email: {_eq: $email}}) {\n      id \n\t\t\troles {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t}\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateInspiration($id: uuid!, $inspiration: inspiration_set_input!) {\n    updateInspiration(pk_columns: { id: $id }, _set: $inspiration) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation updateInspiration($id: uuid!, $inspiration: inspiration_set_input!) {\n    updateInspiration(pk_columns: { id: $id }, _set: $inspiration) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getProjectMemberByProjectId($projectId: uuid!) {\n    project_member (where: {projectId: {_eq: $projectId}}) {\n      id\n    }\n  }\n"): (typeof documents)["\n  query getProjectMemberByProjectId($projectId: uuid!) {\n    project_member (where: {projectId: {_eq: $projectId}}) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateProjectMember($id: uuid!, $project_member: project_member_set_input!) {\n    update_project_member_by_pk(pk_columns: { id: $id }, _set: $project_member) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation updateProjectMember($id: uuid!, $project_member: project_member_set_input!) {\n    update_project_member_by_pk(pk_columns: { id: $id }, _set: $project_member) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tmutation updateDecorator($id: uuid!, $user: users_set_input!) {\n\t\tupdateUser(pk_columns: { id: $id }, _set: $user) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation updateDecorator($id: uuid!, $user: users_set_input!) {\n\t\tupdateUser(pk_columns: { id: $id }, _set: $user) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateDecoratorRole($roleId: uuid!, $role: String!) {\n    updateAuthUserRole(pk_columns: { id: $roleId }, _set: { role: $role}) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation updateDecoratorRole($roleId: uuid!, $role: String!) {\n    updateAuthUserRole(pk_columns: { id: $roleId }, _set: { role: $role}) {\n      id\n    }\n  }\n"];

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function gql(source: string): unknown;

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;