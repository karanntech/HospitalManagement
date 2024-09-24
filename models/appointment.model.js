import mongoose from "mongoose";
import { User } from "./user.model.js";

const appointmentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    appointmentDate: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    docName: {
        firstname: {
          type: String,
          required: true,
        },
        lastname: {
          type: String,
          required: true,
        },
      },
    hasVisited: {
        type: Boolean,
        default: false
    },
    address:{
        type: String,
        required: true
    },
    doctorId: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    patientId: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        enum: ["Pending", "Accepted", "Rejected"],
        default: "Pending",
      },
});


export const Appointment = mongoose.model("Appointment", appointmentSchema)