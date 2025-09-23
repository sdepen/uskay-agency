import "./globals.css";
import Footer from "../components/Footer";

export const metadata = {
  title: "Uskay Agency",
  description: "Agence UGC bien-être",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        {/* Contenu des pages */}
        <div className="flex-1">{children}</div>

        {/* Footer global */}
        <Footer />
      </body>
    </html>
  );
}
