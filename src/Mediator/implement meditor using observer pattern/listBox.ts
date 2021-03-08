import UiControl from "./uiControl";

class ListBox extends UiControl {
  private selection!: string;

  getSelection(): string {
    return this.selection;
  }
  setSelection(selection: string): void {
    this.selection = selection;
    this.notifyObserver();
  }
}

export default ListBox;
