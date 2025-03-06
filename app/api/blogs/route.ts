export async function POST(req: Request) {
  const res = await req.json();
  return Response.json({ code: 0, data: res, message: "success" });
}
