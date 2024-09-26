import express from "express";
import { addNewAdmin, addNewDoctor, adminLogout, getDocInfo, getUserDetails, patientLogout, userLogin, userRegister } from "../controller/user.controller.js";
import { isAdmin, isPatient } from "../utils/auth.admin.js";


const router = express.Router();

router.post("/register", userRegister)
router.post("/login", userLogin)

router.post("/register/admin",isAdmin, addNewAdmin)

//For Doc
router.get("/docInfo", getDocInfo)
router.post("/doctor/new", isAdmin, addNewDoctor)

//User details
router.get("/admin/userdetail", isAdmin, getUserDetails);

router.get("/patient/userdetail", isPatient, getUserDetails);

//logout
router.get("/admin/logout", isAdmin, adminLogout)
router.get("/patient/logout", isPatient, patientLogout)
export default router;