export default async (accessToken: string, repoOwner: string, repoName: string, commmitMessage: string, refSha: string, treeSha: string): Promise<string> => {
    const { Octokit } = await import("@octokit/rest");
    const octokit = new Octokit({ auth: accessToken });
    
    try {
        const commitResponse = await octokit.rest.git.createCommit({
            owner: repoOwner,
            repo: repoName,
            message: `Progress update: ${commmitMessage}`,
            tree: treeSha,
            parents: [refSha],
          });

          return commitResponse.data.sha;
    }
    catch (error) {
        throw error;
    }
};