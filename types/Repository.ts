export interface Repository {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    html_url: string;
    description: string;
    owner: {
        login: string;
        id: number;
        avatar_url: string;
    };
    created_at: string;
    updated_at: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues: boolean;
    archived: boolean;
    disabled: boolean;
    forks: number;
    open_issues: number;
    watchers: number;
}