import * as vscode from "vscode";

export default async () => {
    return vscode.authentication.getSession("github", ["repo"], { createIfNone: true });
};