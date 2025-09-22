"use client";
import { useState } from "react";

export default function AvisForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg(null);
    setLoading(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email || "",
          rating: Number(data.rating),
          comment: data.comment,
        }),
      });

      if (!res.ok) throw new Error("Erreur lors de l'envoi");
      await res.json();

      setMsg("✅ Merci ! Votre avis a bien été envoyé.");
      form.reset();
    } catch (err: any) {
      setMsg("❌ " + (err.message || "Une erreur est survenue."));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 max-w-xl mx-auto mt-8">
      <input
        name="name"
        placeholder="Votre nom"
        required
        className="border rounded px-3 py-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email (non affiché)"
        className="border rounded px-3 py-2"
      />
      <select
        name="rating"
        required
        className="border rounded px-3 py-2"
        defaultValue=""
      >
        <option value="" disabled>Note</option>
        <option value="5">⭐⭐⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="2">⭐⭐</option>
        <option value="1">⭐</option>
      </select>
      <textarea
        name="comment"
        placeholder="Votre avis"
        required
        className="border rounded px-3 py-2 min-h-28"
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded px-4 py-2 border font-semibold bg-[#00bf63] text-white disabled:opacity-60"
      >
        {loading ? "Envoi..." : "Envoyer"}
      </button>
      {msg && <p className="text-sm mt-2">{msg}</p>}
    </form>
  );
}
