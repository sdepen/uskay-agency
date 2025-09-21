// src/components/LiveReviewsClient.tsx
'use client';

import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

type Review = {
  name: string;
  company: string | null;
  rating: number;
  message: string;
  created_at: string;
};

export default function LiveReviewsClient() {
  const [items, setItems] = useState<Review[] | null>(null);

  useEffect(() => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    supabase
      .from('reviews')
      .select('name,company,rating,message,created_at')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(9)
      .then(({ data }) => setItems(data ?? []));
  }, []);

  if (!items) return <p className="mt-8 text-center text-muted-foreground">Chargement…</p>;

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-center" style={{ fontFamily: 'var(--uskay-font, ui-sans-serif)' }}>
        Les retous de nos clients !
      </h3>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((r, i) => (
          <figure key={i} className="rounded-2xl border border-border p-6 bg-card">
            <div className="flex items-center gap-1 text-amber-400" aria-label={`${r.rating} étoiles`}>
              <span className="text-lg">{"★★★★★".slice(0, r.rating)}</span>
              <span className="text-lg text-muted-foreground">{"☆☆☆☆☆".slice(0, 5 - r.rating)}</span>
            </div>
            <blockquote className="mt-3">“{r.message}”</blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              {r.name}{r.company ? ` — ${r.company}` : ""} • {new Date(r.created_at).toLocaleDateString("fr-FR")}
            </figcaption>
          </figure>
        ))}
        {items.length === 0 && (
          <p className="text-center text-muted-foreground col-span-full">
            Aucun avis pour le moment. Soyez le premier !
          </p>
        )}
      </div>
    </div>
  );
}
