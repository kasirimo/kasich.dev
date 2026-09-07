import "dotenv/config";
import express from "express";
import cors from "cors";

import contactRoute from "./routes/contact.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("./public"));

app.use("/contact", contactRoute);

export default app;