import { Operation } from "./operation.interface";

export interface HtmlNode {
  execute(operation: Operation): void;
}
