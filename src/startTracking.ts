import * as vscode from 'vscode';
import authenticateAndCreateRepo from './authenticateAndCreateRepo';

export default async () => {
    const choice = await vscode.window.showInformationMessage("We need to create a GitHub repository called 'DevDiary Tracking' to store your tracking logs. Do you want to proceed?", "Yes", "No");
    if (choice === "Yes") {
        vscode.window.showInformationMessage("Creating a GitHub repository called 'DevDiary Tracking'...");
        await authenticateAndCreateRepo();
    }
    else {
        vscode.window.showInformationMessage("You have chosen not to proceed with tracking.");
    }
};