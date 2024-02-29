import Koa from "koa";
import CellRepository from "./repository/cell";
import CellUseCase from "./useCase/cell";
import Router from "@koa/router";

const app = new Koa()
const router = new Router()

const cellRepository = new CellRepository()

const cellUseCase = new CellUseCase(
    cellRepository
)

router.get("/cells", async (ctx, next) => {
    ctx.body = await cellUseCase.fetch()
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
    console.log("app run on http://localhost:3000")
})