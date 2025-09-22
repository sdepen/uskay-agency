export const dynamic = "force-dynamic" as const;

import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/data/reviews.json");

// 🔹 Helper: lit les avis ou crée le fichier si besoin
async function readReviewsFile() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data || "[]");
  } catch {
    // si fichier inexistant -> crée un fichier vide
    await fs.writeFile(filePath, "[]", "utf-8");
    return [];
  }
}

// GET → renvoie les avis
export async function GET() {
  try {
    const reviews = await readReviewsFile();
    return NextResponse.json({ items: reviews });
  } catch (e: any) {
    console.error("Erreur GET API:", e.message);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

// POST → ajoute un avis
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const reviews = await readReviewsFile();

    const newReview = {
      name: body.name || "Anonyme",
      email: body.email || "",
      rating: body.rating || 5,
      comment: body.comment || "",
      createdAt: new Date().toISOString(),
    };

    reviews.push(newReview);

    await fs.writeFile(filePath, JSON.stringify(reviews, null, 2));

    return NextResponse.json({ ok: true, review: newReview });
  } catch (e: any) {
    console.error("Erreur POST API:", e.message);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
