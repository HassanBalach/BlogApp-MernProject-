import { app } from "./app.js";
import connectDB from "./DB/Database.js";

import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    console.log("Database is successfully connected!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("FAIL to connect with database");
  });
