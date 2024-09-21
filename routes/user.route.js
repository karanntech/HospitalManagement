import express from "express";
import { addNewAdmin, getDocInfo, getUserDetails, userLogin, userRegister } from "../controller/user.controller.js";
import { isAdmin, isPatient } from "../utils/auth.admin.js";


const router = express.Router();

router.post("/register", userRegister)
router.post("/login", userLogin)

router.post("/register/admin",isAdmin, addNewAdmin)

//For Doc
router.get("/docInfo", getDocInfo)

router.get("/admin/userdetail", isAdmin, getUserDetails);

router.get("/patient/userdetail", isPatient, getUserDetails);

export default router;