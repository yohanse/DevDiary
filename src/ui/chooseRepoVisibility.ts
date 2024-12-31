import * as vscode from 'vscode';

export default async(): Promise<string | undefined> => {
  const visibilityOptions = ['Public', 'Private'];

  return await vscode.window.showQuickPick(visibilityOptions, {
    placeHolder: 'Choose the visibility for your GitHub repository',
  });
};