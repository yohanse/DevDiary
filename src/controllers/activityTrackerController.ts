import * as vscode from "vscode";

let fileActivities: any[] = [];

// To track file opens
vscode.workspace.onDidOpenTextDocument((document) => {
  fileActivities.push(JSON.stringify({
    event: "File Opened",
    fileName: document.fileName,
    timestamp: new Date().toISOString(),
  }));
});

// To track file closes
vscode.workspace.onDidCloseTextDocument((document) => {
  fileActivities.push(JSON.stringify({
    event: "File Closed",
    fileName: document.fileName,
    timestamp: new Date().toISOString(),
  }));
});

// To track file saves
vscode.workspace.onDidSaveTextDocument((document) => {
    fileActivities.push(JSON.stringify({
      event: "File Saved",
      content: document.getText(), // You may store the file content, if required
      fileName: document.fileName,
      timestamp: new Date().toISOString(),
    }));
});


// To track file edits
vscode.workspace.onDidChangeTextDocument((event) => {
    const changes = event.contentChanges.map((change) => change.text).join("\n");
  
    fileActivities.push(JSON.stringify({
      event: "File Edited",
      changes: changes,
      fileName: event.document.fileName,
      timestamp: new Date().toISOString(),
    }));
});
  
// To track commands
//   vscode.commands.onDidExecuteCommand((e: any) => {
//     fileActivities.push({
//       event: "Command Executed",
//       command: e.command,
//       arguments: e.arguments,
//       timestamp: new Date().toISOString(),
//     });
//   });

const getFileActivities = () => fileActivities;
const setFileActivities = () => {
  fileActivities = [];
};

export { getFileActivities, setFileActivities };