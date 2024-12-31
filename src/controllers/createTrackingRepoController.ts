import * as vscode from "vscode";
import fetchAuthenticationSessionController from "./fetchAuthenticationSessionController";
import createTrackingRepoControllerWithSession from "./createTrackingRepoControllerWithSession";
import { GitHubRepository } from "../interfaces/githubRepository";

export default async (repoName: string, isPrivate: boolean): Promise<GitHubRepository> => {
    const session = await fetchAuthenticationSessionController();
    if (session) {
        return await createTrackingRepoControllerWithSession(repoName, session.accessToken, isPrivate);
    }
    else {
        throw new Error("Authentication session not found. Please ensure you are signed in and try again.");    
    }
};