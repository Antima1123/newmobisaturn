import { db } from "@/db/drizzle";
import { blogTable } from "@/db/schema";
import { sql } from "drizzle-orm";
import { Hono } from "hono";

const app = new Hono()
.get("/suggestedBlogs", async (c) => {
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
        .limit(4)
        .orderBy(sql`RANDOM()`)

    return c.json({ data })
})

export default app;
