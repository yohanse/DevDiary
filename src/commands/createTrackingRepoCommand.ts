import * as vscode from "vscode";
import inputRepositoryName from "../ui/inputRepositoryName";

export default async () => {
    const repoName = await inputRepositoryName();
    if (repoName){
        await vscode.window.showInformationMessage(repoName);
    }
};  