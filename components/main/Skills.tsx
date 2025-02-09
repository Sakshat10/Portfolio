 "use client"
 import React from "react";

  import SkillText from "../sub/SkillText";
import Tech from "./Tech";
  
  const Skills = () => {
    return (
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-6 py-20 "
        // style={{ transform: "scale(0.9" }}
      >
        <SkillText />

        <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
        <Tech/>
      </div>
  
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover pointer-events-none">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
      </section>
    );
  };
  
  export default Skills;