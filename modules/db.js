import { createPool } from "mysql2/promise";
import config  from '../config/config.json' assert {type: 'json'};
export const pool = createPool({
  host: config.server.dbserver,
  user: config.server.dbuser,
  password: config.server.password,
  port: 3306,
  database: config.server.dbname,
});