import React from "react";

const WorkFlow = () => {
  return (
    <div className="bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2]">
      <div className="max-w-9/12 mx-auto text-center space-y-3 pt-22 pb-22">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Ready to Transform Your Workflow?
        </h2>
        <p className="pb-4">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>
        <div className="flex justify-center gap-4">
          <button className="btn bg-white rounded-full border-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] px-5">
              Explore Products
            </span>
          </button>
          <button className="btn bg-[#fff0] border-white rounded-full px-5 hover:bg-white ">
            <span className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2]">
              View Pricing
            </span>
          </button>
        </div>
        <p>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default WorkFlow;
