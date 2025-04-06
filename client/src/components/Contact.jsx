import React from "react";
import { Input } from "./Input";


const ContactUs = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
    >
      <div className=" min-h-screen flex flex-col justify-center items-center px-6 py-24">
        <h1 className="text-4xl font-bold mb-4 text-amber-500">Contact Us</h1>
        <p className="text-lg max-w-xl text-center mb-10">
          We'd love to hear from you! Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
        </p>

        <form className="bg-white opacity-80 p-6 text-black rounded-md w-[600px] max-w-md shadow-lg">
          <div>
            <Input type={"text"} placeholder={"Your name"} label={"Name"}/>
          </div>

          <div>
            <Input type={"email"} placeholder={"example@gmail.com"} label={"Email"}/>
           
          </div>

          <div>
            <label className="block mb-2 text-sm text-black font-semibold">Message</label>
            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full px-4 py-2 rounded-lg bg-transparent border resize-none border-gray-600 text-black focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-400 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
