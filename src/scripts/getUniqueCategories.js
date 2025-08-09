import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const getUniqueCategories = async () => {
  const currentProducts = await fs.readFile(PATH_DB, 'utf8');

  const parsedProducts = JSON.parse(currentProducts);

  return parsedProducts.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, []);
};

console.log('Unique categories:', await getUniqueCategories());
