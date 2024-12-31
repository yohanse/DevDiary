export interface GitHubRepository {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    description: string;
    owner: {
        login: string;
    }
    default_branch: string;
}