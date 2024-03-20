//import { DataSourceOptions } from "typeorm";

import { DataSource } from "typeorm";

// export const config /*: DataSourceOptions*/ = {
//   type: "sqlite",
//   database: "database/database.sqlite",
//   synchronize: false,
//   logging: true,
//   entities: ["src/models/**/*.ts"],
//   migrations: ["src/migrations/*.ts"],
// };

//export default config;

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
