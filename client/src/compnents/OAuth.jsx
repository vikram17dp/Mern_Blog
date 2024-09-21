import { Button } from "flowbite-react";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { SignInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";


function OAuth() {
    const dispatch = useDispatch();
    const navigate= useNavigate();

    const auth = getAuth(app);
    const handlegooglechange = async()=>{
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt:'select_account'}); // to choose multiple account
        try {
            const resultsFromGoogle = await signInWithPopup(auth,provider);
            // console.log(resultsFromGoogle);
            const res = await fetch('/api/auth/google',{
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({
                    name:resultsFromGoogle.user.displayName,
                    email:resultsFromGoogle.user.email,
                    googlePhotoUrl:resultsFromGoogle.user.photoURL
                })
            })
            const data = await res.json();
            if(res.ok){
                dispatch(SignInSuccess(data))
                navigate('/')
            }
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Button
      className="bg-transparent  rounded-lg bg-gradient-to-r from-purple-500 via-orange-600 to-purple-500
text-white hover:opacity-95 disabled:opacity-85 flex items-center justify-center "
      type="button"
      onClick={handlegooglechange}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-3" />
      <p>Continue With Google</p>
    </Button>
  );
}

export default OAuth;
