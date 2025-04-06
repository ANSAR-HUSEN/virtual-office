import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Pricing } from "../util/api";
import useStore from "../hook/store";


export const Yearly = () => {
    const [billing, setBilling] = useState("monthly");
    const {selected, setSelected} = useStore()


    const SelectedPrice = Pricing.filter((price)=> price.custome === undefined)
    return (
        <div className="flex justify-center  h-screen">
            <div>
                <h2 className="text-4xl font-bold text-white">Your Order <span className="text-amber-400">Summary</span></h2>
                <div className="bg-white/5 bg-opacity-98 backdrop-blur-sm rounded-lg p-6 border border-gray-700 shadow-lg flex flex-col justify-between my-5 w-[900px] h-[470px]">
                    
                    <div className="w-[55%]">
                        <div className="flex justify-between items-center w-full mb-4">
                            <h3 className="text-2xl text-white">Selecet Plan</h3>
                            <div className="inline-flex bg-gray-800 rounded-full p-1">
                            <button
                                className={`px-2 py-1 rounded-full text-sm font-semibold transition ${
                                billing === "monthly" ? "bg-yellow-400 text-black" : "text-white"
                                }`}
                                onClick={() => setBilling("monthly")}
                            >
                                Monthly
                            </button>
                            <Link to="/yearly">
                            <button
                                className={`px-2 py-1 rounded-full text-sm font-semibold transition ${
                                billing === "yearly" ? "bg-yellow-400 text-black" : "text-white"
                                }`}
                                onClick={() => setBilling("yearly")}
                            >
                                Yearly <span className="text-xs">(Save 60%)</span>
                            </button>
                            </Link>
                            
                            </div>
                        </div>
                        {
                        SelectedPrice.map((price, index) => {
                            return (
                                <div
                                    onClick={()=>setSelected(price.title)}
                                    key={index}
                                    className="group bg-white/30 bg-opacity-70 backdrop-blur-sm rounded-lg  border border-gray0 shadow-lg my-3 grid grid-cols-9  items-center gap-3 p-3" 
                                >
                                    <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-white border-1 border-amber-500 mb-4 col-span-1 ">
                                        <div className={`w-[20px] h-[20px] rounded-full border-1 border-amber-500 ${selected === price.title ? "bg-amber-500" : "bg-white"}`}>
                                        </div>
                                    </div>
                                    <div className="col-span-3">
                                        <h3 className="text-md text-white/80 font-bold">
                                            {price.title}
                                        </h3>
                                        <p className="text-[8px] text-white/60 text-light leading-2.5">{price.description}</p>
                                    </div>
                                    <div className="col-span-3 flex justify-center">

                                        {
                                            price.smallTitle && (
                                                <div className="bg-white border-1 font-bold rounded-xl py-0.5 border-black px-2 text-xs w-[100px]">{price.smallTitle}</div>
                                            )
                                        }
                                    </div>
                                    <div className="col-span-2 flex flex-col items-end">
                                        <p className="text-white text-2xl">${price.price}</p>
                                        <p className="text-blue-950 text-[10px]">For Month</p>
                                    </div>
                                </div>
                            )
                        })
                   }
                    </div>
                   
                   
                </div>
            </div>
            
        </div>
        
    )
}