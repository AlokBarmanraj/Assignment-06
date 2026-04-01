import { Check } from "lucide-react";
import { toast } from "react-toastify";

const DigitalToolsCard = ({ card, carts, setCarts }) => {
  const isAdded = carts.find((item) => item.id === card.id);

  const clickBuyNow = () => {
    if (isAdded) {
      toast.error("Item already add to cart");
      return;
    }

    setCarts([...carts, card]);
    toast.success("Add to cart");
  };

  return (
    <div className="bg-[#f8f8f8] border border-blue-100 rounded-2xl p-5 space-y-3">
      <div className="flex justify-end">
        <div className="bg-[#FEF3C6] w-[100Px] pl-2.5 rounded-full text-center">
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

      <div className="pb-5">
        {card.features.map((item, index) => (
          <div key={index} className="flex items-center">
            <Check className="text-[#30B868]"></Check>
            <p className="text-slate-600">{item}</p>
          </div>
        ))}
      </div>
      <button
        onClick={clickBuyNow}
        className="btn w-full bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] text-white px-5 lg:px-5 py-4 lg:py-5 rounded-full border-none"
      >
        {isAdded ? "Buy" : "Buy Now"}
      </button>
    </div>
  );
};

export default DigitalToolsCard;
