import { pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const blogTable = pgTable("blog-table", {
	id: text().primaryKey().notNull(),
	slug: text().notNull(),
	title: text().notNull(),
	subTitle: text("sub_title").notNull(),
	content: text().notNull(),
	publishDate: timestamp("publish_date", { mode: 'string' }).defaultNow(),
	coverImage: text("cover_image").notNull(),
	author: text().notNull(),
	authorAvatar: text("author_avatar"),
	authorRole: text("author_role").notNull(),
});

export const newsTable = pgTable("news_table", {
	id: text().primaryKey().notNull(),
	name: text().notNull(),
	email: text().notNull(),
	phone: text().notNull(),
	company: text().notNull(),
	marketingSpend: text("marketing_spend"),
	location: text().notNull(),
	content: text().notNull(),
});
