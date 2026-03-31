import { Dot, Play } from "lucide-react";
import banner from "../../assets/banner.png";
import React from "react";

const HeroSec = () => {
  return (
    <div className="bg-white text-black">
      <div className="flex flex-col-reverse gap-10 lg:flex-row justify-between items-center max-w-11/12 lg:max-w-9/12 mx-auto pt-22 pb-22">
        <div className="lg:w-[640px] space-y-5">
          <div className="flex font-bold items-center bg-[#E1E7FF] w-80 gap-1 rounded-full py-2 px-4">
            <div className="flex relative w-5 h-5 items-center justify-center">
              <div className="absolute w-full h-full rounded-full bg-purple-300 opacity-30"></div>
              <div className="absolute w-3 h-3 rounded-full bg-purple-400 opacity-60"></div>
              <div className="absolute w-2 h-2 rounded-full bg-purple-500 opacity-80"></div>
              <div className="w-1 h-1 rounded-full bg-purple-700"></div>
            </div>
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2]">
              New: AI-Powered Tools Available
            </p>
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-slate-600">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex gap-3">
            <button className="btn bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] text-white px-5 lg:px-5 py-4 lg:py-5 rounded-full border-none">
              Explore Products
            </button>

            <button className="flex btn bg-white border border-purple-500 text-purple-500 rounded-full  hover:bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] hover:text-white transition duration-300">
              <Play></Play>
              Watch Demo
            </button>
          </div>
        </div>
        <div>
            <img src={banner} alt="banner" />     
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
