import * as vscode from "vscode";
import fetchAuthenticationSessionController from "./fetchAuthenticationSessionController";
import retrieveTrackingRepositorySettings from "../helpers/retrieveTrackingRepositorySettings";
import getTrackingRepoReferenceController from "./getTrackingRepoReferenceController";
import createTrackingRepositoryTreeController from "./createTrackingRepositoryTreeController";

export default async () => {
    const session: vscode.AuthenticationSession = await fetchAuthenticationSessionController();
    const { repoOwner, repoName, defaultBranch } = retrieveTrackingRepositorySettings();



    if (session && repoOwner && repoName && defaultBranch) {

        try {
            // Step 1. Get a reference to the tracking repository
            const refCommitSha: string = await getTrackingRepoReferenceController(session.accessToken, repoOwner, repoName, defaultBranch);

            // Step 2. Create a Tree with the log file content
            const logContent = "Log content here";
            const treeCommitSha = await createTrackingRepositoryTreeController(session.accessToken, repoOwner, repoName, logContent, refCommitSha);
            

        }   
        catch (error) {
            throw new Error(`Error getting tracking repository reference`);
        }
    }
    else {
        throw new Error("Authentication session or repository settings not found. Please ensure you are signed in and have a repository set up.");
    }
};