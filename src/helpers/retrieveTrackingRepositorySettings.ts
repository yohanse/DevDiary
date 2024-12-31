import * as vscode from 'vscode';

export default () => {
    const repoOwner = vscode.workspace.getConfiguration().get<string>('devdiary.repoOwner');
    const repoName = vscode.workspace.getConfiguration().get<string>('devdiary.repoName');
    const defaultBranch = vscode.workspace.getConfiguration().get<string>('devdiary.defaultBranch');
    return { repoOwner, repoName, defaultBranch };
};

