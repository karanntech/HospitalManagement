import express from "express";
import { addNewAdmin, userLogin, userRegister } from "../controller/user.controller.js";
import { isAdmin } from "../utils/auth.admin.js";


const router = express.Router();

router.post("/register", userRegister)
router.post("/login", userLogin)

router.post("/register/admin",isAdmin, addNewAdmin)

export default router;