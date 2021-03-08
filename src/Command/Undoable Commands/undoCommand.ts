import { Command } from "./command.interface";
import HistoryUndoable from "./history";
import { UndoableCommand } from "./undoableCommand.interface";

class UndoCommand implements Command {
  private history = new HistoryUndoable();
  constructor(history: HistoryUndoable) {
    this.history = history;
  }

  execute(): void {
    if (this.history.size() > 0) {
      this.history.pop()?.unexecute();
    }
  }
}

export default UndoCommand;
