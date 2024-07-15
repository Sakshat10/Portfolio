import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/main/StarBackground";
import Footer from "@/components/main/Footer";
import ChatBox from "@/components/main/ChatBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sakshat's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
    className={`${inter.className} bg-[#030014]`}
      >
        <Navbar/>
        <StarsCanvas/>
        {children}
        <ChatBox/>
        <Footer/>
      </body>
    </html>
  );
}
