import { kudos } from "../../../lib/db";

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { id } = req.body;

  const kudo = kudos.find((k) => k.id === id);

  if (!kudo) {
    return res.status(404).json({ error: "Not found" });
  }

  kudo.is_visible = !kudo.is_visible;

  return res.status(200).json(kudo);
}
