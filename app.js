import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import contactRoute from "./routes/contact.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/contact", contactRoute);

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

export default app;