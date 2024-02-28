import Koa from "koa";

const app = new Koa()

app.use(async ctx => {
    ctx.body = 'Hello'
})

app.listen(3000, () => {
    console.log("app run on http://localhost:3000")
})