import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Pricing } from "../util/api";
import useStore from "../hook/store";
import { useNavigate } from "react-router-dom";


const PricingPlans = () => {
  const [billing, setBilling] = useState("monthly");
  const [hover, setHover] = useState("");
  const {selected, setSelected} = useStore();
  const navigate = useNavigate();

  const handlePlan = (price)=>{
    if(price.custome) return;
    setSelected(price.title)
    navigate("/yearly")
  }

  return (
    <section className="bg-cover bg-center py-16 text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Flexible <span className="text-amber-500">Plans</span>
        </h2>
        <p className="text-lg mt-2">
          Choose a plan that works best for you & your team
        </p>

        {/* Toggle Button */}
        <div className="inline-flex mt-6 bg-gray-800 rounded-full p-1">
          <button
            className={`px-6 py-3 rounded-full text-sm font-semibold transition ${
              billing === "monthly" && "bg-amber-400 text-white" 
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
              billing === "yearly" && "bg-amber-400 text-white"  
            }`}
            onClick={() => setBilling("yearly")}
          >
            Yearly <span className="text-xs">(Save 60%)</span>
          </button>
         
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mt-25 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {Pricing.map((price, index) => {
          return (
            <div
              key={index}
              className="group bg-white/10 bg-opacity-70 backdrop-blur-sm rounded-lg p-6 border border-gray-700 shadow-lg flex flex-col justify-between items-center transform transition duration-300 hover:scale-105 hover:-translate-y-11"
            >
              <div>
                <h3 className="text-2xl text-center font-bold mb-2">
                  {price.title}{" "}
                  {price.smallTitle && (
                    <span className="text-xs">{`(${price.smallTitle})`}</span>
                  )}
                </h3>
                <p className="text-sm text-center">{price.description}</p>
                {price.custome && (
                  <div className="my-2">
                    <h2 className="text-2xl text-center font-bold my-3">
                      {price.custome}
                    </h2>
                    
                  </div>
                )}
               {
                price.price ? (
                  <p className="text-5xl font-bold mb-4 text-center my-3">
                  ${price.price}{" "}
                  <span className="text-sm font-normal">/Per Month</span>
                </p>
                ):(<p></p>)
               }
               
               <hr className="my-5"/>

                <ul className="space-y-2 flex flex-col items-center text-sm">
                  {price.list.map((listItem, index) => {
                    return (
                      <li key={index} className="list-disc">
                        {listItem.item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <button
                className={`mt-6 group-hover:bg-amber-400 bg-slate-800 text-white py-3 w-full rounded-4xl transition ${
                  hover === price.id && "bg-amber-400"
                } `} onClick={()=>handlePlan(price)}
              >
                {price.price ? "Choose Plan" : "Contact Us"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingPlans;
