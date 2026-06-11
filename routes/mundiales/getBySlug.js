import { getBySlug } from '../../data/mundiales.js';

export function getBySlugHandler(req, res) {
  const { slug } = req.params;
  const mundial = getBySlug(slug);

  if (!mundial) {
    return res.status(404).json({ error: `No se encontró el mundial con slug "${slug}"` });
  }

  res.json(mundial);
}
