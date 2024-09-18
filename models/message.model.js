import mongoose, { mongo } from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLength: [3, "First name must contain 3 characters"]
    },
    lastname: {
        type: String,
        required: true,
        minLength: [3, "last name must contain 3 characters"]
    },
    email: {
        type: String,
        required: true,
        validator: [validator.isEmail, "Please provide a valild email"]
    },
    phone: {
        type: Number,
        required: true,
        minLength: [11, "Phone must contain 11 character"],
        maxLength: [11, "Phone must contain 11 character"]
    },
    message: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const Message = mongoose.model("Message", messageSchema)