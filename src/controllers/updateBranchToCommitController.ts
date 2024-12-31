export default async (accessToken: string, repoOwner: string, repoName: string, defaultBranch: string, commitSha: string) => {
    const { Octokit } = await import("@octokit/rest");
    const octokit = new Octokit({ auth: accessToken });
    
    try {
        await octokit.rest.git.updateRef({
            owner: repoOwner,
            repo: repoName,
            ref: `heads/${defaultBranch}`,
            sha: commitSha,
          });
    }
    catch (error) {
        throw error;
    }
};