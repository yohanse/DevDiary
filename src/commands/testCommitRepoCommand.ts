import * as vscode from "vscode";
import createTrackingRepositoryCommitWithLogController from "../controllers/createTrackingRepositoryCommitWithLogController";

export default async () => {
    try {
        await createTrackingRepositoryCommitWithLogController();
        vscode.window.showInformationMessage("Commit created successfully");
    }
    catch (error) {
        vscode.window.showErrorMessage(`Error creating commit`);
    }
};  