import { Message } from "../models/message.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/apiError.js";
import {ApiResponse} from "../utils/apiResponse.js";

const sendMessage = asyncHandler(async(req, res, next) => {
    const {firstname, lastname, email, phone, message} = req.body

    if(!firstname || !lastname || !email || !phone || !message){
        throw new ApiError(400, "All fields are required!")
    }

    await Message.create({firstname, lastname, email, phone, message})
        res.status(200).json(new ApiResponse(200, "Message sent successfully"))
})



export {
    sendMessage
}