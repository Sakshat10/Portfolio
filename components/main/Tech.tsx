"use client"
import React from "react";
import BallCanvas from "../ui/Ball"; 
import SectionWrapper from "../sub/SectionWrapper";
import {technologies}  from "../../constants/index";


type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };
  
// Define the type for a technology
interface Technology {
    name: string;
    icon: StaticImageData; 
  }
  

const Tech: React.FC = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology: Technology) => (
        <div className='w-28 h-28' key={technology.name}>
         <BallCanvas icon={technology.icon.src} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
