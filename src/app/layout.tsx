// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Uskay Agency — Du contenu qui parle, des ventes qui suivent",
  description:
    "Uskay Agency met en relation marques & CM avec les meilleurs créateurs UGC et pilote vos campagnes de A à Z.",
  icons: { icon: [{ url: "/favicon.ico", sizes: "any", rel: "icon" }] }, // mets public/favicon.ico
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{ fontFamily: "var(--font-sans)" }}>
        {children}
      </body>
    </html>
  );
}
