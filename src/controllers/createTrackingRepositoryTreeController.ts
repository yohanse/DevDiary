import * as vscode from "vscode";

export default async (accessToken: string, repoOwner: string, repoName: string, logContent: string, baseCommitSha: string) => {
    const currentTimestamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\..+/, ""); // Format timestamp for filename
    const filePath = `log_${currentTimestamp}.txt`;  // Using "log_" and timestamp for unique naming
    
    // Create a new blob for the log file content
    const blobResponse = await octokit.rest.git.createBlob({
      owner: owner,
      repo: repo,
      content: logContent,
      encoding: "utf-8",
    });
    const blobSha = blobResponse.data.sha;
    
    // Create a tree with the blob reference
    const treeResponse = await octokit.rest.git.createTree({
      owner: owner,
      repo: repo,
      tree: [
        {
          path: filePath,    // File name with timestamp
          mode: "100644",     // File mode (non-executable)
          type: "blob",       // Type of object (file)
          sha: blobSha,       // SHA of the created blob
        },
      ],
      base_tree: baseCommitSha, // The current commit SHA
    });
  
    const treeSha = treeResponse.data.sha;
    return treeSha;  // Return the SHA of the created tree
  };
  