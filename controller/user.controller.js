import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/apiError.js";
import {ApiResponse} from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";

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

        return res.status(200).json(new ApiResponse(200, "User registered successfully"));
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

    return res
    .status(200)
    .json(new ApiResponse(200, "User logged In"));
})

export {
    userRegister,
    userLogin
}