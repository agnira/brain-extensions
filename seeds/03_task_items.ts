import { Knex } from "knex";
import moment from "moment";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("task_items").del();

    // Inserts seed entries
    await knex("task_items").insert([
        // {
        //     id: "5d92d015-ef45-48e8-bfd3-6856281f88d4",
        //     created_at: moment().toDate(),
        //     updated_at: moment().toDate(),
        //     cell_id: "",
        //     task: "",
        //     parent_id: "",
        // }
    ]);
};
