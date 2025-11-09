import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

// handle google callback and store tokens

console.log("route.ts: callback");

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing code parameter" }, { status: 400 });
  }

  const oAuth2Client = new google.auth.OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_REDIRECT_URI);

  const { tokens } = await oAuth2Client.getToken(code);
  console.log("Tokens reçus:", tokens);
  const tokenPath = path.join(process.cwd(), "tokens.json");
  fs.writeFileSync(tokenPath, JSON.stringify(tokens, null, 2));

  return NextResponse.json("Auth success! You can close the page.");
}
