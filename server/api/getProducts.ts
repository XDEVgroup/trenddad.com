import { products } from "../../drizzle/schema";
import db from "../../drizzle/db";


const fetchProducts = async () => {
  const product = await db.select().from(products);
  return product;
};



export default cachedEventHandler(async () => {
  const product = await fetchProducts();

  return product
}, {
  swr: true, maxAge: 99999999
});