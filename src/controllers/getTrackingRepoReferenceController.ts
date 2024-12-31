import * as vscode from "vscode";
import fetchAuthenticationSessionController from "./fetchAuthenticationSessionController";
import retrieveTrackingRepositorySettings from "../helpers/retrieveTrackingRepositorySettings";
import getTrackingRepoReferenceWithSessionController from "./getTrackingRepoReferenceWithSessionController";


export default async (): Promise<string> => {
    const session: vscode.AuthenticationSession = await fetchAuthenticationSessionController();
    const { repoOwner, repoName, defaultBranch } = retrieveTrackingRepositorySettings();
    if (session && repoOwner && repoName && defaultBranch) {
        return await getTrackingRepoReferenceWithSessionController(session.accessToken, repoOwner, repoName, defaultBranch);
    }
    else {
        throw new Error("Authentication session or repository settings not found. Please ensure you are signed in and have a repository set up.");
    }
};