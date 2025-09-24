// src/app/layout.tsx
import "./globals.css";
import Footer from "../components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="facebook-domain-verification"
          content="6cs01g7onaexx94serj0jxgwy5roz"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Contenu des pages */}
        <div className="flex-1">{children}</div>

        {/* Footer global */}
        <Footer />
      </body>
    </html>
  );
}
