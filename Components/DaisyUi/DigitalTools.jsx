import { Check, Key } from "lucide-react";
import React, { use } from "react";

const DigitalTools = ({ pricesCard }) => {
  const allCard = use(pricesCard);
  console.log(allCard);
  return (
    <div className="bg-white text-black pb-10">
      <div className="max-w-9/12 mx-auto pt-22 text-center space-y-3">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Premium Digital Tools
        </h1>
        <p className="text-slate-600">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="flex gap-3 w-[230px] mx-auto bg-[#E1E7FF] rounded-full pl-3 py-2">
          <button className="btn bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] text-white px-5 lg:px-5 py-4 lg:py-5 rounded-full border-none">
            Products
          </button>
          <button className="btn bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] text-white px-5 lg:px-5 py-4 lg:py-5 rounded-full border-none">
            Cart (2)
          </button>
        </div>
      </div>

      <div className="pt-10">
        <div className="grid grid-cols-3 gap-6 max-w-9/12 mx-auto">
          {allCard.map((card) => (
            <div className="bg-[#F2F2F2] rounded-2xl p-5 space-y-3">
              <div className="flex justify-end">
                <div className="bg-[#FEF3C6] w-[100Px] pl-2.5 rounded-full ">
                  <p className="text-[red]">{card.tag}</p>
                </div>
              </div>
              <div className="border border-blue-200 w-12 h-12 rounded-full text-center">
                <span className="text-3xl">{card.icon}</span>
              </div>
              <h3 className="text-3xl font-bold">{card.name}</h3>
              <p className="text-slate-600">{card.description}</p>
              <div className="flex items-center">
                <h3 className="text-2xl font-bold">${card.price}</h3>
                <p className="text-slate-600">/Month</p>
              </div>
              <div>

                {card.features.map((item, index) =>(
                    <div key={index} className="flex items-center">
                  <Check className="text-[#30B868]"></Check>
                  <p className="text-slate-600">{item}</p>
                </div>
                ))}
              </div>
              <button className="btn w-full bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] text-white px-5 lg:px-5 py-4 lg:py-5 rounded-full border-none">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalTools;
