import UiControl from "./uiControl";

class TextBox extends UiControl {
  private content!: string;

  getContent(): string {
    return this.content;
  }
  setContent(content: string): void {
    this.content = content;
    this.notifyObserver();
  }
}

export default TextBox;
