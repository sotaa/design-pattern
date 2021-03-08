import { HtmlNode } from "./htmlNode.interface";
import { Operation } from "./operation.interface";

class HtmlDocument {
  nodes: HtmlNode[] = [];

  add(node: HtmlNode) {
    this.nodes.push(node);
  }

  execute(operation: Operation) {
    this.nodes.forEach((node) => {
      node.execute(operation);
    });
  }
}

export default HtmlDocument;
