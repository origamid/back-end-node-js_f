import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync('./db.sqlite');

db.exec(`
  PRAGMA foreign_keys = 1;
  PRAGMA journal_mode = WAL;
  PRAGMA synchronous = NORMAL;

  PRAGMA cache_size = 2000;
  PRAGMA busy_timeout = 5000;
  PRAGMA temp_store = MEMORY;
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS "produtos" (
      "slug" TEXT PRIMARY KEY,
      "nome" TEXT NOT NULL,
      "categoria" TEXT NOT NULL,
      "preco" INTEGER NOT NULL
    );
  `);

const insert = db.prepare(`
  INSERT OR IGNORE INTO "produtos"
    ("slug", "nome", "categoria", "preco")
  VALUES
    (?,?,?,?)
  `);

insert.run('notebook', 'Notebook', 'eletronicos', 4000);

const item1 = insert.run('smartphone', 'Smartphone', 'eletronicos', 4000);

insert.run('mouse', 'Mouse', 'eletronicos', 200);
insert.run('mesa', 'Mesa', 'moveis', 2000);

const produtos = db.prepare(`SELECT * FROM "produtos"`).all();

const produto = db
  .prepare(`SELECT * FROM "produtos" WHERE "slug" = 'mouse'`)
  .get();

console.log(produto);
