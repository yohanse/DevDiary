import * as vscode from 'vscode';

export default async () => {
    const choice = await vscode.window.showInformationMessage("We need to create a GitHub repository called 'DevDiary Tracking' to store your tracking logs. Do you want to proceed?", "Yes", "No");
    if (choice === "Yes") {
        vscode.window.showInformationMessage("Creating a GitHub repository called 'DevDiary Tracking'...");
    }
    else {
        vscode.window.showInformationMessage("You have chosen not to proceed with tracking.");
    }
};