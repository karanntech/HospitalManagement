import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/apiError.js";
import {ApiResponse} from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";
import { generateToken } from "../utils/jwt_token.js";

const userRegister = asyncHandler(async(req, res)=>{
    const {firstname, lastname, email, phone, birthdate, gender, password, role} = req.body;

    if(!firstname || !lastname || !email || !phone || !birthdate || !gender || !password || !role){
        throw new ApiError(400, "Please enter all fields")
    }

    let user = await User.findOne({email});

    if(user){
        throw new ApiError(400, "User already register.")
    }

   try {
        await User.create({ firstname, lastname, email, phone, birthdate, gender, password, role });

        generateToken(user, "User registered", 200, res)

    } catch (error) {
    
        throw new ApiError(500, "Error registering user");
    }
})

const userLogin = asyncHandler(async (req, res)=>{
    const {email, password} = req.body;

    if(!email || !password){
        throw new ApiError(400, "Please enter email & password");
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        throw new ApiError(404, "User not found")
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if(!isPasswordCorrect){
        throw new ApiError(400, "Incorrect credentials")
    }

    generateToken(user, "User logged In", 200, res)
})

const addNewAdmin = asyncHandler(async(req, res)=>{
    const {firstname, lastname, email, phone, birthdate, gender, password} = req.body;

    if(!firstname || !lastname || !email || !phone || !birthdate || !gender || !password){
        throw new ApiError(400, "Please enter all fields")
    }

    const isRegistered = await User.findOne({email});
    if(isRegistered){
        throw new ApiError(400, "User already registered")
    }

    try {
        await User.create({firstname, lastname, email, phone, birthdate, gender, password, role:"Admin"});
    
        return res
        .status(200)
        .json(new ApiResponse(200, "Admin registered"))
    } catch (error) {
        throw new ApiError(500, "Error occured while registering new admin")
    }
})

const getDocInfo = asyncHandler(async(req, res)=>{
    const doctors = await User.find({role: "Doctor"})

    return res
    .status(200)
    .json(new ApiResponse(200, doctors, "All Doc info fetched"))
})

const getUserDetails = asyncHandler(async(req, res)=>{
    const user = req.user;

    return res
    .status(200)
    .json(new ApiResponse(200, user, "User details fetched"))
})

export {
    userRegister,
    userLogin,
    addNewAdmin,
    getDocInfo,
    getUserDetails
}