import express from "express";
import contact from "../controllers/contactcontroller.js";

const contactRoute = express.Router();

contactRoute.post("/contact", contact);

export default contactRoute;