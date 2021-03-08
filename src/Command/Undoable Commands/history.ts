import { UndoableCommand } from "./undoableCommand.interface";

class HistoryUndoable {
  private commands: UndoableCommand[] = [];

  push(command: UndoableCommand): void {
    this.commands.push(command);
  }
  pop() {
    const lastCommand = this.commands.pop();
    return lastCommand;
  }

  size(): number {
    return this.commands.length;
  }
}

export default HistoryUndoable;
