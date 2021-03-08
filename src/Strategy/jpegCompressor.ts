import { Compressor } from "./compressor.interface";

class JpegCompressor implements Compressor {
  compress(fileName: string) {
    console.log("Compressing using JPEG");
  }
}

export default JpegCompressor;
