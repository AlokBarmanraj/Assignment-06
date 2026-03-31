import { Package, Rocket, User } from "lucide-react";
import React from "react";

const Steps = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="max-w-9/12 mx-auto pt-22 pb-22 space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-4xl lg:text-5xl font-bold text-black">
            Get Started in 3 Steps
          </h1>
          <p className="text-slate-600">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border-2 border-blue-100 bg-white rounded-2xl p-3.5 ">
            <div className="flex justify-end">
              <div className="w-8 h-8 text-center pt-1 bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] text-white rounded-full border-none">
                <p className="text-white">01</p>
              </div>
            </div>
            <div className="text-center flex flex-col items-center space-y-2 p-5">
              <div className="bg-gradient-to-r from-[#c8c4e0] to-[#decaee] p-3 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-[#6A11CB]"></User>
              </div>
              <h3 className="text-2xl font-bold text-black">Create Account</h3>
              <p className="text-slate-600">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>

          <div className="border-2 border-blue-100 bg-[#ffff] rounded-2xl p-3.5 ">
            <div className="flex justify-end">
              <div className="w-8 h-8 text-center pt-1 bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] text-white rounded-full border-none">
                <p className="text-white">02</p>
              </div>
            </div>
            <div className="text-center flex flex-col items-center space-y-2 p-5">
              <div className="bg-gradient-to-r from-[#c8c4e0] to-[#decaee] p-3 rounded-full flex items-center justify-center">
                <Package className="w-8 h-8 text-[#6A11CB]"></Package>
              </div>
              <h3 className="text-2xl font-bold text-black">Choose Products</h3>
              <p className="text-slate-600">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>

          <div className="border-2 border-blue-100 bg-[#ffff] rounded-2xl p-3.5 ">
            <div className="flex justify-end">
              <div className="w-8 h-8 text-center pt-1 bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] text-white rounded-full border-none">
                <p className="text-white">03</p>
              </div>
            </div>
            <div className="text-center flex flex-col items-center space-y-2 p-5">
              <div className="bg-gradient-to-r from-[#c8c4e0] to-[#decaee] p-3 rounded-full flex items-center justify-center">
                <Rocket className="w-8 h-8 text-[#6A11CB]"></Rocket>
              </div>
              <h3 className="text-2xl font-bold text-black">Start Creating</h3>
              <p className="text-slate-600">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
