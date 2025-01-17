import { db } from "@/db/drizzle";
import { blogTable } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function getStaticBlogs(page = 1, limit = 6) {
    const offset = (page - 1) * limit;
    
    const blogs = await db
        .select({
            id: blogTable.id,
            slug: blogTable.slug,
            title: blogTable.title,
            subtitle: blogTable.subtitle,
            publishdate: blogTable.publishdate,
            coverimage: blogTable.coverimage,
        })
        .from(blogTable)
        .orderBy(desc(blogTable.publishdate))
        .limit(limit)
        .offset(offset);

    return blogs;
}

