import React from "react";
import { Link } from "react-router-dom";

export const Well = () => {
  return (
    <div className="min-h-[500px] w-full flex flex-col  justify-around items-center">
      <div>
        <h1 className="text-white text-4xl">
          Welcome To Your <span className="text-amber-400">Virtual Office</span>
        </h1>
      </div>
      <div className="flex gap-10">
        <button className="bg-amber-400 text-amber-50 px-3 py-1">
          Install Demo
        </button>
        <Link to={"/setup"}>
          <button className="bg-transparent border-amber-400 border-2 px-3 py-1 text-white">
            Setup Your Company
          </button>
        </Link>
      </div>
    </div>
  );
};
