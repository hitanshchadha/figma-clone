import React from "react";
import { SparklesPreview } from "@/components/Logo";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    return (<>
    <div className=" sticky top-0 w flex  z-10 backdrop-blur-md  place-content-between ">
        <div className="text-white pt-10 pb-10 pl-10">
        <SparklesPreview />
        </div>
        <ul className="    text-gray-400 flex  w-2/4 pt-10 pb-10  place-items-center  content-between justify-evenly place-content-evenly ">
            <li className=" transition ease-in-out hover:text-white"><a href="">Features</a></li>
            <li className=" transition ease-in-out hover:text-white"><a href="">Support</a></li>
            <li className=" transition ease-in-out hover:text-white"><a href="">Updates</a></li>
            <li className=" transition ease-in-out hover:text-white"><a href="">Pricing</a></li>
            <button onClick={()=>{router.push('/Login',{shallow: true})}} className=" bg-blue-600 px-3 py-1 text-white hover:bg-blue-700 hover:opacity-90  rounded-md " >Get Started</button>
        </ul>
    </div>
    
    </>);}