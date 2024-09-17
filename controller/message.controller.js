import { Message } from "../models/message.model.js";


const sendMessage = async(req, res, next) => {
    const {firstname, lastname, email, phone, message} = req.body

    if(!firstname || !lastname || !email || !phone || !message){
        return res
        .status(400)
        .json({
            success: false,
            message: "All fields are required"
        });
    }

    await Message.create({firstname, lastname, email, phone, message})
        res.status(200).json({
            success: true,
            message: "Message sent"
        })
}


export {
    sendMessage
}