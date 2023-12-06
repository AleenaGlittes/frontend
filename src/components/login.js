import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Login() {
const [email,setEmail] =useState('');
const [password,setPassword] = useState('');


const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit")

    try {
     const url ="http://localhost:5001/api/login";
     const response =await axios.post(url,{email,password});
     localStorage.setItem("token",response.data)
      console.log(email)

      console.log(response.data); 

    
    } catch (error) {
      
      console.error('Error:', error);
    }
  };


    return (
        <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-300 w-full py-16 px-4">
            <div className="flex flex-col items-center justify-center">
               
                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                        Login to your account
                    </p>
                    <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                        Dont have account?{" "}
                        <Link to='/register'>
                        <span tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                            {" "}
                            register
                        </span>
                        </Link>
                    </p>
                  
                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                        <hr className="w-full bg-gray-400  " />
                    </div>
                    <div>
                        <lable className="text-sm font-medium leading-none text-gray-800">Email</lable>
                        <input 
                        aria-label="enter email adress"
                         role="input" 
                         type="email" 
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}
                         name="email"
                         className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                    <div className="mt-6  w-full">
                        <lable className="text-sm font-medium leading-none text-gray-800">Password</lable>
                        <div className="relative flex items-center justify-center">
                            <input 
                            aria-label="enter Password"
                             role="input" 
                             type="password"
                             value={password}
                             onChange={(e)=>setPassword(e.target.value)}
                             name="password"
                             className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                            <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button role="button" aria-label="create my account" 
                        onClick={(e) => handleSubmit(e)}
                        className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
