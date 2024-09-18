class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went Wrong",
        errors= [],
        stack= ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(stack){
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

const errorHandler = (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            message: err.message, // Only the error message
            success: false
        });
    }

    // Handle other errors
    return res.status(500).json({
        message: "Internal Server Error",
        success: false,
    });
};

export { ApiError, errorHandler };