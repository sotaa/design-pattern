import DialogBox from "./dialogBox";
import UiControl from "./uiControl";

class TextBox extends UiControl {
  private content!: string;

  constructor(owner: DialogBox) {
    super(owner);
  }

  getContent(): string {
    return this.content;
  }
  setContent(content: string): void {
    this.content = content;
    this.owner.changed(this);
  }
}

export default TextBox;
