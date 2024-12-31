import * as vscode from 'vscode';
import authenticateAndCreateRepo from './authenticateAndCreateRepo';
import doesRepositoryExist from './doesRepositoryExist';
import fetchAuthenticationSession from './fetchAuthenticationSession';
import fetchUserRepositories from './fetchUserRepositories';

export default async () => {

    const session = await fetchAuthenticationSession();

    if (!session) {
        vscode.window.showErrorMessage("GitHub authentication failed.");
        return;
    }

    const respositories = await fetchUserRepositories(session.accessToken);
    
    const isRepositoryExists = doesRepositoryExist(respositories);

    if(isRepositoryExists) {
        
    }
    
    const choice = await vscode.window.showInformationMessage("We need to create a GitHub repository called 'DevDiary Tracking' to store your tracking logs. Do you want to proceed?", "Yes", "No");
    if (choice === "Yes") {
        vscode.window.showInformationMessage("Creating a GitHub repository called 'DevDiary Tracking'...");
        await authenticateAndCreateRepo();
    }
    else {
        vscode.window.showInformationMessage("You have chosen not to proceed with tracking.");
    }
};