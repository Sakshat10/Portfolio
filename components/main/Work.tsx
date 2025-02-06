"use client"
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { styles } from "../ui/Styles";
import github from "../../assets/github.png";
import SectionWrapper from "../sub/SectionWrapper";
import { projects } from "../../constants/index";
import { fadeIn, textVariant } from "../../utils/Motions";
import { StaticImageData } from "next/image";

interface Tag {
  name: string;
  color: string;
}

interface Project {
    index: number;
    name: string;
    description: string;
    tags: Tag[];
    image: StaticImageData;
    source_code_link: string;
    link: string;
  }
  
const ProjectCard: React.FC<Project> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary text-white bg-[#131630]  border-2 p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] cursor-pointer"
        onClick={() => window.open(link, "_blank")}
        >
 
         <Image
            src={image}
            alt="project_image"
            onClick={() => window.open(link, "_blank")}
            className="w-full h-full object-cover rounded-2xl shadow-slate-800"
            />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-cyan-500 font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works: React.FC = () => {
  return (
    <div id="projects">
      <motion.div className="text-center">
        <h2 className={`${styles.sectionHeadText}`}>My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Projects</span> </h2>
      </motion.div>

      <div className="w-full flex items-center justify-center ">
        <motion.p
          className="mt-3 text-center max-sm:text-justify text-secondary text-[17px] max-w-3xl text-white leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
