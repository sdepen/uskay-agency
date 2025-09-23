// src/lib/kv.ts
import { kv } from "@vercel/kv";
export { kv };

export type Review = {
  id: string;
  name: string;
  email?: string;   // optionnel
  brand?: string;   // optionnel
  message: string;  // le texte de l'avis
  rating: number;   // 1..5
  createdAt: number;
  approved: boolean;
};
