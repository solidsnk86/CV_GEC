import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_API_KEY = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL!, SUPABASE_API_KEY!);

export { supabase };
