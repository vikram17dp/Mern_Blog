export const errorHandler = (statusCode,message)=>{
    const error = new Error(message);
    error.statusCode = statusCode
    error.message
    return error
}