import { products } from "../../drizzle/schema";
import db from "../../drizzle/db";
import { eq, and } from "drizzle-orm";

const fetchProduct = async (id: number) => {
  const product = await db.select().from(products).where(eq(products.id, id));
  return product[0];
};

export default cachedEventHandler(async (event) => {
  const query = getQuery(event)
  const id: any = query.id?.toString()
  const product = await fetchProduct(id);

  return { data: product };
}, {
  swr: true, maxAge: 99999999, getKey(event) {
     const query = getQuery(event)
     const id: any = query.id?.toString()
      return id.toString() 
  },
});
