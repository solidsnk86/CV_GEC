import { supabase } from "@/components/utils/supabase";

export async function POST(req: Request) {
  const {
    ip_address,
    city_name,
    country_name,
    country_flag,
    latitude,
    longitude,
    postal_code,
  } = await req.json();

  try {
    const { error } = await supabase.from("address").insert([
      {
        ip_address,
        city_name,
        country_name,
        country_flag,
        latitude,
        longitude,
        postal_code,
      },
    ]);
    if (error)
      return Response.json({ message: error.message }, { status: 400 });
    return Response.json({ message: "Data send" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Server " + (error as TypeError).message },
      { status: 500 }
    );
  }
}
