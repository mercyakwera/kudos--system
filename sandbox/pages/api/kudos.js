import { kudos } from "../../lib/db";

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.json(kudos.filter(k => k.is_visible));
  }

  if (req.method === "POST") {
    const { fromUser, toUser, message } = req.body;

    const newKudo = {
      id: Date.now().toString(),
      fromUser,
      toUser,
      message,
      is_visible: true,
    };

    kudos.push(newKudo);
    return res.status(201).json(newKudo);
  }

  res.status(405).end();
}