'use client';

import { useEffect } from 'react';

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
  // (optionnel) petit confort visuel au chargement
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

{/* Top bar */}
<header className="sticky top-0 z-50 backdrop-blur bg-background/70 border-b border-border">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    
    {/* Gauche : logo rond + nom cliquables */}
    <a href="#top" className="flex items-center gap-3">
  <img
    src="/images/petit-logo.png"
    alt="Uskay Agency Logo"
    className="h-8 w-8 object-contain rounded-full"
  />
  <span
    className="text-lg font-semibold"
    style={{ fontFamily: "'Brown Sugar', Arial, Helvetica, sans-serif" }}
  >
    Uskay Agency
  </span>
</a>

    {/* Droite : tes boutons déjà existants */}
    <nav className="hidden md:flex items-center gap-6 text-sm">
      <a href="#services" className="hover:text-foreground/90">Services</a>
      <a href="#process" className="hover:text-foreground/90">Méthode</a>
      <a href="#portfolio" className="hover:text-foreground/90">Réalisations</a>
      <a href="#faq" className="hover:text-foreground/90">FAQ</a>
      <a href="#contact" className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90">
        Nous contacter
      </a>
    </nav>
  </div>
</header>

{/* Hero */}
<section className="relative overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,191,99,0.08),transparent)]" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
    {/* Bloc logo centré */}
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 flex justify-center">
        <img
          src="/images/logo.png"
          alt="Uskay Agency Logo"
          className="h-64 w-auto object-contain"
        />
      </div>
    </div>

    {/* Bloc principal */}
    <div className="max-w-3xl mr-auto text-left">
      {/* Badge */}
      <div className="inline-flex items-center px-4 py-2 rounded-full border bg-white shadow-sm text-sm text-muted-foreground mb-6">
        <span className="h-2 w-2 rounded-full bg-green-500 mr-2" />
        Agence UGC — relais entre marques & créateurs
      </div>

      {/* Titre principal */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="italic">Des UGC qui convertissent,</span>{" "}
        <span className="text-green-500 italic">Sans friction.</span>
      </h1>

      {/* Description */}
      <p className="text-lg text-muted-foreground mb-8">
        Uskay Agency met en relation <strong>marques & CM</strong> avec les meilleurs{" "}
        <strong>créateurs UGC</strong>, et pilote vos campagnes de A à Z : sourcing,
        scripts, tournage, droits, livraison & reporting.
      </p>

      {/* Boutons */}
      <div className="flex justify-start gap-4 mb-8">
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:opacity-90"
        >
          Demander un devis →
        </a>
        <a
          href="#portfolio"
          className="px-6 py-3 rounded-xl border font-medium hover:bg-muted"
        >
          Voir des résultats
        </a>
      </div>

      {/* Points clés */}
      <div className="flex justify-strat gap-8 text-sm text-muted-foreground">
        <div>✔ Process en 72h</div>
        <div>✔ Droits d’utilisation inclus</div>
        <div>✔ Facturé au résultat*</div>
      </div>
    </div>
  </div>
</section>

      {/* Logos */}
      <section className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Ils nous font confiance</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 opacity-70">
            {[1,2,3,4,5,6].map(i => (<div key={i} className="h-10 bg-muted rounded-lg" />))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--uskay-font, ui-sans-serif)' }}>Services</h2>
            <p className="mt-3 text-muted-foreground">De A à Z ou à la carte, selon vos besoins et votre niveau de maturité UGC.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Sourcing & Casting" points={["Sélection créateurs par niche & audience","Vérification qualité & taux d'acceptation","Négociation des droits & conditions"]} />
            <Card title="Stratégie & Scripts" points={["Angles créatifs orientés conversion","Scripts courts natifs TikTok/IG/UGC Ads","Calendrier éditorial & tests A/B"]} />
            <Card title="Production UGC" points={["Brief clair & guidelines brand","Tournage mobile pro, formats 9:16","Livraison 3 à 5 variantes par créa"]} />
            <Card title="Post-prod & Hook testing" points={["Sous-titres, cuts, formats multi-plateformes","Iterative testing (hook, CTA, intro)","Itérations incluses selon pack"]} />
            <Card title="Gestion & Reporting" points={["Coordination de bout en bout","Tableau de suivi partagé","Débrief & recommandations"]} />
            <Card title="UGC pour e-commerce" points={["UGC produit, unboxing, UGC review","UGC ads orientées ROAS","UGC organique pour social proof"]} />
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--uskay-font, ui-sans-serif)' }}>Notre méthode</h2>
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

      {/* Portfolio */}
      <section id="portfolio" className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--uskay-font, ui-sans-serif)' }}>Réalisations</h2>
              <p className="mt-3 text-muted-foreground">Exemples d'UGC — remplace ces images par tes cas clients.</p>
            </div>
            <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-xl border border-border hover:border-muted-foreground">Demander une démo</a>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-card border border-border">
              <img src="/images/photo1.jpg" alt="Exemple UGC 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-card border border-border">
              <img src="/images/photo2.jpg" alt="Exemple UGC 2" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-card border border-border">
              <img src="/images/photo3.jpg" alt="Exemple UGC 3" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card to-muted border border-border">
            <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'var(--uskay-font, ui-sans-serif)' }}>Prêt à booster vos ventes avec de l'UGC qui convertit ?</h3>
            <p className="mt-2 text-muted-foreground">Parlez-nous de votre marque, vos objectifs et vos délais. On vous répond sous 24h ouvrées.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90">Démarrer</a>
              <a href="mailto:contact@uskay-agency.com" className="px-5 py-3 rounded-xl border border-border hover:border-muted-foreground">contact@uskay-agency.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--uskay-font, ui-sans-serif)' }}>FAQ</h2>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border overflow-hidden">
            {[
              {q:"Pourquoi passer par une agence UGC ?", a:"Gain de temps, qualité, réseau de créateurs, process. On garantit casting, prod et livrables adaptés aux plateformes."},
              {q:"Quels secteurs couvrez-vous ?", a:"Health & wellness, beauté, tech, accessoires, sport, maison, éducation, services B2C et DTC."},
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

      {/* Contact */}
      <section id="contact" className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--uskay-font, ui-sans-serif)' }}>Contact</h2>
          <p className="mt-3 text-muted-foreground">Expliquez votre besoin en 30 secondes. On revient vers vous rapidement.</p>
          <form className="mt-8 grid gap-4" onSubmit={(e) => { e.preventDefault(); alert('Formulaire soumis (démo)'); }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-xl bg-input border border-border px-4 py-3" placeholder="Votre nom" />
              <input className="w-full rounded-xl bg-input border border-border px-4 py-3" placeholder="Email" type="email" />
            </div>
            <input className="w-full rounded-xl bg-input border border-border px-4 py-3" placeholder="Marque / site" />
            <textarea className="w-full rounded-xl bg-input border border-border px-4 py-3 min-h-[140px]" placeholder="Objectifs, délais, budget (optionnel)" />
            <div className="flex items-center gap-3">
              <button type="submit" className="px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90">Envoyer</button>
              <span className="text-sm text-muted-foreground">Ou contactez-nous : <a className="underline" href="mailto:contact@uskay-agency.com">contact@uskay-agency.com</a></span>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border text-sm text-muted-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/images/petit-logo.png" alt="Uskay-agency Logo" className="h-6 w-auto" />
            <p>© {new Date().getFullYear()} Uskay-agency. Tous droits réservés.</p>
          </div>
          <div className="flex items-center gap-4">
            <a className="hover:text-foreground" href="#">Mentions légales</a>
            <a className="hover:text-foreground" href="#">Confidentialité</a>
            <a
  href="https://www.instagram.com/uskay_agency/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-foreground transition"
>
  Instagram
</a>
      <a
        className="hover:text-foreground transition"
        href="https://www.tiktok.com/@uskay.agency"
        target="_blank"
        rel="noopener noreferrer"
      >
        TikTok
      </a>
    </div>
  </div>
</footer>
    </div>
  );
}
