import { db } from "@/db/drizzle";
import { blogTable } from "@/db/schema";
import { zValidator } from "@hono/zod-validator";
import { eq, sql } from "drizzle-orm";
import { Hono } from "hono";
import { redis } from "@/lib/redis";

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
            authorRole:  blogTable.authorRole,
            publishdate:  blogTable.publishdate,
            coverimage:  blogTable.coverimage,
            authorName: blogTable.authorName,
            authorAvatar: blogTable.authorAvatar
        })
        .from(blogTable)
        .where(eq(
            blogTable.slug, blogSlug
        ))

        return c.json({ data })
    }
 )

 .get('/',
    async (c) => {
        const { page = 1, limit = 9 } = c.req.query();
        const offset = (Number(page) - 1) * Number(limit);
        
        const data = await db
        .select({
            id: blogTable.id,
            slug: blogTable.slug,
            title: blogTable.title,
            subtitle: blogTable.subtitle,
            authorRole: blogTable.authorRole,
            publishdate: blogTable.publishdate,
            coverimage: blogTable.coverimage,
            authorName: blogTable.authorName,
        })
        .from(blogTable)
        .orderBy(blogTable.publishdate)
        .limit(Number(limit))
        .offset(offset);

        const [count] = await db
            .select({ 
                count: sql<number>`cast(count(*) as integer)` 
            })
            .from(blogTable);

        return c.json({ 
            data, 
            totalPages: Math.ceil(count.count / Number(limit)),
            hasMore: offset + data.length < count.count
        });
    }
)
export default app