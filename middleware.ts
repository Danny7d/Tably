import { NextRequest, NextResponse } from 'next/server';
import { verifySessionToken } from './app/lib/admin-session';

const COOKIE_NAME = 'admin_session';

export async function middleware(request: NextRequest) {
  // Allow the login page itself to render (it shows its own password form)
  if (request.nextUrl.pathname === '/admin') {
    return NextResponse.next();
  }

  const token = request.cookies.get(COOKIE_NAME)?.value;
  const adminPassword = process.env.ADMIN_PASSWORD || '';
  const valid = await verifySessionToken(token, adminPassword);

  if (!valid) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
