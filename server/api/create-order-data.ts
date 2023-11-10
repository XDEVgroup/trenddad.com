
import db from "~/drizzle/db";
import { orderUser } from "~/drizzle/schema";

export default defineEventHandler(async (event) => {
  const { name, email, zipcode, street, number, country, city } = await readBody(event)
  await createUserOrder(name, email, zipcode, street, number, country, city)
  return { isCreated: true }
})

const createUserOrder = async (
  name: string, email: string, zipcode: string, street: string, number: string, country: string, city: string
): Promise<void> => {
  await db
    .insert(orderUser)
    .values({ name: name, email: email, zipcode: zipcode, street: street, number: number, country: country, city: city });
};