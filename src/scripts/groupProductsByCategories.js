import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const groupProductsByCategories = async () => {
  const currentProducts = await fs.readFile(PATH_DB, 'utf8');

  const parsedProducts = JSON.parse(currentProducts);

  const resultObject = {};

  for (const res of parsedProducts) {
    if (!resultObject[res.category]) {
      resultObject[res.category] = [];
    }
    resultObject[res.category].push(res.name);
  }
  return resultObject;
};

console.log(await groupProductsByCategories());
