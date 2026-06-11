import { getRandom } from '../../data/mundiales.js';

export function getRandomHandler(req, res) {
  res.json(getRandom());
}
