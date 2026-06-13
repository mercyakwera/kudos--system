import { useEffect, useState } from "react";

export default function Home() {
  const [kudos, setKudos] = useState([]);
  const [form, setForm] = useState({
    fromUser: "",
    toUser: "",
    message: "",
  });

  // Load kudos feed
  const loadKudos = async () => {
    const res = await fetch("/api/kudos");
    const data = await res.json();
    setKudos(data);
  };

  useEffect(() => {
    loadKudos();
  }, []);

  // Submit new kudos
  const submitKudo = async () => {
    await fetch("/api/kudos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ fromUser: "", toUser: "", message: "" });
    loadKudos();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Kudos System</h1>

      {/* FORM */}
      <div style={{ marginBottom: 20 }}>
        <h2>Send Kudos</h2>

        <input
          placeholder="From user"
          value={form.fromUser}
          onChange={(e) => setForm({ ...form, fromUser: e.target.value })}
        />

        <input
          placeholder="To user"
          value={form.toUser}
          onChange={(e) => setForm({ ...form, toUser: e.target.value })}
        />

        <input
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button onClick={submitKudo}>Send Kudos</button>
      </div>

      <hr />

      {/* FEED */}
      <h2>Recent Kudos</h2>

      {kudos.length === 0 ? (
        <p>No kudos yet.</p>
      ) : (
        kudos.map((k) => (
          <div key={k.id} style={{ marginBottom: 10 }}>
            <b>{k.fromUser}</b> → <b>{k.toUser}</b>
            <p>{k.message}</p>
          </div>
        ))
      )}
    </div>
  );
}
