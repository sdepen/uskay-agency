import Link from "next/link";

export default function Merci() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Merci pour votre message !</h1>
      <p className="mt-4 text-muted-foreground">
        Nous revenons vers vous sous 24h ouvrées.
      </p>
      <Link href="/" className="mt-8 inline-block underline">
        ← Retour à l’accueil
      </Link>
    </main>
  );
}
