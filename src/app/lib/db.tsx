import postgres from "postgres";
import { createClient } from "@supabase/supabase-js";

export const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export const  supabaseDb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);