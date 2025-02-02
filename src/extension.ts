// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import createTrackingRepoCommand from './commands/createTrackingRepoCommand';
import testCommitRepoCommand from './commands/testCommitRepoCommand';
import startActivityTrackingCommand from './commands/startActivityTrackingCommand';
import stopActivityTrackingCommand from './commands/stopActivityTrackingCommand';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "devdiary" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json;
	const createTrackingRepo = vscode.commands.registerCommand('devdiary.createTrackingRepo', createTrackingRepoCommand);
	const startActivityTracking = vscode.commands.registerCommand('devdiary.startActivityTracking', startActivityTrackingCommand);
	const stopActivityTracking = vscode.commands.registerCommand('devdiary.stopActivityTracking', stopActivityTrackingCommand);
	const testCommitRepo = vscode.commands.registerCommand('devdiary.testCommit', testCommitRepoCommand);

	context.subscriptions.push(createTrackingRepo);
	context.subscriptions.push(startActivityTracking);
	context.subscriptions.push(stopActivityTracking);
	context.subscriptions.push(testCommitRepo);
}

// This method is called when your extension is deactivated
export function deactivate() { }
