"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
 
export function SparklesPreview() {
  return (
    <div className="  flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="  mb-1 text-2xl font-bold text-center text-white relative z-20">
        Figma Clone
      </h1>
      <div className="w-[10rem] h-10 relative">
        
        
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.5}
          maxSize={2}
          particleDensity={2000}
          className="w-full h-full"
          particleColor="FFD700"
          speed={5}
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(3px_8px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}