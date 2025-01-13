-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "blog-table" (
	"id" text PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"sub_title" text NOT NULL,
	"content" text NOT NULL,
	"publish_date" timestamp DEFAULT now(),
	"cover_image" text NOT NULL,
	"author" text NOT NULL,
	"author_avatar" text,
	"author_role" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "news_table" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"company" text NOT NULL,
	"marketing_spend" text,
	"location" text NOT NULL,
	"content" text NOT NULL
);

*/