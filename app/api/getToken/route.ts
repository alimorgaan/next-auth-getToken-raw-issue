import { getToken } from "next-auth/jwt";
export async function GET(req: Request) {
  const tokenRaw = await getToken({
    raw: true,
    req,
  });

  return Response.json({ token: tokenRaw });
}
