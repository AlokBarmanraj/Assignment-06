import { Check } from "lucide-react";
import React, { use } from "react";

const DigitalTools = ({pricesCard}) => {
    const allCard = use (pricesCard)
    console.log(allCard);
  return (
    <div className="bg-white text-black">
      <div className="max-w-9/12 mx-auto pt-22 text-center space-y-3">
        <h1 className="text-4xl lg:text-5xl font-bold">Premium Digital Tools</h1>
        <p className="text-slate-600">
          Choose from our curated collection of premium digital products designed <br/> to boost your productivity and creativity.
        </p>
        <div className="flex gap-3 w-[230px] mx-auto bg-[#E1E7FF] rounded-full pl-2 py-2">
          <button className="btn bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] text-white px-5 lg:px-5 py-4 lg:py-5 rounded-full border-none">Products</button>
          <button>Cart (2)</button>
        </div>
      </div>



      <div>
        {allCard.map (card => 
            <div>
                <span>{card.icon}</span>
            </div>
        )}
      </div>




      <div className="grid grid-cols-3 gap-6 max-w-9/12 mx-auto ">
        <div className="bg-[#F2F2F2] rounded-2xl p-5">
            <div>
                <p>Best Seller</p>
            </div>
            <div>
                <img src="assets/products/design-tool.png" alt="" />
            </div>
            <h3>AI Writing Pro</h3>
            <p>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
            <div>
                <h3>$60</h3>
                <p>/Month</p>
            </div>
            <div>
                <Check></Check>
                <p>50+ automation</p>
            </div>
            <div>
                <Check></Check>
                <p>50+ automation</p>
            </div>
            <div>
                <Check></Check>
                <p>50+ automation</p>
            </div>
            <button className="btn w-full bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] text-white px-5 lg:px-5 py-4 lg:py-5 rounded-full border-none">Buy Now</button>
        </div>



        <div className="bg-[#F2F2F2]">
            <div>
                <p>Best Seller</p>
            </div>
            <div>
                <img src="assets/products/design-tool.png" alt="" />
            </div>
            <h3>AI Writing Pro</h3>
            <p>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
            <div>
                <h3>$60</h3>
                <p>/Month</p>
            </div>
            <div>
                <Check></Check>
                <p>50+ automation</p>
            </div>
            <div>
                <Check></Check>
                <p>50+ automation</p>
            </div>
            <div>
                <Check></Check>
                <p>50+ automation</p>
            </div>
        </div>


        <div className="bg-[#F2F2F2]">
            <div>
                <p>Best Seller</p>
            </div>
            <div>
                <img src="assets/products/design-tool.png" alt="" />
            </div>
            <h3>AI Writing Pro</h3>
            <p>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
            <div>
                <h3>$60</h3>
                <p>/Month</p>
            </div>
            <div>
                <Check></Check>
                <p>50+ automation</p>
            </div>
            <div>
                <Check></Check>
                <p>50+ automation</p>
            </div>
            <div>
                <Check></Check>
                <p>50+ automation</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTools;
