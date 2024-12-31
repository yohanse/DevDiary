import saveRepositorySettings from "../helpers/saveRepositorySettings";
import { GitHubRepository } from "../interfaces/githubRepository";

export default async (repoName: string, accessToken: string, isPrivate: boolean): Promise<GitHubRepository> => {
    const { Octokit } = await import("@octokit/rest");
    const octokit = new Octokit({ auth: accessToken });

    try {
        const response = await octokit.repos.createForAuthenticatedUser({
            name: repoName,
            description: "A repository to store your activity logs.",
            private: isPrivate,
            auto_init: true
        });
        await saveRepositorySettings(response.data.owner.login, response.data.name, response.data.default_branch);
        return response.data as GitHubRepository;
    } catch (error) {
        throw error;
    }
};
