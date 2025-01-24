import * as vscode from "vscode";
import { getTrackingStatus, setTrackingInterval, setTrackingStatus } from "../helpers/state";
import { getFileActivities, setFileActivities } from "../controllers/activityTrackerController";
import aiPostController from "../controllers/aiPostController";
import create from "../controllers/createTrackingRepoCommitController";
import createTrackingRepositoryCommitWithLogController from "../controllers/createTrackingRepositoryCommitWithLogController";

export default async () => {
    if(getTrackingStatus()) {
        vscode.window.showInformationMessage("Activity tracking is already started");
    }
    else {
        setTrackingStatus(true);

        const trackingInterval: NodeJS.Timeout = setInterval(async () => {
            const fileActivities = getFileActivities();
            try {
                console.log(fileActivities);
                const response = await aiPostController(fileActivities);
                await createTrackingRepositoryCommitWithLogController(response);
            } catch (error) {
                vscode.window.showErrorMessage("There was an error while posting the data to the AI model");
            }
            setFileActivities();
        }, 60000);
        setTrackingInterval(trackingInterval);
        vscode.window.showInformationMessage("Activity tracking started");
    }
};  