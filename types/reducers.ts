import { Repository } from './Repository';

export interface RepositoryReducerState {
    loading: boolean;
    repositories: Repository[];
    error: any;
}