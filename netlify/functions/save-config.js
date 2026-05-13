import { getStore } from '@netlify/blobs';
import { json, text, requireAdmin } from './_utils.js';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') return text(405, 'Method not allowed');
  if (!requireAdmin(event)) return text(401, 'Admin oturumu geçersiz. Tekrar giriş yap.');

  try {
    const config = JSON.parse(event.body || '{}');
    const store = getStore('salvo-site-data');
    await store.set('config', JSON.stringify(config));
    return json(200, { ok: true });
  } catch (error) {
    return text(500, 'Ayarlar kaydedilemedi: ' + error.message);
  }
};
