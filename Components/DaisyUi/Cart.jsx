import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((Sum, item) => Sum + Number(item.price), 0);

  const proceedCheckOut = () => {
    setCarts([]);
    toast.success("Proceed check out successful");
  };

  const cartDelete = (cart) => {
    const cartArray = carts.filter((item) => item.id !== cart.id);
    setCarts(cartArray);
    toast.success("Remove successful");
  };

  return (
    <div className="bg-white">
      <div className="max-w-9/12 mx-auto">
        <div className="text-black bg-[#f8f8f8] border border-blue-100 rounded-2xl p-5 space-y-3">
          <h2 className="text-2xl font-bold">Your Cart:</h2>

          {carts.length === 0 ? (
            <h3 className="text-2xl font-bold text-center">Cart is Empty</h3>
          ) : (
            <>
              {carts.map((item) => (
                <div key={item.id}>
                  <div className="flex justify-between bg-[#ececec] border border-blue-100 rounded-2xl p-5 space-y-3 items-center">
                    <div className="flex items-center gap-2">
                      <div>
                        <div className="border border-blue-200 w-12 h-12 rounded-full text-center">
                          <span className="text-3xl">{item.icon}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold">{item.name}</h3>
                        <p>${item.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => cartDelete(item)}
                      className="text-red-500 cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-between px-4">
                <p className="text-2xl font-bold">Total:</p>
                <h2 className="text-2xl font-bold">${totalPrice}</h2>
              </div>
              <button
                onClick={proceedCheckOut}
                className="btn w-full bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] text-white px-5 lg:px-5 py-4 lg:py-5 rounded-full border-none"
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
