import Link from "next/link";

export const metadata = {
  title: "Politique de confidentialité — Uskay Agency",
  description: "Politique de confidentialité et gestion des données personnelles de Uskay Agency.",
};

export default function ConfidentialitePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Espace pour ne pas passer sous le header fixe */}
      <div className="h-24 md:h-28" />

      <h1 className="text-3xl md:text-4xl font-bold">Politique de confidentialité et de cookies.</h1>

      <section className="mt-6 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Collecte des données</h2>
        <p>
          Le site <em>Uskay Agency</em> peut collecter des informations personnelles (nom,
          prénom, adresse e-mail, etc.) uniquement lorsque l’utilisateur remplit un formulaire de
          contact ou s’inscrit volontairement à une newsletter.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Utilisation des données</h2>
        <p>
          Les données collectées sont utilisées uniquement pour répondre aux demandes de contact,
          gérer la relation client et, le cas échéant, envoyer des informations commerciales.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Partage des données</h2>
        <p>
          Aucune donnée personnelle n’est transmise à des tiers sans consentement explicite, sauf
          obligation légale.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Cookies</h2>
        <p>
          Le site peut utiliser des cookies afin d’améliorer l’expérience utilisateur et mesurer
          l’audience. L’utilisateur peut configurer son navigateur pour refuser les cookies.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Durée de conservation</h2>
        <p>
          Les données sont conservées pour une durée maximale de 3 ans à compter du dernier
          contact.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground">Droits des utilisateurs</h2>
        <p>
          Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression
          de vos données. Pour exercer vos droits, contactez :
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Email :</strong>{" "}
            <a href="mailto:contact@uskay-agency.com" className="underline hover:no-underline">
              contact@uskay-agency.com
            </a>
          </li>
          <li>
            <strong>Adresse postale :</strong> 17 bis route de Boussange, 57270 Richemont, France
          </li>
        </ul>
      </section>

      <div className="mt-10">
        <Link href="/" className="text-primary hover:underline">
          ← Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
