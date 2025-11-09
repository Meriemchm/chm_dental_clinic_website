import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

// create google calendar event

export async function POST(req: Request) {
  console.log("POST /api/google/create-event appelé");

  try {
    const body = await req.json();
    console.log("Body reçu:", body);

    const {
      yourName,
      phone,
      appointmentType,
      preferredDentist,
      preferredDate,
      preferredTime,
      notes,
    } = body;

    // Load credentials Google

    // Init OAuth2 client
    const oAuth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    const tokenPath = path.join(process.cwd(), "tokens.json");
    if (fs.existsSync(tokenPath)) {
      const tokens = JSON.parse(fs.readFileSync(tokenPath, "utf8"));
      oAuth2Client.setCredentials(tokens);
    } else if (process.env.GOOGLE_REFRESH_TOKEN) {
      //  .env
      oAuth2Client.setCredentials({
        refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
      });
    } else {
      return NextResponse.json(
        { error: "Google auth required" },
        { status: 401 }
      );
    }

    const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

    const event = {
      summary: `Appointment with ${yourName}`,
      description: `${appointmentType} with ${preferredDentist}\nPhone Number: ${phone}\nNotes: ${notes}`,
      start: {
        dateTime: `${preferredDate}T${preferredTime}:00`,
        timeZone: "Africa/Algiers",
      },
      end: {
        dateTime: `${preferredDate}T${preferredTime}:00`,
        timeZone: "Africa/Algiers",
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: "popup", minutes: 10 },
          { method: "email", minutes: 60 },
        ],
      },
    };

    await calendar.events.insert({ calendarId: "primary", requestBody: event });

    return NextResponse.json({
      message: "Appointment added to Google Calendar",
    });
  } catch (error: any) {
    console.error("Error Google Calendar:", JSON.stringify(error, null, 2));
    return NextResponse.json(
      { error: "Error while adding event", details: error.message },
      { status: 500 }
    );
  }
}
