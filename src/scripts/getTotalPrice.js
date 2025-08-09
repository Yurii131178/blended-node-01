import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const getTotalPrice = async () => {
  const currentProducts = await fs.readFile(PATH_DB, 'utf8');

  const parsedProducts = JSON.parse(currentProducts);

  const totalPrice = parsedProducts.reduce(
    (acc, item) => (acc += Number(item.price)),

    0,
  );

  return totalPrice;
};

console.log('Total Price:', await getTotalPrice());
