import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import contactRoute from "./routes/contact.js";

const app = express();

const PORT = process.env.PORT || 10000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({
    origin: "https://kasich-dev.vercel.app",
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/contact", contactRoute);

app.get("/", (req,res) => {
    res.send("Server working");
})

app.listen(PORT, () => {
    console.log("Server created successfully");
});
