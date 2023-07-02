import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";

import { engine } from "express-handlebars";

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_CONNECTION_URL = process.env.DB_CONNECTION_URL;
const app = express();

app.use(express.json());

app.engine("handlebars", engine({ defaultLayout: "LayoutPage" }));
app.set("view engine", "handlebars");
app.set("views", "./views");

async function startApp() {
  try {
    await mongoose.connect(DB_CONNECTION_URL);

    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

startApp();
