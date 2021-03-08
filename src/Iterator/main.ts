import BrowseHistory from "./browseHistory";
import { Iterator } from "./iterator.interface";

class Main {
  constructor() {
    const history = new BrowseHistory();
    history.push("a");
    history.push("b");
    history.push("c");

    const iterator: Iterator<string> = history.createIterator();
    while (iterator.hasNext()) {
      const url = iterator.current();
      console.log(url);
      iterator.next();
    }
  }
}

export default Main;
