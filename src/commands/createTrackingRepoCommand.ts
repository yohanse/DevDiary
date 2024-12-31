import * as vscode from "vscode";
import inputRepositoryName from "../ui/inputRepositoryName";
import createTrackingRepoController from "../controllers/createTrackingRepoController";
import chooseRepoVisibility from "../ui/chooseRepoVisibility";

export default async () => {
    const repoName = await inputRepositoryName();
    if (repoName) {
        const visibility = await chooseRepoVisibility();
        if (visibility) {
            try {
                await createTrackingRepoController(repoName, visibility === "Private");
                vscode.window.showInformationMessage("Repository created successfully");
            }
            catch (error) {
                vscode.window.showErrorMessage(`Error creating repository`);
            }
        }
    }
};  