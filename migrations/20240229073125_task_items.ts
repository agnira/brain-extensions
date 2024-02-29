import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("task_items", (table) => {
    table.string("id")
    table.dateTime("created_at")
    table.dateTime("updated_at")
    table.string("cell_id").references("cells.id")
    table.text("taks")
    table.string("parent_id").references("task_items.id")
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("task_items")
}