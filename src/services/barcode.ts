// src/services/barcode.ts
// Wrapper for Barcode scanning using Capacitor plugin

import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

export async function scanBarcode(): Promise<string | null> {
  await BarcodeScanner.checkPermission({ force: true });
  const result = await BarcodeScanner.startScan();
  if (result.hasContent) {
    return result.content;
  }
  return null;
}
