"use client";
import { useEffect, useState } from "react";

interface Review {
  name: string;
  email: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export default function LiveReviewsClient() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/reviews", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setReviews(Array.isArray(data.items) ? data.items : []);
      } catch (e: any) {
        console.error("Erreur récupération avis :", e.message);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p className="text-center">⏳ Chargement des avis…</p>;

  return (
    <div className="mt-8 grid gap-4 max-w-2xl mx-auto">
      {reviews.length === 0 && <p>Aucun avis pour l’instant.</p>}
      {reviews.map((r, i) => (
        <div key={i} className="p-4 border rounded-xl bg-card">
          <div className="font-semibold">
            {r.name || "Anonyme"} – ⭐ {r.rating}
          </div>
          <div className="text-sm mt-1">{r.comment}</div>
        </div>
      ))}
    </div>
  );
}
