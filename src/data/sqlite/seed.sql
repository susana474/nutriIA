-- src/data/sqlite/seed.sql
-- Example seed data for local SQLite database
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY,
  barcode TEXT UNIQUE,
  name TEXT,
  sugar REAL,
  fat REAL,
  salt REAL,
  fiber REAL,
  protein REAL
);

INSERT INTO products (barcode, name, sugar, fat, salt, fiber, protein) VALUES
  ('0001', 'Cereal Saludable', 5, 2, 0.5, 4, 3),
  ('0002', 'Bebida Energética', 25, 0, 0.2, 0, 1),
  ('0003', 'Galletas', 12, 8, 0.3, 1, 2),
  ('0004', 'Yogur Light', 8, 1, 0.1, 0, 5),
  ('0005', 'Barrita Proteica', 6, 3, 0.2, 2, 10),
  ('0006', 'Refresco', 30, 0, 0.1, 0, 0),
  ('0007', 'Snacks', 2, 15, 1, 1, 3),
  ('0008', 'Ensalada Lista', 2, 0.5, 0.3, 3, 2),
  ('0009', 'Pan Integral', 4, 1, 0.5, 5, 4),
  ('0010', 'Jugo Natural', 18, 0, 0, 1, 1);
