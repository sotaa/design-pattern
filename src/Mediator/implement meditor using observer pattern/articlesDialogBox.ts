import Button from "./button";
import ListBox from "./listBox";
import TextBox from "./textBox";
import ArticleSelectedObserver from "./ArticleSelectedObserver";
import titleChangedObserver from "./titleChangedObserver";

class ArticlesDialogBox {
  private articlesListBox = new ListBox();
  private titleTextBox = new TextBox();
  private SaveButton = new Button();

  constructor() {
    this.articlesListBox.addEventHandler(
      new ArticleSelectedObserver(this.articleSelected.bind(this))
    );
    this.titleTextBox.addEventHandler(
      new titleChangedObserver(this.titleChanged.bind(this))
    );
  }

  simulateUserInteraction(): void {
    this.articlesListBox.setSelection("Article 1");
    this.titleTextBox.setContent("");
    this.articlesListBox.setSelection("Article 2");
    console.log("TextBox: " + this.titleTextBox.getContent());
    console.log("Button: " + this.SaveButton.getEnabled());
  }

  protected articleSelected(): void {
    this.titleTextBox.setContent(this.articlesListBox.getSelection());
    this.SaveButton.setEnabled(true);
  }
  protected titleChanged(): void {
    const content = this.titleTextBox.getContent();
    const isEmpty = content == null || !content;
    this.SaveButton.setEnabled(!isEmpty);
  }
}
export default ArticlesDialogBox;
