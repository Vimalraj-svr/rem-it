import * as vscode from 'vscode';
import { convertPxToRem } from './converter';

export function activate(context: vscode.ExtensionContext) {

  const config = vscode.workspace.getConfiguration('rem-it');
  const basePx = config.get<number>('basePx') || 16;
  const fileTypes = config.get<string[]>('includeFileTypes') || ['.css', '.scss', '.less'];


  let disposable = vscode.commands.registerCommand('rem-it.convertPxToRem', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    const doc = editor.document;
    const ext = doc.fileName.split('.').pop();

    if (!fileTypes.includes(`.${ext}`)) {
      vscode.window.showWarningMessage(`rem-it doesn't support .${ext} files`);
      return;
    }

    const fullText = doc.getText();
    const converted = convertPxToRem(fullText, basePx);
    const edit = new vscode.WorkspaceEdit();
    const range = new vscode.Range(
      doc.positionAt(0),
      doc.positionAt(fullText.length)
    );
    edit.replace(doc.uri, range, converted);

    vscode.workspace.applyEdit(edit).then(() => {
      console.log('Changes applied successfully!');
      vscode.window.showInformationMessage('Converted px to rem!');
    })
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {
  console.log('Extension "rem-it" is now deactivated.');
}