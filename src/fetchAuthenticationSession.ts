import * as vscode from "vscode";

export default async (): Promise<vscode.AuthenticationSession> => {
    return await vscode.authentication.getSession("github", ["repo"], { createIfNone: true });
};