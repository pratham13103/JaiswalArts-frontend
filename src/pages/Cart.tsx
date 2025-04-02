import React from "react";
import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart(); // Now removeFromCart exists

  const totalPrice = cart.reduce((total, item) => total + item.currentPrice, 0); // Calculate total

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="border p-4 rounded-lg shadow-md flex items-center justify-between">
                {/* Product Image */}
                <img
                  src={`http://localhost:8000/${item.image}`}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />

                {/* Product Details */}
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.artist}</p>
                  <p className="text-red-600 font-bold">₹{item.currentPrice}</p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-6 h-6" />
                </button>
              </li>
            ))}
          </ul>

          {/* Total Price Section */}
          <div className="mt-6 text-right">
            <p className="text-xl font-semibold">Total: ₹{totalPrice}</p>
            <button className="mt-3 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
