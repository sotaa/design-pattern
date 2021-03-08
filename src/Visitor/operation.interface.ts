import AnchorNode from "./anchorNode";
import HeadingNode from "./headingNode";

export interface Operation {
  apply(heading: HeadingNode): void;
  apply(anchor: AnchorNode): void;
}
