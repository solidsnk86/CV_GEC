import { supabase } from "@/components/utils/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("address")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1);

    if (error) return Response.json({ message: error.message });

    return Response.json(data[0]);
  } catch (error) {
    return Response.json({ message: error });
  }
}
