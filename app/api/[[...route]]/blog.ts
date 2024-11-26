import { db } from "@/db/drizzle";
import { blogTable } from "@/db/schema";
import { zValidator } from "@hono/zod-validator";
import { eq } from "drizzle-orm";
import { Hono } from "hono";

const app = new Hono()
 .get(':blogSlug',
    async (c) =>{

        const blogSlug = c.req.param("blogSlug")

        const [data] = await db
        .select({
            id: blogTable.id,
            slug: blogTable.slug,
            title: blogTable.title,
            subtitle:  blogTable.subtitle,
            content:  blogTable.content,
            author:  blogTable.author,
            publishdate:  blogTable.publishdate,
            coverimage:  blogTable.coverimage,
        })
        .from(blogTable)
        .where(eq(
            blogTable.slug, blogSlug
        ))

        console.log(data)
        return c.json({ data })
    }
 )

 export default app