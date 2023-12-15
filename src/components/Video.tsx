import { ChevronDown } from "lucide-react";
import Hero from "./Hero";
import { Button } from "./ui/button";

const Video = () => {
  return (
    <div className="w-full h-full relative">
      <div className="lg:absolute w-full h-full flex flex-col justify-center items-center z-10 text-[white] top-0  md:mt-0">
        <Hero />
        <div className="hidden xl:flex">
          <ChevronDown size={100} className="animate-bounce" />
        </div>
      </div>

      <div className="lg:absolute w-full h-full bg-[rgba(0,0,0,0.534)] left-0 top-0 invisible lg:visible"></div>
      <video
        src={"videoBg.mp4"}
        autoPlay
        loop
        muted
        className="w-full h-5/6 object-cover"
      />
    </div>
  );
};

export default Video;
