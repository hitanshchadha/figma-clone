import React from "react";

export default function Navbar() {
    return (<>
    <div className=" sticky top-0 w flex  z-10 backdrop-blur-md place-content-end ">
        <ul className="    text-gray-400 flex  w-2/4 pt-10 pb-10  place-items-center  content-between justify-evenly place-content-evenly ">
            <li className=" transition ease-in-out hover:text-white"><a href="">Features</a></li>
            <li className=" transition ease-in-out hover:text-white"><a href="">Support</a></li>
            <li className=" transition ease-in-out hover:text-white"><a href="">Updates</a></li>
            <li className=" transition ease-in-out hover:text-white"><a href="">Pricing</a></li>
            <button className=" bg-blue-600 px-3 py-1 text-white  rounded-md " >Get Started</button>
        </ul>
    </div>
    
    </>);}