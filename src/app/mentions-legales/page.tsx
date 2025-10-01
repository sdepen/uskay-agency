import Link from "next/link";

export const metadata = {
  title: "Mentions légales — Uskay Agency",
  description: "Mentions légales de Uskay Agency (micro-entreprise).",
};

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Espace pour ne pas passer sous le header fixe */}
      <div className="h-24 md:h-28" />

      <h1 className="text-3xl md:text-4xl font-bold">Mentions légales.</h1>

      <section className="mt-6 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Éditeur du site</h2>
        <p>
          Le site <em>Uskay Agency</em> est édité par :
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Raison sociale (nom légal) :</strong> Depenweiller Sacha
          </li>
          <li>
          <strong>Nom commercial :</strong> Uskay Agency
          </li>
          <li>
            <strong>Statut :</strong> Micro-entrepreneur
          </li>
          <li>
            <strong>Adresse :</strong> 17 Bis route de Boussange, 57270 Richemont, France
          </li>
          <li>
            <strong>Email :</strong>{" "}
            <a href="mailto:contact@uskay-agency.com" className="underline hover:no-underline">
              contact@uskay-agency.com
            </a>
          </li>
          <li>
            <strong>Téléphone :</strong> 06 51 44 74 41
          </li>
          <li>
            <strong>SIRET :</strong> 990 009 466 00014
          </li>
          <li>
            <strong>TVA :</strong> non applicable, art. 293B du CGI
          </li>
        </ul>

        <p>
          <strong>Directeur de la publication :</strong> Depenweiller Sacha
        </p>
      </section>

      <section className="mt-8 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Hébergement</h2>
        <p>
          Le site est hébergé par :
          <br />
          IONOS SARL
          <br />
          7, place de la Gare – BP 70109
          <br />
          57201 Sarreguemines Cedex – France
          <br />
          Tél. : 0970 808 911
        </p>
      </section>

      <section className="mt-8 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus (textes, images, logos, etc.) présents sur le site sont la
          propriété exclusive de <em>Uskay Agency</em>, sauf mention contraire. Toute reproduction,
          distribution, modification ou exploitation, même partielle, est interdite sans autorisation
          préalable.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Responsabilité</h2>
        <p>
          <em>Uskay Agency</em> s’efforce d’assurer l’exactitude des informations diffusées sur son
          site. Toutefois, l’éditeur ne saurait être tenu responsable des erreurs, omissions ou
          indisponibilités temporaires.
        </p>
      </section>

      <div className="mt-10">
        <Link href="/" className="text-primary hover:underline">
          ← Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
