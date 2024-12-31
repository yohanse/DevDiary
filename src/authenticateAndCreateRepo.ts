import * as vscode from 'vscode';
import createTrackingRepo from './createTrackingRepo';
export default async () => {
    try {
        // Request GitHub authentication with the necessary scope
        const session = await vscode.authentication.getSession("github", ["repo"], { createIfNone: true });
    
        if (session) {
          vscode.window.showInformationMessage("GitHub authentication successful!");
          // Use the access token to create the repository
          await createTrackingRepo(session.accessToken);
        } else {
          vscode.window.showErrorMessage("Authentication failed or canceled.");
        }
      } catch (error) {
        vscode.window.showErrorMessage(`Authentication error: ${error}`);
      }
};