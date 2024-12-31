import * as vscode from "vscode";
import fetchAuthenticationSessionController from "./fetchAuthenticationSessionController";
import retrieveTrackingRepositorySettings from "../helpers/retrieveTrackingRepositorySettings";
import getTrackingRepoReferenceController from "./getTrackingRepoReferenceController";

export default async() => {
    const session: vscode.AuthenticationSession = await fetchAuthenticationSessionController();
    const { repoOwner, repoName, defaultBranch } = retrieveTrackingRepositorySettings();

    

    if (session && repoOwner && repoName && defaultBranch) {

        // Get a reference to the tracking repository
        const currentCommitSha: string = await getTrackingRepoReferenceController(session.accessToken, repoOwner, repoName, defaultBranch);
    }
    else {
        throw new Error("Authentication session or repository settings not found. Please ensure you are signed in and have a repository set up.");
    }
    
};