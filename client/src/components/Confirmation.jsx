import React, { useState } from "react";
import { Input } from "./Input";

export const Confirmation = ({setIsValid}) =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleSubmit = ()=> {
      setNameError("");
      setEmailError("");
      setPasswordError("");
      setConfirmPasswordError("");

        if(name === ""){
            setNameError("Name is required")
        }else if(email === ""){
            setEmailError("Email is required")
        }else if(!/\S+@\S+\.\S+/.test(email)){
            setEmailError("Email is invalid")
        }
        else if(password === ""){
            setPasswordError("Password is required")
        }else if(confirmPassword === ""){
            setConfirmPasswordError("Confirm Password is required")
        }else if(password !== confirmPassword){
            setConfirmPasswordError("Passwords do not match")
        }else if(password.length < 6){
            setPasswordError("Password must be at least 6 characters")
        } else{
            setIsValid(true)
        }
    }
    return (
         <div className="relative z-10 my-10 flex justify-center items-center px-4">
        <div className="bg-white opacity-80 p-6 rounded-md w-[400px] max-w-md shadow-lg">
          <h2 className="text-center text-md font-semibold mb-4">Complete Your Signup</h2>

          <div className="text-sm">
            <Input type={"text"} value={name} setValue={setName} error={nameError}  placeholder={"First & Last Name"} label={"Enter Your Name"} isRequired={true}/>
            <Input type={"email"} value={email} setValue={setEmail} error={emailError} placeholder={"Email Here"} label={"Enter Your Email"} isRequired={true}/>
            <Input type={"password"} value={password} setValue={setPassword} error={passwordError} placeholder={"Type Password"} label={"Create Password"} isRequired={true}/>
            <Input type={"password"} value={confirmPassword} setValue={setConfirmPassword} error={confirmPasswordError} placeholder={"Confirm Password"} label={"Confirm Password"} isRequired={true}/>
             
            <button onClick={handleSubmit} className="w-full bg-slate-800 hover:bg-slate-900 text-white py-2 rounded mt-2">
              Continue
            </button>
          </div>

          <p className="text-xs w-[90%] pl-16 text-gray-600 mt-3 text-center">
            By proceeding, you are agreeing to the{' '}
            <a href="#" className="underline">Terms & Conditions</a> and{' '}
            <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>
      </div> 
    )
}