import express from "express";
import { getMessage, sendMessage } from "../controller/message.controller.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", getMessage)

export default router;