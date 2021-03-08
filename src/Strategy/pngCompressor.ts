import { Compressor } from "./compressor.interface";

class PngCompressor implements Compressor {
  compress(fileName: string) {
    console.log("Compressing using PNG");
  }
}

export default PngCompressor;
