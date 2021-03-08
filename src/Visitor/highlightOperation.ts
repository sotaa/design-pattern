import AnchorNode from "./anchorNode";
import HeadingNode from "./headingNode";
import { Operation } from "./operation.interface";

class HighlightOperation implements Operation {
  apply(heading: HeadingNode): void;
  apply(anchor: AnchorNode): void;
  apply(arg: any): void {
    if (arg && arg instanceof HeadingNode) console.log("Highlight Heading");
    if (arg && arg instanceof AnchorNode) console.log("Highlight Anchor");
  }
}

export default HighlightOperation;
