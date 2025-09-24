// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Uskay Agency",
  description: "Agence UGC bien-être",
  // ⬇️ Ajoute la vérification de domaine Facebook dans le <head>
  verification: {
    other: {
      "facebook-domain-verification": "6cs01g7onaexx94serj0jxgwy5roz",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      {/* Pas de <Head> ici avec l'App Router, Next le gère via `metadata` */}
      <body className="min-h-screen flex flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
