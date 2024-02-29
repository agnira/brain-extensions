import knex, { Knex } from "knex"
import config from "../knexfile"

export class KnexClient {
  public client?: Knex

  public constructor() {
    if (!this.client) {
      this.client = knex(config["development"])
    }
    return this.client
  }
}