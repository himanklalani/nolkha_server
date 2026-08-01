import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, objective, scale, context, honeypot } = body;

    // Anti-Spam Honeypot Check
    if (honeypot && honeypot.trim() !== '') {
      return NextResponse.json({ success: false, message: 'Spam detected' }, { status: 400 });
    }

    if (!name || !email || !phone) {
      return NextResponse.json({ success: false, message: 'Missing required parameters' }, { status: 400 });
    }

    const payload = {
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      name,
      email,
      phone,
      objective: objective || 'N/A',
      scale: scale || 'N/A',
      context: context || 'N/A',
    };

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;

    if (webhookUrl) {
      console.log('Sending payload to Google Sheets Webhook:', webhookUrl);
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
        redirect: 'follow',
      });

      console.log('Google Sheets response status:', response.status);
    } else {
      console.log('Google Sheets Webhook URL not configured. Payload received:', payload);
    }

    return NextResponse.json({ success: true, message: 'Consultation request received' });
  } catch (error) {
    console.error('API Contact Error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
