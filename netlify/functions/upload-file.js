import crypto from 'node:crypto';
import { getStore } from '@netlify/blobs';
import { json, text, requireAdmin, sanitizeFilename } from './_utils.js';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') return text(405, 'Method not allowed');
  if (!requireAdmin(event)) return text(401, 'Admin oturumu geçersiz. Tekrar giriş yap.');

  try {
    const body = JSON.parse(event.body || '{}');
    const filename = sanitizeFilename(body.filename || 'upload');
    const dataUrl = String(body.dataUrl || '');
    const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
    if (!match) return text(400, 'Dosya verisi geçersiz.');

    const contentType = body.contentType || match[1] || 'application/octet-stream';
    const dataBase64 = match[2];
    const key = `uploads/${Date.now()}-${crypto.randomUUID()}-${filename}`;

    const store = getStore('salvo-site-files');
    await store.set(key, JSON.stringify({ contentType, dataBase64, filename }));

    return json(200, { url: `/.netlify/functions/media?key=${encodeURIComponent(key)}` });
  } catch (error) {
    return text(500, 'Dosya yüklenemedi: ' + error.message);
  }
};
