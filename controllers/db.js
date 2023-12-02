import { createPool } from "mysql2/promise";
//import config  from '../config/config.json' assert {type: 'json'};
import dotenv from 'dotenv';
dotenv.config();
export const pool = createPool({
  host: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.PORT,
  database: process.env.DB_NAME,
});