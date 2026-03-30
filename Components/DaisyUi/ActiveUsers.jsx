
import React from "react";

const ActiveUsers = () => {
  return (
    <div className="bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2]">
      <div className="flex lg:flex-row justify-around w-full lg:max-w-8/12 mx-auto py-20">
        <div>
          <h1 className="text-5xl font-bold">50K+</h1>
          <p className="text-slate-300">Active Users</p>
        </div>
        <div className="border border-slate-300"></div>
        <div>
          <h1 className="text-5xl font-bold">200+</h1>
          <p className="text-slate-300">Premium Tools</p>
        </div>
        <div className="border border-slate-300"></div>
        <div>
          <h1 className="text-5xl font-bold">4.9</h1>
          <p className="text-slate-300">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsers;
