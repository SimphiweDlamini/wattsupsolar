import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY); 

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 2. This sends the actual email
    const data = await resend.emails.send({
      from: 'Watts Up Solar <onboarding@resend.dev>', // Keep this as is for testing
      to: ['simphiwed68@gmail.com'],
      subject: `New Query: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}