import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const CONTACTS_FILE = path.join(process.cwd(), 'data', 'contacts.json');

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
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
