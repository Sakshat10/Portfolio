import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import threejs from "../assets/tech/threejs.svg";
import git from "../assets/tech/git.png";
import Rust from "../assets/tech/Rust.png";
import Solidity from "../assets/tech/solidity.png";
import lumox from "../assets/lumox.png";
import AiBanshee from "../assets/AiBanshee.png";
import HackFest from "../assets/HackFest.png"


export const Socials = [
    {
        name:"LinkedIn",
        src:"/linkedin.png",
    },
    {
        name:"Twitter",
        src:"/twitter.png",
    },
    {
        name:"Github",
        src:"/github.svg",
    },
]

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "Always aiming to improve.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Inventing a Seamless JS Animation Framework",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-start md:justify-center lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Blockchain Engineer Intern",
    desc: "Assisted in the development of a smart contracts",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },

  {
    id: 3,
    title: "Freelance Web Developer",
    desc: "Managed end-to-end development of customized web solutions for freelance clients",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

interface Technology {
  name: string;
  icon: StaticImageData; // Adjust the type to match the imported image type
}


export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Rust",
    icon: Rust,
  },
  {
    name: "Solidity",
    icon: Solidity,
  },
];


export const projects = [
  {
    name: "Lumox",
    description:
      "Lumox, a gaming Web3 startup, integrates React with Tailwind CSS for sleek frontend design, enhances security via wagmi wallet connection",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: lumox,
    source_code_link: "https://github.com/Sakshat10/Lumox-Studio",
    link:"https://lumoxstudio.com/"
  },
  {
    name: "AiBanshee",
    description:
      "AI Banshee, a decentralized exchange (DEX) startup, uses Next.js, TypeScript, Tailwind CSS, and framer-motion for robust, secure, and engaging platforms.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Wagmi",
        color: "pink-text-gradient",
      },
    ],
    image: AiBanshee,
    source_code_link: "https://github.com/Sakshat10/AiBanshee",
    link:"https://aibanshee.com/"
  },
  {
    name: "Hack The Fest",
    description:
      "Hack the Fest, a society event website, employs ReactJS, Tailwind CSS for aesthetics, and Framer Motion for engaging animations and transitions.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: HackFest,
    source_code_link: "https://github.com/Sakshat10/hackthefest2-new",
    link:"https://hackthefest2-new.vercel.app/"
  },
];