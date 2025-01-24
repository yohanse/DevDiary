import * as vscode from "vscode";
import { getTrackingInterval, getTrackingStatus, setTrackingStatus } from "../helpers/state";
import { setFileActivities } from "../controllers/activityTrackerController";

export default async () => {
    if(getTrackingStatus()) {
        setTrackingStatus(false);

        clearInterval(getTrackingInterval());
        setFileActivities();
        vscode.window.showInformationMessage("Activity tracking stopped.");
        
    }
    else {
        vscode.window.showInformationMessage("Activity tracking hasn't started yet. Please activate it first.");
    }
};  