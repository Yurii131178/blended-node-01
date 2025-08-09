import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const writeProducts = async (updatedProducts) => {
  const data = JSON.stringify(updatedProducts, null, 2); // для #красоти

  try {
    await fs.writeFile(PATH_DB, data, 'utf-8');
    console.log('Products are successfully written to file');
  } catch (error) {
    console.log('File writing error', error);
    throw error;
  }
};
