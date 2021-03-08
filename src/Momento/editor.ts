import EditorState from "./editorState";

class Editor {
  private content: string = "";

  createState() {
    return new EditorState(this.content);
  }
  restore(state: EditorState): void {
    this.content = state.getContent();
  }

  setContent(content: string) {
    this.content = content;
  }
  getContent() {
    return this.content;
  }
}

export default Editor;
