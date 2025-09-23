import { NextResponse } from "next/server";
import { kv, Review } from "@/lib/kv";
import { z } from "zod";

export const runtime = "edge";

const BodySchema = z.object({
  name: z.string().min(2).max(60),
  email: z.string().email().optional(),
  brand: z.string().optional(),
  message: z.string().min(5).max(1000),
  rating: z.number().int().min(1).max(5),
});

function getIP(req: Request) {
  const h = req.headers;
  return (
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "0.0.0.0"
  );
}

// GET: renvoie { reviews: [...] }
export async function GET() {
  const items = await kv.zrange<Review[]>("reviews", 0, 49, { rev: true });
  return NextResponse.json({ reviews: items.filter((r) => r.approved) });
}

// POST: crée un avis
export async function POST(req: Request) {
  try {
    // anti-spam très simple
    const ip = getIP(req);
    const key = `ratelimit:reviews:${ip}`;
    const count = (await kv.incr(key)) ?? 0;
    if (count === 1) await kv.expire(key, 600); // 10 min
    if (count > 5) {
      return NextResponse.json(
        { ok: false, error: "Too many requests" },
        { status: 429 }
      );
    }

    const json = await req.json();
    const data = BodySchema.parse({ ...json, rating: Number(json.rating) });

    const review: Review = {
      id: crypto.randomUUID(),
      name: data.name.trim(),
      email: data.email?.trim(),
      brand: data.brand?.trim(),
      message: data.message.trim(),
      rating: data.rating,
      createdAt: Date.now(),
      approved: true,
    };

    await kv.zadd("reviews", { score: review.createdAt, member: review });
    return NextResponse.json({ ok: true, review });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
