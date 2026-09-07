import express from "express";
import contact from "../controllers/contactcontroller.js";

const contactRoute = express.Router();

contactRoute.post("/", contact);
contactRoute.get("/", (req,res) => {
    res.send("Hello");
})

export default contactRoute;