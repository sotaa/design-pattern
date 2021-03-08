import { Command } from "./command.interface";

export interface UndoableCommand extends Command {
  unexecute(): void;
}
