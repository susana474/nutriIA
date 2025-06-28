// src/services/database.ts
// SQLite service for offline product storage

import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

let db: SQLiteDBConnection | null = null;
const sqlite = new SQLiteConnection(CapacitorSQLite);

export async function initDatabase() {
  if (db) return db;
  db = await sqlite.createConnection('nutriscan', false, 'no-encryption', 1);
  await db.open();
  // example: load seed data if database empty
  // TODO: implement check for existing tables
  return db;
}

export async function getProductByBarcode(barcode: string) {
  if (!db) await initDatabase();
  const result = await db!.query('SELECT * FROM products WHERE barcode = ?', [barcode]);
  return result.values?.[0];
}

export async function searchProducts(term: string) {
  if (!db) await initDatabase();
  const result = await db!.query('SELECT * FROM products WHERE name LIKE ?', [`%${term}%`]);
  return result.values || [];
}

