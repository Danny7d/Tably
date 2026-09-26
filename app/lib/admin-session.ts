const encoder = new TextEncoder();

function toBase64Url(bytes: Uint8Array): string {
  let binary = '';
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(str: string): Uint8Array {
  const padLength = (4 - (str.length % 4)) % 4;
  const padded = str.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat(padLength);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function getKey(secret: string) {
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  );
}

// Creates a signed, time-limited session token. No database needed -
// the token is self-verifying using the server-only ADMIN_PASSWORD as the signing secret.
export async function createSessionToken(secret: string, ttlMs = 1000 * 60 * 60 * 8): Promise<string> {
  const expiry = Date.now() + ttlMs;
  const key = await getKey(secret);
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(String(expiry)));
  return `${expiry}.${toBase64Url(new Uint8Array(sig))}`;
}

export async function verifySessionToken(token: string | undefined | null, secret: string): Promise<boolean> {
  if (!token || !secret) return false;
  const [expiryStr, sigPart] = token.split('.');
  if (!expiryStr || !sigPart) return false;

  const expiry = Number(expiryStr);
  if (!expiry || Number.isNaN(expiry) || Date.now() > expiry) return false;

  try {
    const key = await getKey(secret);
    const sig = fromBase64Url(sigPart);
    return await crypto.subtle.verify('HMAC', key, sig as BufferSource, encoder.encode(expiryStr));
  } catch {
    return false;
  }
}
