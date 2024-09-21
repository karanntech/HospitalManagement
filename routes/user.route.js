import express from "express";
import { addNewAdmin, getDocInfo, userLogin, userRegister } from "../controller/user.controller.js";
import { isAdmin } from "../utils/auth.admin.js";


const router = express.Router();

router.post("/register", userRegister)
router.post("/login", userLogin)

router.post("/register/admin",isAdmin, addNewAdmin)

//For Doc
router.get("/docInfo", getDocInfo)

export default router;