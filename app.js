import express from "express";
import { config } from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/db.connection.js";
import messageRouter from "./routes/message.route.js";
import { errorHandler } from "./utils/apiError.js";


const app = express();


config({
    path: "./.env"
})


app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded(
    {
        extended: true
    }
));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/temp/"
}))


//Routes
app.use("/api/v1/message", messageRouter)



dbConnection();

app.use(errorHandler)

export default app;