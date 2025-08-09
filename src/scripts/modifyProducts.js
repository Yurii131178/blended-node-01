import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const modifyProducts = async () => {
  const currentProducts = await fs.readFile(PATH_DB, 'utf8');
  const parsedProducts = JSON.parse(currentProducts);

  const modifiedProducts = parsedProducts.map(
    ({ description, ...rest }) => rest,
  );
  fs.writeFile(PATH_DB, JSON.stringify(modifiedProducts, null, 2), 'utf8');
};

modifyProducts();
