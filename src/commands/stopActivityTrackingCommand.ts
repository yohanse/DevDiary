import * as vscode from "vscode";
import { getTrackingInterval, getTrackingStatus, setTrackingStatus } from "../helpers/state";

export default async () => {
    if(getTrackingStatus()) {
        setTrackingStatus(false);

        clearInterval(getTrackingInterval());
        vscode.window.showInformationMessage("Activity tracking stopped.");
        
    }
    else {
        vscode.window.showInformationMessage("Activity tracking hasn't started yet. Please activate it first.");
    }
};  