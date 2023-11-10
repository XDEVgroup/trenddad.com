import { eq } from 'drizzle-orm';
import { reviews } from './../../drizzle/schema';
import db from "~/drizzle/db"

export default defineEventHandler(async(event) => {

    const response = await getReview()

    return response
})

const getReview = async () => {
const response = await db.select().from(reviews).limit(20)

return response
}
