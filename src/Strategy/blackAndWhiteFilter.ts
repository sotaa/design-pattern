import { Filter } from "./filter.interface";

class BlackAndWhiteFilter implements Filter {
  apply(fileName: string) {
    console.log("Applying B&W filter");
  }
}

export default BlackAndWhiteFilter;
