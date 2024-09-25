import express from "express";
import { createAppointment, deleteAppointment, getAllAppointment, updateAppointmentStatus } from "../controller/appointment.controller.js";
import {isPatient, isAdmin} from "../utils/auth.admin.js";


const router = express.Router();

router.post("/create", isPatient, createAppointment);

router.get("/getall", isAdmin, getAllAppointment)

router.put("/update/:id", isAdmin, updateAppointmentStatus)

router.delete("/delete/:id", isAdmin, deleteAppointment)
export default router;