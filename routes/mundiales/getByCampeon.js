import { getByCampeon } from '../../data/mundiales.js';

export function getByCampeonHandler(req, res) {
  const { pais } = req.params;
  const resultados = getByCampeon(pais);
  res.json(resultados.map((m) => m.slug));
}
