import AnchorNode from "./anchorNode";
import HeadingNode from "./headingNode";
import { Operation } from "./operation.interface";

class PlainTextOperation implements Operation {
  apply(heading: HeadingNode): void;
  apply(anchor: AnchorNode): void;
  apply(arg: any): void {
    if (arg && arg instanceof HeadingNode) console.log("Text Heading");
    if (arg && arg instanceof AnchorNode) console.log("Text Anchor");
  }
}

export default PlainTextOperation;
