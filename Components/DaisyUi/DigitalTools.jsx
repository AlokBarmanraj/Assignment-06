import { Car, Check, Key } from "lucide-react";
import React, { use, useState} from "react";
import DigitalToolsCard from "./DigitalToolsCard";
import Cart from "./Cart";

const DigitalTools = ({ pricesCard }) => {
  const allCard = use(pricesCard);

  const [active, setActive] = useState("product");

const [carts, setCarts] = useState([])
console.log(carts);

  return (
    <div>
      <div className="bg-white text-black pb-22">
        <div className="max-w-9/12 mx-auto pt-22 text-center space-y-3">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Premium Digital Tools
          </h1>
          <p className="text-slate-600">
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.
          </p>
          {/* <div className="flex gap-3 w-[230px] mx-auto bg-[#E1E7FF] rounded-full pl-3 py-2">
          <button className="btn bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] text-white px-5 lg:px-5 py-4 lg:py-5 rounded-full border-none">
            Products
          </button>
          <button>
            Cart (2)
          </button>
        </div> */}

          <div className="flex w-fit mx-auto bg-[#E1E7FF] rounded-full p-1">
            <input
              type="radio"
              name="tabs"
              id="Products"
              className="hidden peer/Products"
              onClick={() => setActive("product")}
              defaultChecked
            />
            <label
              htmlFor="Products"
              className="cursor-pointer px-6 py-2 rounded-full text-sm font-medium text-black
            peer-checked/Products:bg-gradient-to-r 
           peer-checked/Products:from-[#4A00E0] 
           peer-checked/Products:via-[#6A11CB] 
           peer-checked/Products:to-[#8E2DE2] 
           peer-checked/Products:text-white 
             transition-all duration-300"
            >
              Products
            </label>

            <input
              type="radio"
              name="tabs"
              id="Cart"
              className="hidden peer/Cart"
              onClick={() => setActive("cart")}
            />
            <label
              htmlFor="Cart"
              className="cursor-pointer px-6 py-2 rounded-full text-sm font-medium text-black
            peer-checked/Cart:bg-gradient-to-r 
          peer-checked/Cart:from-[#4A00E0] 
          peer-checked/Cart:via-[#6A11CB] 
          peer-checked/Cart:to-[#8E2DE2] 
          peer-checked/Cart:text-white 
            transition-all duration-300"
            >
              Cart (2)
            </label>
          </div>
        </div>

        <div className="pt-10">

          {active === "product" ? (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-9/12 mx-auto">
              {allCard.map((card) => (
                <DigitalToolsCard key={card.id} card={card} carts={carts} setCarts={setCarts}/>
              ))}
            </div>
          ) : (
            <Cart></Cart>
          )}
        </div>
      </div>
    </div>
  );
};

export default DigitalTools;
