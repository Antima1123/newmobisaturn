import { Hono } from 'hono'
import { handle } from "hono/vercel"
import contact from "./contact"
import blog from "./blog"

export const runtime = "edge"

const app = new Hono().basePath("/api")

const routes = app
    .route("/", contact)
    .route("/blog", blog)

export const GET = handle(app)
export const POST = handle(app)

export type AppType = typeof routes;