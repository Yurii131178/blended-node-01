// import fs from 'node:fs/promises';
// import { PATH_DB } from '../constants/products.js';
// import { createFakeProduct } from '../utils/createFakeProducts.js';

// async function generateProducts(count) {
//   const data = await fs.readFile(PATH_DB, 'utf8');
//   const parsedData = JSON.parse(data);
//   for (let i = 0; i < count; i++) {
//     const newRec = createFakeProduct();
//     parsedData.push(newRec);
//   }
//   await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2), 'utf8');
// }

// generateProducts(5);

///////////////////////////////

import { createFakeProducts } from '../utils/createFakeProducts.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const generateProducts = async (number) => {
  try {
    const currentProducts = await readProducts();
    const newProducts = Array.from({ length: number }, createFakeProducts);
    const updatedProducts = [...currentProducts, ...newProducts];
    await writeProducts(updatedProducts);
  } catch (error) {
    console.error('Products` generation error', error);
  }
};

generateProducts(2);
