import BoldCommand from "./boldCommand";
import HistoryUndoable from "./history";
import HtmlDocument from "./htmlDocument";
import UndoCommand from "./undoCommand";

class Main {
  constructor() {
    const history = new HistoryUndoable();
    const document = new HtmlDocument();
    document.setContent("Hello World");
    const boldCommand = new BoldCommand(document, history);
    boldCommand.execute();
    console.log(document.getContent());

    const undoCommand = new UndoCommand(history);
    undoCommand.execute();
    console.log(document.getContent());
  }
}

export default Main;
