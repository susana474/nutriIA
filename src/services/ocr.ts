// src/services/ocr.ts
// Wrapper for OCR using Tesseract.js

import Tesseract from 'tesseract.js';

export async function recognizeText(image: File | Blob): Promise<string> {
  const { data: { text } } = await Tesseract.recognize(image, 'eng');
  return text;
}
