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

app.get("/", (req,res) => {
    return res.send("<h1>Homepage</h1>");
});

app.get("/about", (req,res) => {
    return res.send("<h1>About</h1>");
})

export default app;