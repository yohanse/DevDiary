import * as vscode from "vscode";


export default async (accessToken: string) => {
    const { Octokit } = await import("@octokit/rest");
    const octokit = new Octokit({ auth: accessToken });

    try {
      // Create the repository
      const response = await octokit.repos.createForAuthenticatedUser({
        name: "devdiary tracking",
        description: "A repository to store your activity logs.",
        private: true, // Set to true for a private repository
      });
  
      vscode.window.showInformationMessage(`Repository created successfully: ${response.data.html_url}`);
    } catch (error) {
      vscode.window.showErrorMessage("Failed to create the repository: " + error);
    }
};