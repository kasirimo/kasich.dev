import express from "express";
import contact from "../controllers/contactcontroller.js";

const router = express.Router();

router.post("/", contact);

export default router;