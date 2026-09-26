import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { cookies } from 'next/headers';
import { verifySessionToken } from '../../../../lib/admin-session';

const CONTACTS_FILE = path.join(process.cwd(), 'data', 'contacts.json');

async function isAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_session')?.value;
  const adminPassword = process.env.ADMIN_PASSWORD || '';
  return verifySessionToken(token, adminPassword);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;

    const contacts = JSON.parse(fs.readFileSync(CONTACTS_FILE, 'utf-8'));
    const filteredContacts = contacts.filter((msg: { id: string }) => msg.id !== id);

    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(filteredContacts, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting message:', error);
    return NextResponse.json(
      { error: 'Failed to delete message' },
      { status: 500 }
    );
  }
}
