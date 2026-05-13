import { json, text, signToken } from './_utils.js';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') return text(405, 'Method not allowed');

  try {
    const body = JSON.parse(event.body || '{}');
    const password = String(body.password || '');
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    if (password !== adminPassword) {
      return text(401, 'Şifre hatalı');
    }

    return json(200, { token: signToken() });
  } catch (error) {
    return text(400, 'Geçersiz istek');
  }
};
