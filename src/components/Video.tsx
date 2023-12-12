import { ChevronDown } from "lucide-react";
import Hero from "./Hero";

const Video = () => {
  return (
    <div className="w-full h-5/6 relative">
      <div className="lg:absolute w-full h-full flex flex-col justify-center items-center z-10 text-[white] top-0 ">
        <Hero />
      </div>
      <div className="lg:absolute -translate-x-2/4 -translate-y-2/4 mx-auto my-0 left-2/4 bottom-5  text-[white]">
        <ChevronDown />
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
