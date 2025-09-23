'use client';

import LiveReviewsClient from "../components/LiveReviewsClient";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";

function Card({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border">
      <h3
        className="text-xl font-semibold"
        style={{ fontFamily: "var(--uskay-font, ui-sans-serif)" }}
      >
        {title}
      </h3>
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

/* =============================== PAGE =============================== */
export default function Page() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Design tokens */}
      <style>{`
        :root {
          --primary: 151 100% 37%;
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
          --uskay-font: "Bodoni Moda", ui-serif, serif;
        }
        .bg-primary { background-color: hsl(var(--primary)); }
        .text-primary-foreground { color: hsl(var(--primary-foreground)); }
      `}</style>

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 inset-x-0 z-50 w-full border-b border-black bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/petit-logo.png"
              alt="Uskay Agency"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
            <span className="site-brand text-2xl md:text-3xl font-bold">
              Uskay Agency
            </span>
          </Link>

          <div className="flex items-center gap-12">
            <nav className="main-nav hidden md:flex items-center gap-6 text-lg">
              <a href="#services" className="hover:opacity-70">
                Services
              </a>
              <a href="#methode" className="hover:opacity-70">
                Méthode
              </a>
              <a href="#realisations" className="hover:opacity-70">
                Réalisations
              </a>
              <a href="#faq" className="hover:opacity-70">
                FAQ
              </a>
            </nav>

            <a
              href="#contact"
              className="rounded-full bg-brand px-6 py-3 text-white font-semibold shadow-sm hover:bg-brand/90 transition"
              style={{ backgroundColor: "#00BF63" }}
            >
              Nous contacter
            </a>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="pt-[84px] md:pt-[88px] pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Uskay Agency"
              width={300}
              height={200}
              className="mx-auto h-auto w-full max-w-[300px] sm:hidden border-0 outline-none shadow-none rounded-none bg-transparent"
              priority
            />
            <Image
              src="/images/logo.png"
              alt="Uskay Agency"
              width={700}
              height={400}
              className="mx-auto h-auto w-full hidden sm:block max-w-[700px] border-0 outline-none shadow-none rounded-none bg-transparent"
              priority
            />
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-left"
            style={{ fontFamily: "var(--uskay-font, ui-sans-serif)" }}
          >
            <span className="block italic">Du contenu qui parle,</span>
            <span className="block italic text-[#00bf63]">
              des ventes qui suivent.
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-3xl text-left">
            Uskay Agency met en relation <strong>marques &amp; CM</strong> avec
            les meilleurs<strong> créateurs UGC</strong>, et pilote vos
            campagnes de A à Z : sourcing, scripts, tournage, droits, livraison
            &amp; reporting.
          </p>

          <div className="flex flex-wrap items-center justify-start gap-4 sm:gap-6 my-6">
            <a
              className="inline-flex h-12 items-center rounded-2xl bg-[#00bf63] px-5 text-base font-medium text-white"
              href="#contact"
            >
              Demander un devis →
            </a>
            <a
              className="inline-flex h-12 items-center rounded-2xl border-2 border-foreground px-5 text-base font-medium"
              href="#realisations"
            >
              Voir des résultats →
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:flex sm:items-center sm:gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-xl">✔</span> Livrable entre 7 et 10 jours selon la demande.
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

      {/* ============== CONFIANCE ============== */}
      <div className="w-full border-t border-border">
        <section className="max-w-7xl mx-auto px-4 h-28 grid place-items-center text-center">
          <h3 className="uppercase tracking-[0.3em]">ILS NOUS FONT CONFIANCE</h3>
          <p className="mt-2 text-muted-foreground">
            Soyez les premiers à nous faire confiance.
          </p>
        </section>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="w-full border-t border-border">
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "var(--uskay-font, ui-sans-serif)" }}
              >
                SERVICES
              </h2>
              <p className="mt-3 text-muted-foreground">
                De A à Z ou à la carte, selon vos besoins et vos objectifs de
                marque.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card
                title="Sourcing & Casting"
                points={[
                  "- Sélection de créateurs alignés avec vos valeurs & votre audience.",
                  "- Vérification de la qualité des contenus et de l’engagement réel.",
                  "- Gestion des droits et conditions de diffusion.",
                ]}
              />
              <Card
                title="Stratégie & Scripts"
                points={[
                  "- Création d’angles créatifs adaptés au bien-être & lifestyle.",
                  "- Rédaction de scripts courts pour TikTok, Instagram, Reels & Ads.",
                  "- Accompagnement éditorial et recommandations personnalisées.",
                ]}
              />
              <Card
                title="Production UGC"
                points={[
                  "- Brief précis et adapté à votre marque.",
                  "- Vidéos authentiques : face caméra, avant/après, voix-off produit, publicité, ou générées par IA.",
                  "- Livraison de plusieurs variantes optimisées (3 à 5 formats).",
                ]}
              />
              <Card
                title="Post-production & Optimisation"
                points={[
                  "- Montage adapté aux plateformes (9:16, Reels, TikTok, Stories…)",
                  "- Ajout de sous-titres, cuts dynamiques et formats multiples.",
                  "- Tests d’accroches (hooks, CTA, intros) pour booster vos résultats.",
                ]}
              />
              <Card
                title="Gestion & Suivi"
                points={[
                  "- Coordination de projet de A à Z.",
                  "- Informations données en cas d’avance ou de retard.",
                  "- Possibilité de demander un point d’avancée à tout moment.",
                ]}
              />
              <Card
                title="UGC pour E-commerce & Réseaux sociaux"
                points={[
                  "- Vidéos produit, unboxing, review client.",
                  "- UGC publicitaires orientés conversion (ROAS).",
                  "- UGC organique pour renforcer la confiance (social proof).",
                ]}
              />
            </div>
          </div>
        </section>
      </div>

      {/* ================= MÉTHODE ================= */}
      <div className="w-full border-t border-border">
        <section id="methode" className="py-20 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "var(--uskay-font, ui-sans-serif)" }}
              >
                NOTRE MÉTHODE
              </h2>
              <p className="mt-3 text-muted-foreground">
                Un process simple, fluide et transparent, pensé pour gagner du
                temps et créer du contenu qui performe.
              </p>
            </div>
            <ol className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6 list-decimal list-inside">
              {[
                {
                  t: "Brief rapide",
                  d: "On définit vos besoins et objectifs dès le départ.",
                },
                {
                  t: "Sélection & validation",
                  d: "Propositions de créateurs et formats, vous validez avant lancement.",
                },
                {
                  t: "Production & ajustements",
                  d: "Création vidéos/photos + retours possibles selon le pack choisi.",
                },
                {
                  t: "Livraison finale",
                  d: "Envoi de contenus optimisés (formats adaptés + droits d’usage).",
                },
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

      {/* ================= RÉALISATIONS ================= */}
      <div className="w-full border-t border-border">
        <section id="realisations" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--uskay-font, ui-sans-serif)" }}
            >
              RÉALISATIONS
            </h2>
            <p className="mt-2 text-muted-foreground">
              Exemples d’UGC produits par notre réseau de créateurs et
              créatrices :
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: "Exemple UGC 1", src: "/videos/ugc-one.mp4" },
                { label: "Exemple UGC 2" },
                { label: "Exemple UGC 3" },
              ].map((item, i) => (
                <div key={i} className="rounded-3xl border border-border bg-card">
                  <div className="aspect-[9/16] w-full overflow-hidden rounded-t-3xl bg-black">
                    {item.src ? (
                      <video
                        src={item.src}
                        controls
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-contain"
                      />
                    ) : null}
                  </div>
                  <div className="p-3 text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ================= CTA ================= */}
      <div className="w-full border-t border-border">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card to-muted border border-border">
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: "var(--uskay-font, ui-sans-serif)" }}
              >
                Prêt à booster vos ventes avec de l’UGC qui convertit ?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Parlez-nous de votre marque, vos objectifs et vos délais. On
                vous répond sous 24h ouvrées.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90"
                >
                  Démarrer
                </a>
                <a
                  href="mailto:contact@uskay-agency.com?subject=Brief%20UGC&body=Bonjour%20Uskay%20Agency,%0A%0AMa%20marque:%20%0AObjectifs:%20%0AD%C3%A9lais:%20%0ABudget:%20%0A"
                  className="px-5 py-3 rounded-xl border border-border hover:border-muted-foreground"
                >
                  contact@uskay-agency.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= FAQ ================= */}
