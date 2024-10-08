import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    !username === "" ||
    !email === "" ||
    !password === ""
  ) {
    next(errorHandler(400, "all fields are required"));
  }
  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.json("signup successfull!"); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All fileds are required"));
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
        return next(errorHandler(400, "user not found!"));
      }
    const validpassword = bcrypt.compareSync(password, validUser.password);
    if (!validpassword) {
      return next(errorHandler(400, "Invalid password!"));
    }
    const token = jwt.sign(
      {
        id: validUser._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    const {password: pass,...rest} = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    return next(errorHandler(500, "Internal Server Error"));
  }
};

export const google = async(req,res,next)=>{
    const {email,name,googlePhotoUrl} = req.body;
    try {
      const user = await User.findOne({email});
      if(user){
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        const {password, ...rest} = user._doc;
        res.status(200).cookie('access_token',token,{
            httpOnly:true,
        }).json(rest)
      }else{
        const generatedpassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-4);
        const hashedPassword =  bcrypt.hashSync(generatedpassword,10);
        const newuser = new User({
          username:name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
          email,
          password:hashedPassword,
          profilePicture:googlePhotoUrl
        })
        await newuser.save();
        const token = jwt.sign({id: newuser._id}, process.env.JWT_SECRET);
        const {password,...rest} =newuser._doc;
        req.status(200).cookie('access_token',token,{
            httpOnly:true,
        }).json(rest)
      }
    } catch (error) {
      next(error)
    }
}