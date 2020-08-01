import { NowRequest, NowResponse } from "@vercel/node";
import { MutationTrySolveArgs } from "./hasuraCustomTypes";
import { Client } from "pg";

require("dotenv").config();

const client = new Client({
  ssl: true,
  connectionString: process.env.DATABASE_URL,
});

// Request Handler
module.exports = async (req: NowRequest, res: NowResponse): Promise<void> => {
  console.log(process.env.DATABASE_URL);
  // get request input
  let data;
  try {
    client.connect();
    data = await client.query("SELECT * FROM teams_public");
    res.status(200).send({
      teams: data,
    });
  } catch (e) {
    res.status(500).end();
  }
  client.end();
};
