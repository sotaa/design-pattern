import AnchorNode from "./anchorNode";
import HeadingNode from "./headingNode";
import HighlightOperation from "./highlightOperation";
import HtmlDocument from "./htmlDocument";
import PlainTextOperation from "./plainTextOperation";

class Main {
  constructor() {
    const document = new HtmlDocument();
    document.add(new HeadingNode());
    document.add(new AnchorNode());
    document.execute(new PlainTextOperation());
  }
}

export default Main;
