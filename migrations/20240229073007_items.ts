import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("items", (table) => {
    table.string("id")
    table.dateTime("created_at")
    table.dateTime("updated_at")
    table.text("content")
    table.string("cell_id").references("cells.id")
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("items")
}

