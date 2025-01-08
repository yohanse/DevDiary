export default async (accessToken: string, repoOwner: string, repoName: string, defaultBranch: string): Promise<string> => {
    const { Octokit } = await import("@octokit/rest");
    const octokit = new Octokit({ auth: accessToken });
    
    try {
        const refResponse = await octokit.rest.git.getRef({
            owner: repoOwner,
            repo: repoName,
            ref: `heads/${defaultBranch}`,
            });
        return refResponse.data.object.sha;
    }
    catch (error) {
        throw error;
    }
};