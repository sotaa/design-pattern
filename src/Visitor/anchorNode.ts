import { HtmlNode } from "./htmlNode.interface";
import { Operation } from "./operation.interface";

class AnchorNode implements HtmlNode {
  execute(operation: Operation): void {
    operation.apply(this);
  }
}

export default AnchorNode;
