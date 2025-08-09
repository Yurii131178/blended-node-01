import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const readProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('File reading error:', error.message);
    throw error;
  }
};
