import express from "express";
import contact from "../controllers/contactcontroller.js";

const router = express.Router();

router.post("/", contact);
router.get("/", (req,res) => {
    res.send("Hello");
})

export default router;