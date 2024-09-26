import { Message } from "../models/message.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/apiError.js";
import {ApiResponse} from "../utils/apiResponse.js";

const sendMessage = asyncHandler(async(req, res) => {
    const {firstname, lastname, email, phone, message} = req.body

    if(!firstname || !lastname || !email || !phone || !message){
        throw new ApiError(400, "All fields are required!")
    }

    await Message.create({firstname, lastname, email, phone, message})
        return res
        .status(200)
        .json(new ApiResponse(200, "Message sent successfully"))
})

const getMessage = asyncHandler(async(req, res)=>{
    const message = await Message.find()
    
    if(message.length === 0){
        throw new ApiError(404, "message not found")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, message, "Message fetched"))
})

export {
    sendMessage,
    getMessage
}