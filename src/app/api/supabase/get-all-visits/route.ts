import { supabase } from "@/components/utils/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("address")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) return Response.json({ meesage: error.message });

    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
