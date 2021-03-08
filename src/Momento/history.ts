import EditorState from "./editorState";

class Histories {
  private states: EditorState[] = [];

  push(state: EditorState) {
    this.states.push(state);
  }
  pop() {
    const lastState = this.states.pop();
    if (!lastState) return new EditorState("");
    return lastState;
  }
}

export default Histories;
