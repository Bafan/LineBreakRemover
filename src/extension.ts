import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "LineBreakRemover" is now active!');

	let disposable = vscode.commands.registerCommand('LineBreakRemover.removeLinebreaks', () => {
		const editor = vscode.window.activeTextEditor;
        const selectedText = editor?.document.getText(editor.selection);
		if (selectedText!==undefined)
		{
			const linebreaksRemovedText=selectedText.replace(/(\s\s+)/gm, " ");
			
			editor?.edit((editBuilder)=>{
				editBuilder.replace(editor.selection,linebreaksRemovedText);
			});
			vscode.env.clipboard.writeText(linebreaksRemovedText);
			vscode.window.showInformationMessage("Copied to clipboard");
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
