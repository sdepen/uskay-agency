'use client';
import { useEffect } from 'react';
import Link from "next/link";
import LiveReviews from './components/LiveReviewsClient';

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 rounded-2xl bg-card border border-border">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-muted-foreground text-xs mt-1">{label}</div>
    </div>
  );
}

function Card({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <h3 className="text-xl font-semibold" style={{ fontFamily: 'var(--uskay-font, ui-sans-serif)' }}>{title}</h3>
      <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-primary/70" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  useEffect(() => { document.documentElement.style.scrollBehavior = 'smooth'; }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Variables de thème (couleur & police) */}
      <style>{`
        :root {
          --primary: 151 100% 37%; /* #00BF63 */
          --primary-foreground: 0 0% 100%;
          --background: 0 0% 100%;
          --foreground: 224 71.4% 4.1%;
          --card: 0 0% 100%;
          --card-foreground: 224 71.4% 4.1%;
          --popover: 0 0% 100%;
          --popover-foreground: 224 71.4% 4.1%;
          --secondary: 220 14.3% 95.9%;
          --secondary-foreground: 220.9 39.3% 11%;
          --muted: 220 14.3% 95.9%;
          --muted-foreground: 220 8.9% 46.1%;
          --accent: 220 14.3% 95.9%;
          --accent-foreground: 220.9 39.3% 11%;
          --destructive: 0 84.2% 60.2%;
          --destructive-foreground: 210 20% 98%;
          --border: 220 13% 91%;
          --input: 220 13% 91%;
          --ring: 215 20.2% 65.1%;
          --radius: 1rem;
          --uskay-font: "Brown Sugar", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans";
        }
        body { margin: 0; }
        .bg-primary { background-color: hsl(var(--primary)); }
        .text-primary-foreground { color: hsl(var(--primary-foreground)); }
      `}</style>

      {/* HERO */}
      <section className="pt-20 pb-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo centré au-dessus du badge */}
          <div className="mb-8 flex justify-center border-0">
            <img
              src="/images/logo.png"
              alt="Uskay Agency"
              className="w-[min(88vw,720px)] h-auto border-0 outline-none shadow-none rounded-none bg-transparent"
            />
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--uskay-font, ui-sans-serif)' }}
          >
            <span className="block italic">Du contenu qui parle,</span>
            <span className="block italic text-[#00bf63]">des ventes qui suivent.</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            Uskay Agency met en relation <strong>marques &amp; CM</strong> avec les meilleurs
            <strong> créateurs UGC</strong>, et pilote vos campagnes de A à Z : sourcing, scripts,
            tournage, droits, livraison &amp; reporting.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-start gap-4 sm:gap-6 my-6">
            <a className="inline-flex h-12 items-center rounded-2xl bg-[#00bf63] px-5 text-base font-medium text-white">
              Demander un devis →
            </a>
            <a className="inline-flex h-12 items-center rounded-2xl border-2 border-foreground px-5 text-base font-medium">
              Voir des résultats →
            </a>
          </div>

          {/* Petits points clés */}
          <div className="mt-8 grid gap-3 sm:flex sm:items-center sm:gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-xl">✔</span> Livrable entre 5 et 7 jours. 
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✔</span> Droits d’utilisation inclus. 
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✔</span> Itérations incluses. 
            </div>
          </div>
        </div>
      </section>

      {/* CONFIANCE — full-bleed border Y */}
      <div className="full-bleed border-y border-border">
        <section className="max-w-7xl mx-auto px-4 h-28 grid place-items-center text-center">
          <h3 className="uppercase tracking-[0.3em]">ILS NOUS FONT CONFIANCE</h3>
          <p className="mt-2 text-muted-foreground">Soyez les premiers à nous faire confiance.</p>
        </section>
      </div>

      {/* Services — full-bleed border T */}
      <div className="full-bleed border-t border-border">
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--uskay-font, ui-sans-serif)' }}>SERVICES</h2>
              <p className="mt-3 text-muted-foreground">De A à Z ou à la carte, selon vos besoins et votre niveau de maturité UGC.</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card title="Sourcing & Casting" points={["Sélection créateurs par niche & audience","Vérification qualité & taux d'acceptation","Négociation des droits & conditions"]} />
              <Card title="Stratégie & Scripts" points={["Angles créatifs orientés conversion","Scripts courts natifs TikTok/IG/UGC Ads","Calendrier éditorial & tests A/B"]} />
              <Card title="Production UGC" points={["Brief clair & guidelines brand","Tournage mobile pro, formats 9:16","Livraison 3 à 5 variantes par créatives"]} />
              <Card title="Post-prod & Hook testing" points={["Sous-titres, cuts, formats multi-plateformes","Iterative testing (hook, CTA, intro)","Itérations incluses selon pack"]} />
              <Card title="Gestion & Reporting" points={["Coordination de bout en bout","Tableau de suivi partagé","Débrief & recommandations"]} />
              <Card title="UGC pour e-commerce" points={["UGC produit, unboxing, UGC review","UGC ads orientées ROAS","UGC organique pour social proof"]} />
            </div>
          </div>
        </section>
      </div>

      {/* Process — full-bleed border T */}
      <div className="full-bleed border-t border-border">
        <section id="methode" className="py-20 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--uskay-font, ui-sans-serif)' }}>NOTRE MÉTHODE</h2>
              <p className="mt-3 text-muted-foreground">Process clair, délais courts, un seul interlocuteur.</p>
            </div>
            <ol className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6 list-decimal list-inside">
              {[
                {t:"Brief express", d:"Objectifs, offre, audience, canaux, usages (ads/organique)."},
                {t:"Casting & validation", d:"Shortlist de créateurs avec exemples & KPI."},
                {t:"Prod & itérations", d:"Tournage + post-prod. Aller-retour inclus selon pack."},
                {t:"Livraison & droits", d:"Exports optimisés 9:16, droits d'usage définis."},
              ].map((s, i) => (
                <li key={i} className="p-5 rounded-2xl bg-card border border-border">
                  <p className="font-semibold">{s.t}</p>
                  <p className="mt-1 text-muted-foreground text-sm">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>

{/* RÉALISATIONS */}
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {/* Carte unique */}
  <div className="rounded-3xl border border-border bg-card">
    <div className="aspect-[9/16] w-full overflow-hidden rounded-t-3xl bg-black">
      <video
        src="/videos/ugc-one.mp4"
        controls
        playsInline
        preload="metadata"
        className="h-full w-full object-contain"
      />
    </div>
    <div className="p-3 text-sm text-muted-foreground">Exemple UGC</div>
  </div>
</div>


      {/* CTA — full-bleed border T */}
      <div className="full-bleed border-t border-border">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card to-muted border border-border">
              <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'var(--uskay-font, ui-sans-serif)' }}>Prêt à booster vos ventes avec de l'UGC qui convertit ?</h3>
              <p className="mt-2 text-muted-foreground">Parlez-nous de votre marque, vos objectifs et vos délais. On vous répond sous 24h ouvrées.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90">Démarrer</a>
                <a
                  href="mailto:contact@uskay-agency.com?subject=Brief%20UGC&body=Bonjour%20Uskay%20Agency,%0A%0AMa%20marque:%20%0AObjectifs:%20%0AD%C3%A9lais:%20%0ABudget:%20%0A"
                  onClick={(e) => {
                    setTimeout(() => {
                      if (!document.hidden) {
                        window.open(
                          'https://mail.google.com/mail/?view=cm&fs=1&to=contact@uskay-agency.com&su=Brief%20UGC&body=Bonjour%20Uskay%20Agency,%0A%0AMa%20marque:%20%0AObjectifs:%20%0AD%C3%A9lais:%20%0ABudget:%20%0A',
                          '_blank',
                          'noopener,noreferrer'
                        );
                      }
                    }, 120);
                  }}
                  className="px-5 py-3 rounded-xl border border-border hover:border-muted-foreground"
                >
                  contact@uskay-agency.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ — full-bleed border T */}
      <div className="full-bleed border-t border-border">
        <section id="faq" className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--uskay-font, ui-sans-serif)' }}>FAQ</h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border overflow-hidden">
              {[
                {q:"Pourquoi passer par une agence UGC ?", a:"Gain de temps, qualité, réseau de créateurs, process. On garantit casting, prod et livrables adaptés aux plateformes."},
                {q:"Quels secteurs couvrez-vous ?", a:"Health & wellness, services B2C et DTC."},
                {q:"Quels formats livrez-vous ?", a:"9:16 (1080×1920) par défaut, sous-titres srt/brûlés, variantes hook/CTA, versions IG Reels/TikTok/Shorts."},
                {q:"Gérez-vous la sponsorisation (ads) ?", a:"Nous créons les assets. Option : pilotage créa testing en collaboration avec votre media buyer / agence ads."},
              ].map((item, i) => (
                <details key={i} className="group open:bg-card">
                  <summary className="cursor-pointer px-6 py-5 list-none flex items-center justify-between">
                    <span className="font-medium">{item.q}</span>
                    <span className="transition-transform group-open:rotate-45 text-muted-foreground">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* AVIS — full-bleed border T */}
      <div className="full-bleed border-t border-border">
        <section id="avis" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center"
                style={{ fontFamily: 'var(--uskay-font, ui-sans-serif)' }}>
            </h2>
            <p className="font-heading text-2xl md:text-3xl font-semibold text-center">
              Votre avis compte beaucoup pour nous !
            </p>

            {/* Formulaire d’avis (sans JS) */}
            <form action="/api/reviews" method="POST" className="mt-8 grid gap-4 max-w-2xl mx-auto">
              <input type="hidden" name="redirect" value="http://localhost:3000/merci?/mercifrom=avis#avis" />

              {/* Étoiles 1 → 5 */}
              <div className="w-full text-left">
                <div className="rating inline-flex" dir="rtl">
                  <input id="star5" type="radio" name="rating" value="5" defaultChecked />
                  <label htmlFor="star5">★</label>

                  <input id="star4" type="radio" name="rating" value="4" />
                  <label htmlFor="star4">★</label>

                  <input id="star3" type="radio" name="rating" value="3" />
                  <label htmlFor="star3">★</label>

                  <input id="star2" type="radio" name="rating" value="2" />
                  <label htmlFor="star2">★</label>

                  <input id="star1" type="radio" name="rating" value="1" />
                  <label htmlFor="star1">★</label>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name"  placeholder="Votre nom"  className="w-full rounded-xl bg-input border border-border px-4 py-3" />
                <input name="email" type="email" placeholder="Email (non publié)" className="w-full rounded-xl bg-input border border-border px-4 py-3" />

                <input name="company" placeholder="Marque / site (optionnel)"
                      className="w-full rounded-xl bg-input border border-border px-4 py-3 sm:col-span-2" />

                <textarea name="message" required placeholder="Votre avis"
                          className="w-full rounded-xl bg-input border border-border px-4 py-3 min-h-[140px] sm:col-span-2" />
              </div>

              {/* Anti-spam (honeypot) */}
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="flex items-center justify-center">
                <button type="submit"
                        className="px-5 py-3 rounded-xl bg-[#00bf63] text-white hover:opacity-90">
                  Envoyer mon avis
                </button>
              </div>
            </form>

            <LiveReviews />

            {/* fine separator full-bleed */}
            <div className="full-bleed my-12 h-px bg-black/80" />
          </div>

          {/* Style minimal pour les étoiles */}
          <style jsx>{`
            .rating { display:inline-flex; gap:6px; user-select:none; }
            .rating input { display:none; }
            .rating label { font-size:28px; line-height:1; cursor:pointer; color:#cbd5e1; transition:color .15s; }
            .rating label:hover,
            .rating label:hover ~ label,
            .rating input:checked ~ label { color:#f59e0b; }
          `}</style>
        </section>
      </div>

      {/* --- Titre FORMULAIRE (même style que CONTACT) --- */}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mt-6">
        FORMULAIRE
      </h2>

      {/* Phrase avant le CTA */}
      <p className="mt-4 mb-4 text-center">
        Vous avez collaboré avec nous ? <span className="font-medium">Partagez votre ressenti</span> en 1 minute pour aider les prochains clients.
      </p>

      {/* CTA */}
      <div className="mt-2 flex justify-center mb-16">
        <a
          href="https://forms.gle/eMCY21rUJ1pzfScv5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-3 text-white font-medium hover:bg-brand/90 focus-visible:outline-2 focus-visible:outline-brand transition"
        >
          Partager mon expérience →
        </a>
      </div>

      {/* --- Ligne full-bleed avant CONTACT --- */}
      <div className="full-bleed h-px bg-black/80 mb-6" />

      {/* Contact */}
      <section id="contact" className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">CONTACT</h2>
          <p className="mt-3 text-muted-foreground">
            Expliquez votre besoin en 30 secondes. On revient vers vous rapidement.
          </p>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="mt-8 grid gap-4"
          >
            {/* Clé + sujet + redirection */}
            <input type="hidden" name="access_key" value="6059c097-7686-40aa-ac33-faed518453a0" />
            <input type="hidden" name="subject" value="Nouveau message (formulaire de contact)" />
            <input type="hidden" name="redirect" value="http://localhost:3000/merci?from=contact#contact" />

            {/* Anti-spam (honeypot) */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" className="w-full rounded-xl bg-input border border-border px-4 py-3" placeholder="Votre nom" required />
              <input name="email" type="email" className="w-full rounded-xl bg-input border border-border px-4 py-3" placeholder="Email" required />
            </div>

            <input name="company" className="w-full rounded-xl bg-input border border-border px-4 py-3" placeholder="Marque / site (optionnel)" />

            <textarea name="message" className="w-full rounded-xl bg-input border border-border px-4 py-3 min-h-[140px]" placeholder="Votre avis / votre besoin" required />

            <div className="flex items-center gap-3">
              <button type="submit" className="px-5 py-3 rounded-xl bg-[#00bf63] text-white hover:opacity-90">
                Envoyer
              </button>
              <span className="text-sm text-muted-foreground">
                Ou contactez-nous :
                <a className="underline ml-1" href="mailto:contact@uskay-agency.com">contact@uskay-agency.com</a>
              </span>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
