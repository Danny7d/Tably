import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getContactMessages } from '../../../lib/contact-storage';
import { verifySessionToken } from '../../../lib/admin-session';

async function isAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_session')?.value;
  const adminPassword = process.env.ADMIN_PASSWORD || '';
  return verifySessionToken(token, adminPassword);
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

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
