import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';

const db = new DatabaseSync(`${cwd()}/data/mundiales.db`);

db.exec(`
  CREATE TABLE IF NOT EXISTS mundiales (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre      TEXT    NOT NULL,
    anio        INTEGER NOT NULL,
    sede        TEXT    NOT NULL,
    campeon     TEXT    NOT NULL,
    subcampeon  TEXT    NOT NULL,
    goleador    TEXT    NOT NULL,
    equipos     INTEGER NOT NULL,
    imagen      TEXT    NOT NULL,
    slug        TEXT    NOT NULL UNIQUE,
    resumen     TEXT    NOT NULL,
    descripcion TEXT    NOT NULL
  );
`);

const mundiales = JSON.parse(readFileSync(`${cwd()}/data/mundiales.json`, 'utf-8'));

const insert = db.prepare(`
  INSERT OR REPLACE INTO mundiales
    (nombre, anio, sede, campeon, subcampeon, goleador, equipos, imagen, slug, resumen, descripcion)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

for (const m of mundiales) {
  insert.run(
    m.nombre, m.anio, m.sede, m.campeon, m.subcampeon,
    m.goleador, m.equipos, m.imagen, m.slug, m.resumen, m.descripcion
  );
}

console.log(`Base de datos poblada con ${mundiales.length} ediciones.`);
db.close();
