import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/apiError.js";
import {ApiResponse} from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";

const patientRegister = asyncHandler(async(req, res)=>{
    const {firstname, lastname, email, phone, birthdate, gender, password, role} = req.body;

    if(!firstname || !lastname || !email || !phone || !birthdate || !gender || !password || !role){
        throw new ApiError(400, "Please enter all fields")
    }

    let user = await User.findOne({email});
    console.log("Existing User:", user);

    if(user){
        throw new ApiError(400, "User already register.")
    }

   try {
        await User.create({ firstname, lastname, email, phone, birthdate, gender, password, role });
        console.log("User created successfully");
        return res.status(200).json(new ApiResponse(200, "User registered successfully"));
    } catch (error) {
        console.error("Error creating user:", error);
        throw new ApiError(500, "Error registering user");
    }
})

export {
    patientRegister
}