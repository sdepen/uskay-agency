import { createClient } from '@supabase/supabase-js';

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,     // URL Supabase
  process.env.SUPABASE_SERVICE_ROLE_KEY!,    // clé Service Role (secrète)
  { auth: { persistSession: false } }
);
