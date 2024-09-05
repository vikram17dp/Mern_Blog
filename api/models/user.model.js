import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String,
        default:"https://imgs.search.brave.com/t7_5MGpiska85f_Q1XjshZgZpbWvMQtugDmVUxLj2EE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yMS8yMy9h/dmF0YXItcGhvdG8t/ZGVmYXVsdC11c2Vy/LWljb24tcGVyc29u/LWltYWdlLXZlY3Rv/ci00Nzg1MjEyMy5q/cGc"
    }
},{timestamps:true})

export const User = mongoose.model('User',UserSchema)