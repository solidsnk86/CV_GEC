import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

supabase.storage.config = {
  url: "https://supabase.com/dashboard/project/yyqjcfzddjozcwahhugs/storage/buckets/simbiosis",
};

export default supabase;
