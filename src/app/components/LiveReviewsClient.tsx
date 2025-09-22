"use client";
import { useEffect, useState } from "react";

type Review = {
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export default function LiveReviewsClient() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/reviews", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setReviews(Array.isArray(data) ? data : []);
      } catch (e: any) {
        console.error(e);
        setErr("Impossible de charger les avis.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p className="text-center">⏳ Chargement des avis…</p>;
  if (err) return <p className="text-center text-red-500">{err}</p>;
  if (reviews.length === 0) return <p className="text-center">Aucun avis pour l’instant.</p>;

  return (
    <div className="mt-8 grid gap-4 max-w-2xl mx-auto">
      {reviews
        .slice() // copie
        .reverse() // pour avoir les plus récents en premier
        .map((r, i) => (
          <div key={i} className="p-4 border rounded-xl bg-card">
            <div className="font-semibold">
              {r.name || "Anonyme"} – ⭐ {r.rating}
            </div>
            <div className="text-sm mt-1">{r.comment}</div>
            <div className="text-xs text-gray-500 mt-2">
              {new Date(r.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
    </div>
  );
}
