import { AppActions } from "../types/actions";
import { Repository } from "../types/Repository";
import { Dispatch } from "redux";
import { AppState } from "../store/configureStore";

export const searchRepositories = (): AppActions => ({
  type: "SEARCH_REPOSITORIES"
});

export const searchRepositoriesSuccess = (
  repositories: Repository[]
): AppActions => ({
  type: "SEARCH_REPOSITORIES_SUCCESS",
  repositories
});

export const searchRepositoriesError = (error: any): AppActions => ({
  type: "SEARCH_REPOSITORIES_ERROR",
  error: error
});

export const startSearchRepositories = (searchTerm: string) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(searchRepositories());
    const terms = searchTerm.split(' ').join('+');
    fetch(`https://api.github.com/search/repositories?q=${terms}`)
    .then(res => res.json())
    .then((res: any) => {
      dispatch (searchRepositoriesSuccess(res.items));
      return res;
    })
    .catch((error: any) => {
      dispatch(searchRepositoriesError(error));
    })
  };
};
