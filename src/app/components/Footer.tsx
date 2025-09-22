// src/app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-4 text-sm">
        <p className="opacity-90">
          © 2025 Uskay Agency. Tous droits réservés&nbsp; |&nbsp;
          <a href="/mentions-legales" className="underline-offset-2 hover:underline">
            Mentions légales
          </a>
          &nbsp; |&nbsp;
          <a href="/confidentialite" className="underline-offset-2 hover:underline">
            Politique de confidentialité et de cookies
          </a>
        </p>
      </div>
    </footer>
  );
}
