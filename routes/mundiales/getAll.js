import { getAll, getAllFull } from '../../data/mundiales.js';

export function getAllHandler(req, res) {
  const isFull = req.query.include === 'full';
  const mundiales = isFull ? getAllFull() : getAll().map((m) => m.slug);
  res.json(mundiales);
}
