"use client";
import React from "react";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { Keypad } from "@/components/ui/macbook-scroll";
import {SignupFormDemo} from "@/components/ui/signup";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient";
import { SparklesCore } from "@/components/ui/sparkles";



export default function Login() {
    const words = [
        {
          text: "Login to",
        },
        {
          text: "Start",
        },
        {
          text: "Building",
        },
        {
          text: "with",
        },
        {
          text: "Figma Clone.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ]
  




    return (
    
       
    <div className="bg-black h-screen w-screen flex flex-col place-content-center place-items-center justify-evenly">

      
    <TypewriterEffectSmooth words={words} className="mt-0 pt-2 text-center" />
        <div className="flex justify-evenly w-screen  ">
        <SignupFormDemo/>
        <Keypad />
        </div>
       
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
        </div>
       
      
    );}