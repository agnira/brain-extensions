import knex, { Knex } from "knex";
import { Cell, ICellRepository } from "../domain/cell";
import KnexClient from "../utils/knex";

const tableName = "cells"

export default class CellRepository implements ICellRepository {
  private db: Knex
  
  public constructor () {
    this.db = KnexClient.getInstance()
  }

  // private rowToDomain(row: any, domain: Cell) {
  //   domain.created_at = row.created_at
  //   domain.description = row.description
  //   domain.id = row.id
  //   domain.parent_id = row.parent_id
  //   domain.title = row.title
  //   domain.updated_at = row.updated_at
  // }
  
  store(data: Cell): Promise<Cell> {
    throw new Error("Method not implemented.");
  }
  get(id: string): Promise<Cell> {
    throw new Error("Method not implemented.");
  }
  async fetch(): Promise<Cell[]> {
    const data = <Cell[]> await this.db(tableName)
    return data
  }
  update(id: string, data: Partial<Cell>): Promise<Cell> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  
}