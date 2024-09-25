import express from "express";
import { createAppointment, getAllAppointment } from "../controller/appointment.controller.js";
import {isPatient, isAdmin} from "../utils/auth.admin.js";


const router = express.Router();

router.post("/create", isPatient, createAppointment);

router.get("/getall", isAdmin, getAllAppointment)

export default router;