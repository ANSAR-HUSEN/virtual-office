import React, { useState, useRef } from "react";
import { Input } from "./Input";
import camera from "../assets/camera.png";

export const SetUp = ({ setIsValid }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [websiteError, setWebsiteError] = useState("");
  const [companySizeError, setCompanySizeError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [logo, setLogo] = useState(null);
  const fileInputRef = useRef(null);

  const handleSubmit = () => {
    // Reset errors
    setNameError("");
    setEmailError("");
    setCompanyError("");
    setWebsiteError("");
    setCompanySizeError("");
    setPasswordError("");
    setConfirmPasswordError("");

    let valid = true;

    if (name === "") {
      setNameError("Name is required");
      valid = false;
    }

    if (email === "") {
      setEmailError("Email is required");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      valid = false;
    }

    if (company === "") {
      setCompanyError("Company name is required");
      valid = false;
    }

    if (website === "") {
      setWebsiteError("Website is required");
      valid = false;
    }

    if (companySize === "") {
      setCompanySizeError("Please select your company size");
      valid = false;
    }

    if (password === "") {
      setPasswordError("Password is required");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }

    if (confirmPassword === "") {
      setConfirmPasswordError("Confirm Password is required");
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      valid = false;
    }

    if (valid) {
      setIsValid(true);
    }
  };

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setLogo(imageUrl);
  };

  return (
    <div className="relative z-10 my-10 flex justify-center items-center px-4">
      <div className="bg-white opacity-80 p-6 rounded-md w-[400px] max-w-md shadow-lg">
        <h2 className="text-center text-md font-semibold mb-4">
          Set Up Your Office
        </h2>
        <div className="w-full flex justify-center relative">
          <div className=" relative flex justify-center items-center h-[100px] w-[100px] rounded-full bg-blue-950 text-white bg-cover bg-center cursor-pointer" onClick={handleDivClick} style={{
        backgroundImage: logo ? `url(${logo})` : 'none',
      }}>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          {!logo && <h3  className="text-white">Logo here</h3>}
            <div className="absolute -bottom-2 bg-amber-500 rounded-full p-1">
              <img src={camera} alt="camera" className="w-5 text-white" />
            </div>
          </div>
        </div>

        <div className="text-sm mt-4">
          <Input
            type="text"
            value={name}
            setValue={setName}
            error={nameError}
            placeholder="First & Last Name"
            label="Enter Your Name"
            isRequired
          />
          <Input
            type="email"
            value={email}
            setValue={setEmail}
            error={emailError}
            placeholder="Email Here"
            label="Enter Your Email"
            isRequired
          />
          <Input
            type="text"
            value={company}
            setValue={setCompany}
            error={companyError}
            placeholder="Name Here"
            label="Your Company Name"
            isRequired
          />
          <Input
            type="text"
            value={website}
            setValue={setWebsite}
            error={websiteError}
            placeholder="Website Here"
            label="Your Company Website"
            isRequired
          />
          <Input
            type="text"
            value={companySize}
            setValue={setCompanySize}
            error={companySizeError}
            placeholder="Choose Your Company size"
            label="Company Size"
            isSelect
            isRequired
          />
          <Input
            type="password"
            value={password}
            setValue={setPassword}
            error={passwordError}
            placeholder="Type Password"
            label="Create Password"
            isRequired
          />
          <Input
            type="password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            error={confirmPasswordError}
            placeholder="Confirm Password"
            label="Confirm Password"
            isRequired
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-slate-800 hover:bg-slate-900 text-white py-2 rounded mt-2"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
