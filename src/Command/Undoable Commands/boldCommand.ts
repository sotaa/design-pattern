import HistoryUndoable from "./history";
import HtmlDocument from "./htmlDocument";
import { UndoableCommand } from "./undoableCommand.interface";

class BoldCommand implements UndoableCommand {
  private prevContent!: string;
  private document: HtmlDocument;
  private history: HistoryUndoable;

  constructor(document: HtmlDocument, history: HistoryUndoable) {
    this.document = document;
    this.history = history;
  }

  execute(): void {
    this.prevContent = this.document.getContent();
    this.document.makeBold();
    this.history.push(this);
  }

  unexecute(): void {
    this.document.setContent(this.prevContent);
  }
}

export default BoldCommand;
