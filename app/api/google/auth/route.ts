import { google } from "googleapis";
import { NextResponse } from "next/server";

// generate url to ask for google permissions

export async function GET() {

  const oAuth2Client = new google.auth.OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_REDIRECT_URI);
  const SCOPES = ["https://www.googleapis.com/auth/calendar"];

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    prompt: "consent", // garantit que refresh_token sera fourni
  });

  return NextResponse.json({ url: authUrl });
}
