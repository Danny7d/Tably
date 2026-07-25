import fs from 'fs';
import path from 'path';

const CONTACTS_FILE = path.join(process.cwd(), 'data', 'contacts.json');

// Ensure data directory exists
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize contacts file if it doesn't exist
if (!fs.existsSync(CONTACTS_FILE)) {
  fs.writeFileSync(CONTACTS_FILE, JSON.stringify([], null, 2));
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  timestamp: string;
}

export async function saveContactMessage(data: Omit<ContactMessage, 'id' | 'timestamp'>): Promise<ContactMessage> {
  const contacts = JSON.parse(fs.readFileSync(CONTACTS_FILE, 'utf-8')) as ContactMessage[];
  
  const newContact: ContactMessage = {
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
    ...data,
  };
  
  contacts.push(newContact);
  fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
  
  return newContact;
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  try {
    const contacts = JSON.parse(fs.readFileSync(CONTACTS_FILE, 'utf-8')) as ContactMessage[];
    return contacts.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  } catch {
    return [];
  }
}
