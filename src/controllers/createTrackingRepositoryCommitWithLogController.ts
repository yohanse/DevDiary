import * as vscode from "vscode";
import fetchAuthenticationSessionController from "./fetchAuthenticationSessionController";
import retrieveTrackingRepositorySettings from "../helpers/retrieveTrackingRepositorySettings";
import getTrackingRepoReferenceController from "./getTrackingRepoReferenceController";
import createTrackingRepositoryTreeController from "./createTrackingRepositoryTreeController";
import createTrackingRepoCommitController from "./createTrackingRepoCommitController";
import updateBranchToCommitController from "./updateBranchToCommitController";

export default async (logContent: string) => {
    const session: vscode.AuthenticationSession = await fetchAuthenticationSessionController();
    const { repoOwner, repoName, defaultBranch } = retrieveTrackingRepositorySettings();



    if (session && repoOwner && repoName && defaultBranch) {

        try {
            console.log("Step 1. Get a reference to the tracking repository");
            // Step 1. Get a reference to the tracking repository
            const refSha: string = await getTrackingRepoReferenceController(session.accessToken, repoOwner, repoName, defaultBranch);

            console.log("Step 2. Create a Tree with the log file content");
            // Step 2. Create a Tree with the log file content
            const treeSha = await createTrackingRepositoryTreeController(session.accessToken, repoOwner, repoName, logContent, refSha);

            console.log("Step 3. Create a commit with the tree");
            // Step 3. Create a commit with the tree
            const commitMessage = "Commit message here";
            const commitSha = await createTrackingRepoCommitController(session.accessToken, repoOwner, repoName, commitMessage, refSha, treeSha);

            console.log("Step 4. Update the reference to the new commit");
            // Step 4. Update the reference to the new commit
            await updateBranchToCommitController(session.accessToken, repoOwner, repoName, defaultBranch, commitSha);

        }   
        catch (error) {
            throw new Error(`Error getting tracking repository reference`);
        }
    }
    else {
        throw new Error("Authentication session or repository settings not found. Please ensure you are signed in and have a repository set up.");
    }
};