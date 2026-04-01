import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className="max-w-9/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-40 pt-22 pb-14">
          <div className="space-y-3">
            <h1 className="text-3xl lg:text-4xl font-bold">DigiTools</h1>
            <p className="text-slate-400">
              Premium digital tools for creators, <br /> professionals, and
              businesses. Work smarter <br /> with our suite of powerful tools.
            </p>
          </div>
          <div className="flex justify-between">
            <div className="space-y-3">
              <h4 className="text-2xl font-bold">Product</h4>
              <p className="text-slate-400">Features</p>
              <p className="text-slate-400">Pricing</p>
              <p className="text-slate-400">Templates</p>
              <p className="text-slate-400">Integrations</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl font-bold">Company</h4>
              <p className="text-slate-400">About</p>
              <p className="text-slate-400">Blog</p>
              <p className="text-slate-400">Careers</p>
              <p className="text-slate-400">Press</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="space-y-3">
              <h4 className="text-2xl font-bold">Resources</h4>
              <p className="text-slate-400">Documentation</p>
              <p className="text-slate-400">Help Center</p>
              <p className="text-slate-400">Community</p>
              <p className="text-slate-400">Contact</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl font-bold">Social Links</h4>
              <div className="space-x-3">
                <span className="bg-white p-1 rounded-full">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-[#101727]"
                  />
                </span>
                <span className="bg-white p-1 rounded-full">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-[#101727]"
                  />
                </span>
                <span className="bg-white p-1 rounded-full">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-[#101727]"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-slate-600 pb-6"/>
        <div className="flex-none space-y-3 lg:flex justify-between pb-10">
          <p className="text-slate-400">© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-4 text-slate-400">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>   
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
