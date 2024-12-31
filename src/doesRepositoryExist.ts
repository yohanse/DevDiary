import { GitHubRepository } from "./interfaces/githubRepository";

export default (respositories: GitHubRepository[]) :boolean => {
    return respositories.some((repo) => repo.name.includes("devdiary"));
};