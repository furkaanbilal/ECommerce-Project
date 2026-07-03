import React, { useContext } from "react";
import { CartContext } from "../../../context/cart-context";
import { BASE_URL } from "../../../constants/app-urls";
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { deleteCarts } from "../../../services/cart-services";
import toast from "react-hot-toast";

const Cart = () => {
  const { carts ,getUserCarts} = useContext(CartContext);
  console.log(carts)

  const subtotal = carts.reduce((sum, item) => sum + item.finalPrice, 0);

  const deleteCartItem=async(id)=>{
    let response= await deleteCarts(id);
    if(response.isSuccess) toast.success("Cart Deleted Successfully")
        getUserCarts();
  }

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="flex items-center gap-3 mb-10">
          <ShoppingCart className="text-orange-500" size={34} />

          <h1 className="text-4xl font-bold">
            My <span className="text-orange-500">Cart</span>
          </h1>
        </div>

        {carts.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl py-20 text-center">
            <ShoppingCart size={80} className="mx-auto text-orange-500 mb-5" />

            <h2 className="text-3xl font-bold">Your Cart is Empty</h2>

            <p className="text-gray-400 mt-3">
              Add products to start shopping.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}

            <div className="lg:col-span-2 space-y-6">
              {carts.map((item, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-orange-500 transition p-5"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image */}

                    <img
                      src={`${BASE_URL}${item.filePath}`}
                      alt={item.title}
                      className="w-full md:w-40 h-40 object-cover rounded-xl"
                    />

                    {/* Details */}

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-bold">{item.title}</h2>

                        <p className="text-gray-400 mt-2">{item.brand}</p>

                        <p className="text-orange-500 text-2xl font-bold mt-4">
                          ₹{item.finalPrice}
                        </p>
                      </div>

                      {/* Quantity */}

                      <div className="flex flex-wrap items-center justify-between mt-6 gap-4">
                        <div className="flex items-center bg-black rounded-xl overflow-hidden border border-zinc-700">
                          <button className="px-4 py-3 hover:bg-orange-500 hover:text-black transition">
                            <Minus size={18} />
                          </button>

                          <span className="px-6">{item.quantity}</span>

                          <button className="px-4 py-3 hover:bg-orange-500 hover:text-black transition">
                            <Plus size={18} />
                          </button>
                        </div>

                        <button onClick={()=>{
                              deleteCartItem(item.id)
                        }} className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-3 rounded-xl transition">
                          <Trash2 size={18} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}

            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 h-fit lg:sticky lg:top-28">
              <h2 className="text-2xl font-bold mb-8 text-orange-500">
                Order Summary
              </h2>

              <div className="space-y-5">
                <div className="flex justify-between">
                  <span className="text-gray-400">Items</span>

                  <span>{carts.length}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Delivery</span>

                  <span className="text-green-400">FREE</span>
                </div>

                <hr className="border-zinc-700" />

                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>

                  <span className="text-orange-500">
                    ₹{subtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition">
                Buy Now
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
