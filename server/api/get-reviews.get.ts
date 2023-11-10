import { eq } from 'drizzle-orm';
import { reviews } from './../../drizzle/schema';
import db from "~/drizzle/db"

export default cachedEventHandler(async(event) => {

    const response = await getReview()

    return response
}, {
    swr: true, maxAge: 99999999
  })

const getReview = async () => {
const response = await db.select().from(reviews).limit(20)

return response
}
