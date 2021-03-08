import { Compressor } from "./compressor.interface";
import { Filter } from "./filter.interface";

class ImageStorage {
  private compressor: Compressor;
  private filter: Filter;
  constructor(compressor: Compressor, filter: Filter) {
    this.compressor = compressor;
    this.filter = filter;
  }

  store(fileName: string): void {
    this.compressor.compress(fileName);
    this.filter.apply(fileName);
  }
}

export default ImageStorage;
8;
