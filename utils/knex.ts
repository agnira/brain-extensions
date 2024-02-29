import knex, { Knex } from "knex"
import config from "../knexfile"

export default class KnexClient {
  private static client?: Knex

  public constructor() {}

  static getInstance(): Knex {
    if (!KnexClient.client) {
      KnexClient.client = knex(config["development"])
    }
    return KnexClient.client
  }
}