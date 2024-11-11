import { Hono } from 'hono'
import { zValidator } from "@hono/zod-validator";
import { insertContactSchema, newsTable } from '@/db/schema';
import { db } from '@/db/drizzle';
import { createId } from "@paralleldrive/cuid2";



const app = new Hono()
    .post('/',
        zValidator("json", insertContactSchema.pick({
            name: true,
            company: true,
            content: true,
            email: true,
            location: true,
            marketingSpend: true,
            phone: true
        })),
        async (c) => {
            const values = c.req.valid("json")

            if (!values) {
                return c.json({error: "missing values"})
            }

            const [data] = await db.insert(newsTable).values({
                id: createId(),
                ...values
            }).returning();

            return c.json({data})
        })

export default app