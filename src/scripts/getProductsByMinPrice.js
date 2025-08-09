// import { readProducts } from '../utils/readProducts.js';

// const getProductsByMinPrice = async (minPrice) => {
//   try {
//     const currentProducts = await readProducts();

//     const filtered = currentProducts.filter(
//       (currentProducts) => Number(currentProducts.price) >= minPrice,
//     );
//     return filtered;
//   } catch (error) {
//     console.error('Error getting products by price:', error.message);
//     return [];
//   }
// };

// const minPrice = 900; // return products with price equal to 900 or higher
// getProductsByMinPrice(minPrice).then((result) => {
//   console.log(`Products with price >= ${minPrice}:`);
//   console.log(result);
// });

/////////////
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const getProductsByMinPrice = async (minPrice) => {
  const currentProducts = await fs.readFile(PATH_DB, 'utf8');

  const parsedProducts = JSON.parse(currentProducts);

  const filteredProducts = parsedProducts.filter(
    (product) => Number(product.price) >= minPrice,
  );
  return filteredProducts;
};

console.log(await getProductsByMinPrice(600));
