import {User} from "../models/user.model.js";
import jwt from "jsonwebtoken";
import {ApiError} from "../utils/apiError.js";
import {asyncHandler} from "../utils/asyncHandler.js";

export const isAdmin = asyncHandler(async(req,res, next)=>{
    const token = req.cookies.adminToken;
    if(!token){
        throw new ApiError(400, "User is not authenticated")
    }

    let decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id)

    if(req.user.role !== "Admin"){
        throw new ApiError(403, "User restriction")
    }

    next()

});

export const isPatient = asyncHandler(async(req,res, next)=>{
    const token = req.cookies.patientToken;
    if(!token){
        throw new ApiError(400, "User is not authenticated")
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id)

    if(req.user.role !== "Patient"){
        throw new ApiError(403, "User restriction")
    }

    next()

});