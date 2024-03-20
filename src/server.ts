import express from "express";
import AppDataSource from "./AppDataSource";

const port = 3001;
const app = express();

app.use(express.json());

require("./routes/index")(app);

AppDataSource.initialize()
  .then(async () => {
    console.log("Database online.");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log(`App running on ${port}.`);
});
