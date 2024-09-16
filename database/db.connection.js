import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "HospitalManagement"
    }).then(()=>{
        console.log("Database connected")
    })
    .catch((err)=>{
        console.log(`Some error occured while connecting to database ${err}`)
    })
}

export {dbConnection}