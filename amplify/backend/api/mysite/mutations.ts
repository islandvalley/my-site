/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArticles = /* GraphQL */ `
  mutation CreateArticles(
    $input: CreateArticlesInput!
    $condition: ModelArticlesConditionInput
  ) {
    createArticles(input: $input, condition: $condition) {
      id
      title
      datetime
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateArticles = /* GraphQL */ `
  mutation UpdateArticles(
    $input: UpdateArticlesInput!
    $condition: ModelArticlesConditionInput
  ) {
    updateArticles(input: $input, condition: $condition) {
      id
      title
      datetime
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteArticles = /* GraphQL */ `
  mutation DeleteArticles(
    $input: DeleteArticlesInput!
    $condition: ModelArticlesConditionInput
  ) {
    deleteArticles(input: $input, condition: $condition) {
      id
      title
      datetime
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
