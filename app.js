import "dotenv/config";
import express from "express";
import cors from "cors";

import contactRoute from "./routes/contact.js";
import contact from "./controllers/contactcontroller.js";

const app = express();

const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("./public"));

app.use("/contact", contactRoute);

export default app;