<div className="full-bleed border-t border-border">
  <section id="faq" className="py-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="text-3xl md:text-4xl font-bold"
        style={{ fontFamily: 'var(--uskay-font, ui-sans-serif)' }}
      >
        FAQ
      </h2>
      <div className="mt-8 divide-y divide-border rounded-2xl border border-border overflow-hidden">
        {[
          {q:"Pourquoi passer par une agence UGC ?", a:"Pour gagner du temps et obtenir des contenus authentiques, performants et prêts à l’emploi, créés par des créateurs spécialisés."},
          {q:"Quels types de contenus livrez-vous ?", a:"Des vidéos (face caméra, avant/après, publicités, voix-off) et des photos (lifestyle & produit), optimisées pour vos réseaux sociaux."},
          {q:"Quels sont vos délais ?", a:"En moyenne 7 à 14 jours après validation du brief, selon le pack choisi."},
          {q:"Proposez-vous du sur-mesure ?", a:"Oui. Vous pouvez choisir un pack clé en main ou une prestation personnalisée. Selon le pack choisi, des retours et modifications sont inclus."},
        ].map((item, i) => (
          <details key={i} className="group open:bg-card">
            <summary className="cursor-pointer px-6 py-5 list-none flex items-center justify-between">
              {/* 🚀 gras retiré → font-normal */}
              <span className="font-normal">{item.q}</span>
              <span className="transition-transform group-open:rotate-45 text-muted-foreground">+</span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground">{item.a}</div>
          </details>
        ))}
      </div>
    </div>
  </section>
