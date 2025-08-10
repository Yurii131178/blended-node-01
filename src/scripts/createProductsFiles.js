import fs from 'node:fs/promises';
import { PATH_DB, PATH_FILES_DIR } from '../constants/products.js';
import path from 'node:path';

const createProductsFiles = async () => {
  const currentProducts = await fs.readFile(PATH_DB, 'utf-8');

  const parsedProducts = JSON.parse(currentProducts);

  for (const product of parsedProducts) {
    const fileName = `${product.name.toLowerCase().replace(/\s+/g, '-')}.json`; // на кожній ітерації буде створюватись назва для файлу
    const filePath = path.join(PATH_FILES_DIR, fileName);
    await fs.writeFile(filePath, JSON.stringify(product, null, 2));
    console.log({ fileName, filePath });
  }
};

createProductsFiles();
