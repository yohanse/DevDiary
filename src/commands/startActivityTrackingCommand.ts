import * as vscode from "vscode";
import { getTrackingStatus, setTrackingInterval, setTrackingStatus } from "../helpers/state";

export default async () => {
    if(getTrackingStatus()) {
        vscode.window.showInformationMessage("Activity tracking is already started");
    }
    else {
        setTrackingStatus(true);

        const trackingInterval: NodeJS.Timeout = setInterval(() => vscode.window.showInformationMessage("Tracking ....."), 500);
        setTrackingInterval(trackingInterval);
        vscode.window.showInformationMessage("Activity tracking started");
    }
};  