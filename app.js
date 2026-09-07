import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";

import contactRoute from "./routes/contact.js";
import contact from "./controllers/contactcontroller.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "./public")));

app.use("/contact", contactRoute);

export default app;