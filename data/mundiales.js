import { DatabaseSync } from 'node:sqlite';
import { cwd } from 'node:process';

const db = new DatabaseSync(`${cwd()}/data/mundiales.db`);

export function getAll() {
  return db.prepare('SELECT slug FROM mundiales ORDER BY anio DESC').all();
}

export function getAllFull() {
  return db.prepare('SELECT * FROM mundiales ORDER BY anio DESC').all();
}

export function getBySlug(slug) {
  return db.prepare('SELECT * FROM mundiales WHERE slug = ?').get(slug);
}

export function getByCampeon(pais) {
  return db.prepare('SELECT slug FROM mundiales WHERE campeon = ? ORDER BY anio DESC').all(pais);
}

export function getRandom() {
  return db.prepare('SELECT * FROM mundiales ORDER BY RANDOM() LIMIT 1').get();
}

export function search(text) {
  const like = `%${text}%`;
  return db.prepare(`
    SELECT * FROM mundiales
    WHERE nombre      LIKE ?
       OR sede        LIKE ?
       OR campeon     LIKE ?
       OR subcampeon  LIKE ?
       OR goleador    LIKE ?
       OR resumen     LIKE ?
       OR descripcion LIKE ?
    ORDER BY anio DESC
  `).all(like, like, like, like, like, like, like);
}
