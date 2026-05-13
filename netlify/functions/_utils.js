import crypto from 'node:crypto';

export const jsonHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store'
};

export function json(statusCode, body) {
  return {
    statusCode,
    headers: jsonHeaders,
    body: JSON.stringify(body)
  };
}

export function text(statusCode, body) {
  return {
    statusCode,
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
    body
  };
}

export function getSecret() {
  return process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || 'admin123';
}

export function signToken() {
  const timestamp = String(Date.now());
  const signature = crypto.createHmac('sha256', getSecret()).update(timestamp).digest('hex');
  return `${timestamp}.${signature}`;
}

export function verifyToken(token) {
  if (!token || typeof token !== 'string' || !token.includes('.')) return false;
  const [timestamp, signature] = token.split('.');
  const age = Date.now() - Number(timestamp);
  if (!Number.isFinite(age) || age < 0 || age > 12 * 60 * 60 * 1000) return false;

  const expected = crypto.createHmac('sha256', getSecret()).update(timestamp).digest('hex');
  const a = Buffer.from(signature || '', 'hex');
  const b = Buffer.from(expected, 'hex');
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export function requireAdmin(event) {
  const auth = event.headers.authorization || event.headers.Authorization || '';
  const token = auth.replace(/^Bearer\s+/i, '').trim();
  return verifyToken(token);
}

export function sanitizeFilename(filename = 'file') {
  const clean = String(filename)
    .normalize('NFKD')
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
  return clean || 'file';
}
