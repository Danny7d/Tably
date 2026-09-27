import { NextResponse } from 'next/server';
import { saveContactMessage } from '../../lib/contact-storage';

async function sendContactEmail({
  name,
  email,
  company,
  message,
}: {
  name: string;
  email: string;
  company?: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured; skipping email notification');
    return;
  }

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br />')}</p>
  `;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Tably Contact Form <onboarding@resend.dev>',
      to: 'contact@tably.site',
      reply_to: email,
      subject: `New contact form message from ${name}`,
      html,
    }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    console.error('Resend API error:', res.status, errBody);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Best-effort local storage (may not persist reliably across deploys)
    try {
      await saveContactMessage({ name, email, company, message });
    } catch (storageError) {
      console.error('Failed to save contact message to storage:', storageError);
    }

    // Reliable delivery: email the message directly
    await sendContactEmail({ name, email, company, message });

    console.log('Contact form submission:', {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
