import { getStore } from '@netlify/blobs';
import { json } from './_utils.js';
import { defaultConfig } from './default-config.js';

export const handler = async () => {
  try {
    const store = getStore('salvo-site-data');
    const saved = await store.get('config');
    if (!saved) return json(200, defaultConfig);
    return json(200, JSON.parse(saved));
  } catch (error) {
    return json(200, defaultConfig);
  }
};
