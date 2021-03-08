import Button from "./button";
import DialogBox from "./dialogBox";
import ListBox from "./listBox";
import TextBox from "./textBox";
import UiControl from "./uiControl";

class ArticlesDialogBox extends DialogBox {
  private articlesListBox = new ListBox(this);
  private titleTextBox = new TextBox(this);
  private SaveButton = new Button(this);

  simulateUserInteraction(): void {
    this.articlesListBox.setSelection("Article 1");
    this.titleTextBox.setContent("");
    this.articlesListBox.setSelection("Article 2");
    console.log("TextBox: " + this.titleTextBox.getContent());
    console.log("Button: " + this.SaveButton.getEnabled());
  }

  changed(control: UiControl): void {
    if (control == this.articlesListBox) this.articleSelected();
    else if (control == this.titleTextBox) this.titleChanged();
  }

  private articleSelected(): void {
    this.titleTextBox.setContent(this.articlesListBox.getSelection());
    this.SaveButton.setEnabled(true);
  }
  private titleChanged(): void {
    const content = this.titleTextBox.getContent();
    const isEmpty = content == null || !content;
    this.SaveButton.setEnabled(!isEmpty);
  }
}

export default ArticlesDialogBox;
