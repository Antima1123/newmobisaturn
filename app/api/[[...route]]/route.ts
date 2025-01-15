import { Hono } from 'hono'
import { handle } from "hono/vercel"
import contact from "./contact"
import blog from "./blog"
import suggestion from './suggestion'

export const runtime = "edge"

const app = new Hono().basePath("/api")

const routes = app
    .route("/", contact)
    .route("/blog", blog)
    .route("/suggestion", suggestion)

export const GET = handle(app)
export const POST = handle(app)

export type AppType = typeof routes;