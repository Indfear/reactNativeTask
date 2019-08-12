import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { repositoryReducer } from "../reducers/repositories";
import { AppActions } from "../types/actions";

export const rootReducer = combineReducers({
  repositories: repositoryReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
