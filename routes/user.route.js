import express from "express";
import { patientRegister } from "../controller/user.controller.js";



const router = express.Router();

router.post("/patient/register", patientRegister)

export default router;