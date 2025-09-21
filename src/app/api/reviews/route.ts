// src/app/api/reviews/route.ts
import { NextResponse } from "next/server";
// ton fichier supabaseAdmin.ts est à la racine dans /lib → on remonte 4 dossiers
import { supabaseAdmin } from "../../../../lib/supabaseAdmin";

export async function POST(req: Request) {
  const form = await req.formData();

  // anti-spam optionnel si tu as un champ caché name="botcheck"
  if (form.get("botcheck")) {
    return NextResponse.redirect(new URL("/merci", req.url));
  }

  const rating  = Number(form.get("rating") ?? 5);
  const name    = String(form.get("name") || "Anonyme");
  const email   = String(form.get("email") || "");
  const company = String(form.get("company") || "");
  const message = String(form.get("message") || "");

  await supabaseAdmin.from("reviews").insert({
    name, email, company, rating, message, published: true,
  });

  // redirection après envoi (existe déjà chez toi : /merci)
  const redirect = (form.get("redirect") as string) || "/merci";
  const base = new URL(req.url);
  const to = redirect.startsWith("http")
    ? redirect
    : `${base.protocol}//${base.host}${redirect}`;
  return NextResponse.redirect(to);
}
