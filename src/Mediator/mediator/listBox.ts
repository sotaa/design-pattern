import DialogBox from "./dialogBox";
import UiControl from "./uiControl";

class ListBox extends UiControl {
  private selection!: string;

  constructor(owner: DialogBox) {
    super(owner);
  }

  getSelection(): string {
    return this.selection;
  }
  setSelection(selection: string): void {
    this.selection = selection;
    this.owner.changed(this);
  }
}

export default ListBox;
