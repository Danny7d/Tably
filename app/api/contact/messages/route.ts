import { NextResponse } from 'next/server';
import { getContactMessages } from '../../../lib/contact-storage';

export async function GET() {
  try {
    const messages = await getContactMessages();
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}
