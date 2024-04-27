import { createPool } from "mysql2"
import { db_config } from "./config";

export const connection = createPool(db_config).promise();