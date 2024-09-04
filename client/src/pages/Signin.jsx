import { Button, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



function Signin() {
  const [loading,setLoading] = useState(false);
  const [errormessage,setErrormessage] = useState(null);
  const [formdata,setFormdata] = useState({});
  const navigate = useNavigate();

  const handlechange = (e)=>{
    setFormdata({ ...formdata, [e.target.id]: e.target.value.trim() });

  }
  const onhandleSubmit = async (e)=>{
    e.preventDefault();

    if(!formdata.email || !formdata.password){
      return setErrormessage("please fill all fileds!")
    }
    try {
      setLoading(true);
      setErrormessage(null);
      const res = await fetch("/api/auth/signin",{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),

      });
      const data = await res.json();
      if(data.success == false){
        setLoading(false); 
        return setErrormessage(data.message)
      }
      setLoading(false);
      navigate('/');
    } catch (error) {
      setErrormessage(error.message);
      setLoading(false);
    }
    
  }
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
          <form
            className="flex-col flex gap-4 ml-4 mr-4"
            onSubmit={onhandleSubmit}
          >
            
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                id="email"
                placeholder="name@company.com"
                onChange={handlechange}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                id="password"
                onChange={handlechange}
              />
            </div>
            <Button
              className=" text-center justify-center font-semibold text-[1vw] bg-gradient-to-r from-red-500 via-purple-500 to-pink-500"
              type="submit" disabled={loading}
            >
              {loading ? 'loading...' : 'Signin'}
            </Button>
          </form>
          <div className="flex gap-4 text-sm mt-3 ml-4">
            <span className="text-1px  ">Have an account?</span>
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
       {
         errormessage && <div className="h-10 sm:w-[46vh] w-[80vw] ml-10 sm:ml-[52vw] rounded-lg pt-2 text-white text-center  justify-center items-center bg-red-400 mt-5">
          
          {errormessage}
                    
          </div>
       }
       
    </div>
  );
}
export default Signin
