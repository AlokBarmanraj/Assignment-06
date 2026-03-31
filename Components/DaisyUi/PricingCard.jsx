import { Check } from "lucide-react";
import React from "react";

const PricingCard = () => {
  return (
    <div className="bg-white pt-22 pb-22">
      <div className="max-w-9/12 mx-auto">
        <div className="text-center pb-8 space-y-3 text-black">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Simple, Transparent Pricing
          </h1>
          <p className="text-slate-600">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#f8f8f8] border border-blue-100 p-5 rounded-2xl space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-black">Starter</h3>
              <p className="text-slate-600">Perfect for getting started</p>
            </div>
            <div className="flex items-center">
              <h2 className="text-3xl font-bold text-black">$0</h2>
              <p className="text-slate-600">/Month</p>
            </div>
            <div className="pb-16">
              <div className="flex">
                <Check className="text-[#30B868]"></Check>
                <p className="text-slate-600">Access to 10 free tools</p>
              </div>
              <div className="flex">
                <Check className="text-[#30B868]"></Check>
                <p className="text-slate-600">Basic templates</p>
              </div>
              <div className="flex">
                <Check className="text-[#30B868]"></Check>
                <p className="text-slate-600">Community support</p>
              </div>
              <div className="flex">
                <Check className="text-[#30B868]"></Check>
                <p className="text-slate-600">1 project per month</p>
              </div>
            </div>
            <button className="btn w-full bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] text-white px-5 lg:px-5 py-4 lg:py-5 rounded-full border-none">
              Get Started Free
            </button>
          </div>

          <div className="relative bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] text-white p-5 rounded-2xl space-y-4">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-30 bg-[#FEF3C6] p-1 rounded-full text-center">
                <p className="text-[#BB4D00]">Most Popular</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Pro</h3>
              <p>Best for professionals</p>
            </div>
            <div className="flex items-center">
              <h2 className="text-3xl font-bold">$29</h2>
              <p>/Month</p>
            </div>
            <div className="pb-3">
              <div className="flex">
                <Check className="text-[#30B868]"></Check>
                <p>Access to all premium tools</p>
              </div>
              <div className="flex">
                <Check className="text-[#30B868]"></Check>
                <p>Unlimited templates</p>
              </div>
              <div className="flex">
                <Check className="text-[#30B868]"></Check>
                <p>Priority support</p>
              </div>
              <div className="flex">
                <Check className="text-[#30B868]"></Check>
                <p>Unlimited projects</p>
              </div>
              <div className="flex">
                <Check className="text-[#30B868]"></Check>
                <p>Cloud sync</p>
              </div>
              <div className="flex">
                <Check className="text-[#30B868]"></Check>
                <p>Advanced analytics</p>
              </div>
            </div>
            <button className="btn bg-white w-full rounded-full border-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] px-5">
                Start Pro Trial
              </span>
            </button>
          </div>

          <div className="bg-[#f8f8f8] border border-blue-100 p-5 rounded-2xl space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-black">Enterprise</h3>
              <p className="text-slate-600">For teams and businesses</p>
            </div>
            <div className="flex items-center">
              <h2 className="text-3xl font-bold text-black">$99</h2>
              <p className="text-slate-600">/Month</p>
            </div>
            <div className="pb-3.5">
              <div className="flex">
                <Check className="text-[#30B868]"></Check>
                <p className="text-slate-600">Everything in Pro</p>
              </div>
              <div className="flex">
                <Check className="text-[#30B868]"></Check>
                <p className="text-slate-600">Team collaboration</p>
              </div>
              <div className="flex">
                <Check className="text-[#30B868]"></Check>
                <p className="text-slate-600">Custom integrations</p>
              </div>
              <div className="flex">
                <Check className="text-[#30B868]"></Check>
                <p className="text-slate-600">Dedicated support</p>
              </div>
              <div className="flex">
                <Check className="text-[#30B868]"></Check>
                <p className="text-slate-600">SLA guarantee</p>
              </div>
              <div className="flex">
                <Check className="text-[#30B868]"></Check>
                <p className="text-slate-600">Custom branding</p>
              </div>
            </div>
            <button className="btn w-full bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] text-white px-5 lg:px-5 py-4 lg:py-5 rounded-full border-none">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
