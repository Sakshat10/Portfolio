"use client"
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto">
        <a href="#about-me" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold text-xl ml-2 hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Sakshat Kumar
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6 bg-[#0300145e] border border-[#7042f861] px-6 py-2 rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer hover:text-purple-400 transition">About me</a>
          <a href="#skills" className="cursor-pointer hover:text-purple-400 transition">Skills</a>
          <a href="#projects" className="cursor-pointer hover:text-purple-400 transition">Projects</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-5">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={32}
                height={32}
                className="filter invert contrast-0 brightness-200 cursor-pointer hover:contrast-100"
              />
            ))}
          </div>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-[#030014c7] text-gray-200 absolute top-[65px] left-0 w-full backdrop-blur-md shadow-md z-40">
          <a href="#about-me" className="cursor-pointer hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>
            About me
          </a>
          <a href="#skills" className="cursor-pointer hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" className="cursor-pointer hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <div className="flex gap-4 mt-2">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={32}
                height={32}
                className="filter invert contrast-0 brightness-200 cursor-pointer hover:contrast-100"
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
