import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { MAIN_DB_ENTITIES } from "../entities/mainDB";

dotenv.config();

export const MainDB = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: MAIN_DB_ENTITIES,
  synchronize: process.env.DB_SYNCHRONIZE === true.toString(),
  logging: false,
});
