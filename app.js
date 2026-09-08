import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import contactRoute from "./routes/contact.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: "https://kasich-dev.vercel.app"    
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", contactRoute);

app.get("/", (req,res) => {
    res.send("Server working");
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server starting at port ${PORT}`);
});
