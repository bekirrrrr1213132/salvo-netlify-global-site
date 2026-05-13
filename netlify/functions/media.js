import { getStore } from '@netlify/blobs';

export const handler = async (event) => {
  try {
    const key = event.queryStringParameters?.key;
    if (!key || !key.startsWith('uploads/')) {
      return { statusCode: 400, body: 'Geçersiz dosya anahtarı' };
    }

    const store = getStore('salvo-site-files');
    const raw = await store.get(key);
    if (!raw) return { statusCode: 404, body: 'Dosya bulunamadı' };

    const file = JSON.parse(raw);
    return {
      statusCode: 200,
      headers: {
        'Content-Type': file.contentType || 'application/octet-stream',
        'Cache-Control': 'public, max-age=31536000, immutable'
      },
      body: file.dataBase64,
      isBase64Encoded: true
    };
  } catch (error) {
    return { statusCode: 500, body: 'Dosya okunamadı' };
  }
};
