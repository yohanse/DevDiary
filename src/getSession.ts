import * as vscode from "vscode";

export default async () => {
    return await vscode.authentication.getSession("github", ["repo"], { createIfNone: true });
};