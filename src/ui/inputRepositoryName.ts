import * as vscode from "vscode";

export default async () :Promise<string | undefined> => {
    return await vscode.window.showInputBox(
        {
            placeHolder: 'Enter the name of the repository',
            prompt: 'Enter a name for your new GitHub repository',
            validateInput: (input) => {
                if (!input) {
                    return 'Repository name cannot be empty';
                }
                return null;
            }
        }
    );
};