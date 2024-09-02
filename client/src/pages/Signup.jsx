import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1 mr-4">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ml-5">
              {`Vikram's`}
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5 ml-6">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex-col flex gap-4 ml-4 mr-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" id="username"  />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput type="email" id="email" placeholder="name@company.com" />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="password" id="password" />
            </div>
            <Button className=" text-center justify-center font-semibold text-[1vw] bg-gradient-to-r from-red-500 via-purple-500 to-pink-500" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-4 text-sm mt-3 ml-4">
            <span className="text-1px  ">Have an account?
            </span>
            <Link to='/signin' className="text-blue-500">
                Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
