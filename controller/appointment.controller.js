import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/apiError.js";
import {ApiResponse} from "../utils/apiResponse.js";
import { Appointment } from "../models/appointment.model.js";
import { User } from "../models/user.model.js";

const createAppointment = asyncHandler(async(req, res)=>{
    const {firstname, lastname, email, phone, birthdate, gender, appointmentDate,
    department,
    doctor_firstname,
    doctor_lastname,
    hasVisited,
    address} = req.body;

    if (
        !firstname ||
        !lastname ||
        !email ||
        !phone ||
        !birthdate ||
        !gender ||
        !appointmentDate ||
        !department ||
        !doctor_firstname ||
        !doctor_lastname ||
        !address
      ){
        throw new ApiError(400, "Please enter all field")
      }

      const isConflict = await User.find({
        firstName: doctor_firstname,
        lastName: doctor_lastname,
        role: "Doctor",
        doctorDepartment: department,
      });

      if(isConflict.length === 0){
        throw new ApiError(404, "Doctor not found")
      }

      if (isConflict.length > 1){
        throw new ApiError(404, "Doctors Conflict! Please Contact Through Email Or Phone!")
      }
    
      const doctorId = isConflict[0]._id;
      const patientId = req.user._id;

      const appointment = await Appointment.create({
        firstname,
        lastname,
        email,
        phone,
        nic,
        dob,
        gender,
        appointmentDate,
        department,
        doctor: {
          firstName: doctor_firstname,
          lastName: doctor_lastname,
        },
        hasVisited,
        address,
        doctorId,
        patientId,
      });

      return res
      .status(200)
      .json(new ApiResponse(200, "Appointment sent"))
})

export{
    createAppointment
}