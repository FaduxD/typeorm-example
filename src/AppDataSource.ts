import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "src/database/database.sqlite",
  synchronize: false,
  logging: true,
  entities: ["src/models/**/*.ts"],
  migrations: ["src/database/migrations/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
});

export default AppDataSource;
