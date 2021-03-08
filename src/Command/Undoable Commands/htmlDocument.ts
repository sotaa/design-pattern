class HtmlDocument {
  private content!: string;

  makeBold() {
    this.content = "<b>" + this.content + "</b>";
  }

  getContent() {
    return this.content;
  }
  setContent(content: string) {
    this.content = content;
  }
}

export default HtmlDocument;
