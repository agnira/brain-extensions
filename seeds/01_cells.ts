import { Knex } from "knex";
import moment from "moment";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("cells").del();

    // Inserts seed entries
    await knex("cells").insert([
        {
            id: "eec3f277-9614-4516-b545-b57b4f661707",
            created_at: moment().toDate(),
            updated_at: moment().toDate(),
            title: "Game Dev Doc",
            description: "Detail game dev document"
        },
        {
            id: "586b88ab-1ae5-4b27-b6bf-e2bfb44a0a63",
            created_at: moment().toDate(),
            updated_at: moment().toDate(),
            title: "Characters",
            description: "Character list and detail",
            parent_id: "eec3f277-9614-4516-b545-b57b4f661707",
        },
        {
            id: "caf98b6c-9c09-426a-a2e2-5f55c72bd0d9",
            created_at: moment().toDate(),
            updated_at: moment().toDate(),
            title: "Locations",
            description: "Location list and detail",
            parent_id: "eec3f277-9614-4516-b545-b57b4f661707",
        }
    ]);
};