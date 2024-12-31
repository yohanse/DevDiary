import * as vscode from "vscode";

export default async (accessToken: string, repoOwner: string, repoName: string, logContent: string, baseCommitSha: string) => {
    const currentTimestamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\..+/, ""); 
    const filePath = `log_${currentTimestamp}.txt`;
    
    const { Octokit } = await import("@octokit/rest");
    const octokit = new Octokit({ auth: accessToken });
    
    try {
        const treeResponse = await octokit.rest.git.createTree({
            owner: repoOwner,
            repo: repoName,
            tree: [
              {
                path: filePath, 
                mode: "100644",   
                type: "blob",     
                content: logContent 
              },
            ],
            base_tree: baseCommitSha,
          });
          
          return treeResponse.data.sha;
    }
    catch (error) {
        throw error;
    }
  };
  