import { connectDB } from "@/app/lib/mongodb";
import Contact from "@/app/models/Contact";

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  await Contact.create(data);
  return new Response(JSON.stringify({ success: true }), { status: 201 });
}
