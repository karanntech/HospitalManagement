import express from "express";
import { getMessage, sendMessage } from "../controller/message.controller.js";
import { isAdmin } from "../utils/auth.admin.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", isAdmin, getMessage)

export default router;