import { Repository } from "./Repository";

export const SEARCH_REPOSITORIES = "SEARCH_REPOSITORIES";
export const SEARCH_REPOSITORIES_SUCCESS = "SEARCH_REPOSITORIES_SUCCESS";
export const SEARCH_REPOSITORIES_ERROR = "SEARCH_REPOSITORIES_ERROR";

export interface SearchRepositoriesAction {
  type: typeof SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction {
  type: typeof SEARCH_REPOSITORIES_SUCCESS;
  repositories: Repository[];
}

export interface SearchRepositoriesErrorAction {
  type: typeof SEARCH_REPOSITORIES_ERROR;
  error: any;
}

export type RepositoryActionTypes =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

export type AppActions = RepositoryActionTypes;
