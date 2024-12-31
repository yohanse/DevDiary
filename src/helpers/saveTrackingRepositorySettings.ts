import * as vscode from 'vscode';

export default async (owner:string, repoName: string, default_branch: string) => {
    await vscode.workspace.getConfiguration().update('devdiary.repoOwner', owner, vscode.ConfigurationTarget.Global);
    await vscode.workspace.getConfiguration().update('devdiary.repoName', repoName, vscode.ConfigurationTarget.Global);
    await vscode.workspace.getConfiguration().update('devdiary.defaultBranch', default_branch, vscode.ConfigurationTarget.Global);
};