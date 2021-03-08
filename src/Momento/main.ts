import Editor from "./editor";
import Histories from "./history";

class Main {
  constructor() {
    const editor = new Editor();
    const history = new Histories();

    editor.setContent("A");
    history.push(editor.createState());

    editor.setContent("B");
    history.push(editor.createState());

    editor.setContent("C");
    editor.restore(history.pop());
    editor.restore(history.pop());

    console.log(editor.getContent());
  }
}

export default Main;
