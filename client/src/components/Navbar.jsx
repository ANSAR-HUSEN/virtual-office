import React, { useState } from "react";
import logo from "../assets/logo_nav.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [selected, setSelected] = useState({})
  const [isOpen, setIsOpen] = useState(false);

  const Links = [
    {
      id: "1",
      title: "Home",
      link: "/",
    },
    {
      id: "2",
      title: "Features",
      link: "/feature",
    },
    {
      id: "3",
      title: "About Us",
      link: "/about",
    },
    {
      id: "4",
      title: "Contact Us",
      link: "/contact",
    },
  ]
  return (
    <nav className="relative z-10  bg-transparent bg-opacity-80 text-white px-6 py-3 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-2">
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="w-[100px]" />
        </Link>
      </div>



      <ul className="hidden flex-col  md:flex md:flex-row space-x-10 text-sm font-medium">
        {Links.map((link) => (
          <Link to={link.link} onClick={()=>setSelected(link)}><li  className={`hover:text-gray-300 cursor-pointer ${!selected.id ? link.id === "1" && "border-b-2 border-white pb-1" : selected.id === link.id && "border-b-2 border-white pb-1"}`}>{link.title}</li></Link>
        ))}
      </ul>

      <Link to={"/auth"}>
        <button className="bg-amber-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded">
          Sign In
        </button>
      </Link>

      <div className="md:hidden" onClick={()=> setIsOpen(!isOpen)}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
      </div>
      <ul className={ ` absolute top-[70px] right-0 w-[50%]  ${!isOpen && "hidden"} ${isOpen && "flex"} flex-col  md:hidden items-center bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg space-y-2 text-sm font-medium py-5`}>
        {Links.map((link) => (
          <Link to={link.link} onClick={()=>setSelected(link)}><li  className={`hover:text-gray-300 cursor-pointer ${!selected.id ? link.id === "1" && "border-b-2 border-white pb-1" : selected.id === link.id && "border-b-2 border-white pb-1"}`}>{link.title}</li></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
