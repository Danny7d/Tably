import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createSessionToken, verifySessionToken } from '../../../lib/admin-session';

const COOKIE_NAME = 'admin_session';

export async function POST(request: Request) {
  const { password } = await request.json();
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return NextResponse.json(
      { error: 'Admin password is not configured on the server' },
      { status: 500 }
    );
  }

  if (password !== adminPassword) {
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
  }

  const token = await createSessionToken(adminPassword);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 8, // 8 hours
  });

  return NextResponse.json({ success: true });
}

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  const adminPassword = process.env.ADMIN_PASSWORD || '';
  const valid = await verifySessionToken(token, adminPassword);
  return NextResponse.json({ authenticated: valid }, { status: valid ? 200 : 401 });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  return NextResponse.json({ success: true });
}