</div>


      {/* ================= AVIS ================= */}
      <div className="w-full h-px bg-black/10 my-10" />

      <section id="avis" className="py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Le composant gère le formulaire + la liste */}
          <LiveReviewsClient />
        </div>
      </section>

      {/* fin AVIS ↑ – séparateur fin, sans gros espace */}
      <div className="w-full h-px bg-black/80 my-8" />

      {/* ================= FORMULAIRE EXTERNE ================= */}
      <section aria-label="Formulaire externe" className="py-0">
        <h2
          className="font-heading text-3xl md:text-4xl font-bold text-center"
          style={{ fontFamily: "var(--uskay-font, ui-sans-serif)" }}
        >
          FORMULAIRE
        </h2>

        <p className="mt-4 mb-4 text-center">
          Vous avez collaboré avec nous ?{" "}
          <span className="font-medium">Partagez votre ressenti</span> en 1
          minute pour aider les prochains clients.
        </p>

        <div className="mt-2 flex justify-center mb-16">
          <a
            href="https://forms.gle/eMCY21rUJ1pzfScv5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-primary-foreground font-medium hover:opacity-90 transition"
          >
            Partager mon expérience →
          </a>
        </div>
      </section>

      {/* séparateur entre FORMULAIRE EXTERNE et CONTACT */}
      <div className="w-full h-px bg-black/80 my-8" />

      {/* ================= CONTACT ================= */}
      <section id="contact" className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--uskay-font, ui-sans-serif)" }}
          >
            CONTACT
          </h2>
          <p className="mt-3 text-muted-foreground">
            Expliquez votre besoin en 30 secondes. On revient vers vous
            rapidement.
          </p>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="mt-8 grid gap-4"
          >
            <input
              type="hidden"
              name="access_key"
              value="6059c097-7686-40aa-ac33-faed518453a0"
            />
            <input
              type="hidden"
              name="subject"
              value="Nouveau message (formulaire de contact)"
            />
            {/* évite le localhost en prod */}
            <input
              type="hidden"
              name="redirect"
              value="/merci?from=contact#contact"
            />
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                className="w-full rounded-xl bg-input border border-border px-4 py-3"
                placeholder="Votre nom"
                required
              />
              <input
                name="email"
                type="email"
                className="w-full rounded-xl bg-input border border-border px-4 py-3"
                placeholder="Email"
                required
              />
            </div>

            <input
              name="company"
              className="w-full rounded-xl bg-input border border-border px-4 py-3"
              placeholder="Marque / site (optionnel)"
            />
            <textarea
              name="message"
              className="w-full rounded-xl bg-input border border-border px-4 py-3 min-h-[140px]"
              placeholder="Votre avis / votre besoin"
              required
            />

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-[#00bf63] text-white hover:opacity-90"
              >
                Envoyer
              </button>
              <span className="text-sm text-muted-foreground">
                Ou contactez-nous :
                <a
                  className="underline ml-1"
                  href="mailto:contact@uskay-agency.com"
                >
                  contact@uskay-agency.com
                </a>
              </span>
            </div>
          </form>
        </div>
      </section>
    </div> // <-- ferme le wrapper .min-h-screen
  );
}
