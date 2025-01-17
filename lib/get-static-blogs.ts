import { db } from "@/db/drizzle";
import { blogTable } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function getStaticBlogs(page = 1, limit = 12) {
    const offset = (page - 1) * limit;
    
    const blogs = await db
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
        .orderBy(desc(blogTable.publishdate))
        .limit(limit)
        .offset(offset);

    return blogs;
}

