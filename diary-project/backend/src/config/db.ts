import Database from 'better-sqlite3';
import path from 'path';

const dbpath = path.join(__dirname, '../data/database.db');

export const db = new Database(dbpath);

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS media (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    type TEXT NOT NULL,
    rating INTEGER DEFAULT 0,
    review TEXT,
    date_added DATE DEFAULT CURRENT_DATE,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )
`);