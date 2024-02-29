import { Knex } from "knex";
import moment from "moment";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("items").del();

    // Inserts seed entries
    await knex("items").insert([
        // {
        //     id: "5d92d015-ef45-48e8-bfd3-6856281f88d4",
        //     created_at: moment().toDate(),
        //     updated_at: moment().toDate(),
        //     content: "text",
        //     cell_id: ""
        // },
    ]);
};
