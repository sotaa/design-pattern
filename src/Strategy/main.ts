import BlackAndWhiteFilter from "./blackAndWhiteFilter";
import ImageStorage from "./ImageStorage";
import JpegCompressor from "./jpegCompressor";
import PngCompressor from "./pngCompressor";

class Main {
  constructor() {
    const imageStorage = new ImageStorage(
      new PngCompressor(),
      new BlackAndWhiteFilter()
    );
    imageStorage.store("a");
  }
}
export default Main;
