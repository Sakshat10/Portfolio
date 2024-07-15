import Approach from "@/components/main/Approach";
import Experience from "@/components/main/Experience";
import Grid from "@/components/main/Grid";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Work from "@/components/main/Work";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className=" w-full">
      <Hero/>
      <Grid/>
      <Skills/>
      <Work/>
      <Experience/>
      <Approach/>
    </div>
    </main>
  );
}
