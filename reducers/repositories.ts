import { RepositoryReducerState } from "../types/reducers";
import { RepositoryActionTypes } from "../types/actions";

const repositoryReducerDefaultState: RepositoryReducerState = {
  loading: false,
  repositories: [],
  error: null
};

const repositoryReducer = (
  state = repositoryReducerDefaultState,
  action: RepositoryActionTypes
): RepositoryReducerState => {
  switch (action.type) {
    case "SEARCH_REPOSITORIES":
      return {
        loading: true,
        repositories: state.repositories,
        error: null
      };
    case "SEARCH_REPOSITORIES_SUCCESS":
      return {
        loading: false,
        repositories: action.repositories,
        error: null
      };
    case "SEARCH_REPOSITORIES_ERROR":
      return {
        loading: false,
        repositories: state.repositories,
        error: action.error
      };
    default:
      return state;
  }
};

export { repositoryReducer };
