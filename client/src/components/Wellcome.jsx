import React, { useState } from "react";
import { Input } from "./Input";
import { useNavigate } from "react-router-dom";

export const Wellcome = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = () => {
    setNameError("");
    setPasswordError("");
    if(name === ""){
      setNameError("Name is required")
    }else if(password === ""){
        setPasswordError("Password is required")
    }else if(password.length < 6){
        setPasswordError("Password must be at least 6 characters")
    } else {
        navigate("/")
    }
  }

    return (
        <div className="relative z-10 my-18 flex justify-center items-center px-4">
                <div className="bg-white opacity-80 p-6 rounded-md w-[400px] max-w-md shadow-lg">
                  <h2 className="text-center text-md font-semibold mb-4">Wellcome Back</h2>
        
                  <div className="text-sm">
                    <Input value={name} setValue={setName} error={nameError} type={"text"} placeholder={"First & Last Name"} label={"Enter Your Name"} isRequired={true}/>
                    <Input value={password} setValue={setPassword} error={passwordError} type={"password"} placeholder={"Type Password"} label={"Enter Your Password"} isRequired={true}/>
                     
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