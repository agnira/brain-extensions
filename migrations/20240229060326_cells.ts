import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("cells", (table) => {
    table.string("id")
    table.dateTime("created_at")
    table.dateTime("updated_at")
    table.string("title")
    table.text("description")
    table.text("parent_id").references("cells.id")
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("cells")
}

