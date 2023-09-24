import * as process from "process";

export const ServerOptions = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV
}
export const MysqlOptions = {
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB_TITLE: process.env.DB_TITLE,
}