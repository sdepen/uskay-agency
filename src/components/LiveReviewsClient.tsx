"use client";
import { useEffect, useState } from "react";

type Review = {
  id: string;
  name: string;
  email?: string;
  brand?: string;
  message: string;
  rating: number;
  createdAt: number;
};

export default function LiveReviewsClient() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/api/reviews", { cache: "no-store" });
        const j = await r.json();
        setReviews(j.reviews ?? []);
      } catch {}
    })();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  // ✅ capture le formulaire AVANT tout await
  const form = e.currentTarget;

  const fd = new FormData(form);
  const payload = {
    name: (fd.get("name") as string) || "",
    email: (fd.get("email") as string) || "",
    brand: (fd.get("brand") as string) || "",
    message: (fd.get("message") as string) || "",
    rating: Number(fd.get("rating") || 5),
  };
  if (!payload.name || !payload.message) return;

  setSubmitting(true);
  try {
    const r = await fetch("/api/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!r.ok) return; // tu peux aussi afficher une erreur

    const j = await r.json();
    setReviews((prev) => [j.review, ...prev]);

    // ✅ utilise la ref capturée
    form.reset();
    const stars = form.querySelector<HTMLInputElement>('input[name="rating"]');
    if (stars) stars.value = "5";
  } finally {
    setSubmitting(false);
  }
}


  const inputBase =
    "block w-full h-14 rounded-[22px] border-[1.5px] border-gray-300 bg-white px-5 text-[18px] outline-none placeholder:text-gray-400";

  return (
    <section aria-label="Section avis" className="py-8">
      <div className="mx-auto max-w-[880px] px-4">
        <h2
          className="text-center font-medium leading-tight text-[34px] md:text-[40px] tracking-tight"
          style={{ fontFamily: "var(--uskay-font, ui-serif)" }}
        >
          Votre avis compte beaucoup pour nous&nbsp;!
        </h2>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <input type="hidden" name="rating" defaultValue="5" />
          <div className="grid gap-4 md:grid-cols-2">
            <input name="name" placeholder="Votre nom" required className={inputBase} />
            <input type="email" name="email" placeholder="Email (non publié)" className={inputBase} />
          </div>
          <input name="brand" placeholder="Marque / site (optionnel)" className={inputBase} />
          <textarea
            name="message"
            required
            placeholder="Votre avis"
            className="block w-full min-h-[220px] rounded-[22px] border-[1.5px] border-gray-300 bg-white px-5 py-4 text-[18px] leading-relaxed outline-none placeholder:text-gray-400"
          />
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-[28px] bg-[#00BF63] px-8 py-3 text-[18px] font-semibold text-white transition enabled:hover:opacity-95 disabled:opacity-60"
            >
              {submitting ? "Envoi…" : "Envoyer mon avis"}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10 text-center">
        <h3 className="font-medium text-[26px]" style={{ fontFamily: "var(--uskay-font, ui-serif)" }}>
          Les retours de nos clients&nbsp;!
        </h3>
        {reviews.length === 0 ? (
          <p className="mt-3 text-[16px] text-muted-foreground">
            Aucun avis pour le moment. Soyez le premier&nbsp;!
          </p>
        ) : (
          <ul className="mt-6 space-y-4 text-left">
            {reviews.map((r) => (
              <li key={r.id} className="rounded-[18px] border border-gray-200 p-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[16px]">{r.name}</p>
                  <div className="text-[#E2A100] text-[16px]">
                    {"★".repeat(r.rating)}
                  </div>
                </div>
                {r.brand && <p className="mt-0.5 text-sm text-muted-foreground">{r.brand}</p>}
                <p className="mt-2 leading-relaxed">{r.message}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
