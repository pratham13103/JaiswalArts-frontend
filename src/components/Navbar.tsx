import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar: React.FC = () => {
  const { cart } = useCart();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchFocused, setSearchFocused] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Marquee (Always Visible) */}
      <div className="bg-red-600 text-white py-2 text-lg font-semibold overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          <span className="mx-16">🎨 Get 20% OFF on your first order!</span>
          <span className="mx-16">🖌️ New Arrivals Just Dropped!</span>
          <span className="mx-16">🚚 Free Shipping on orders above ₹5000</span>
          <span className="mx-16">🎁 Custom Art Commissions Available – Contact us now!</span>
    
          {/* Duplicate for Seamless Looping */}
          <span className="mx-16">🎨 Get 20% OFF on your first order!</span>
          <span className="mx-16">🖌️ New Arrivals Just Dropped!</span>
          <span className="mx-16">🚚 Free Shipping on orders above ₹5000</span>
          <span className="mx-16">🎁 Custom Art Commissions Available – Contact us now!</span>
        </div>
      </div>

      {/* Navbar (Always White) */}
      <nav className="w-full flex items-center justify-between px-8 md:px-20 py-4 bg-white shadow-md">
        {/* Left: Website Title */}
        <h1 className="text-4xl font-serif font-bold bg-gradient-to-r from-red-700 to-orange-500 text-transparent bg-clip-text drop-shadow-md">
          Jaiswal Arts
        </h1>

        {/* Center: Search Bar */}
        <form
          className={`hidden md:flex items-center rounded-lg px-4 py-2 w-[64rem] shadow-md border ${
            isSearchFocused ? "bg-white border-red-500" : "bg-transparent border-transparent"
          } transition-all duration-300`}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Search artwork..."
            className="outline-none text-black px-3 py-2 w-full text-lg placeholder:text-gray-500 bg-transparent focus:bg-white transition-all duration-300"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
          <button type="submit">
            <Search className="h-7 w-7 text-red-600" />
          </button>
        </form>

        {/* Right: Links, Profile & Cart Icon */}
        <div className="flex items-center space-x-6 relative">
          <Link to="/" className="text-lg text-gray-800 hover:text-red-600">
            Home
          </Link>
          <Link to="/about" className="text-lg text-gray-800 hover:text-red-600">
            About
          </Link>
          <Link to="/contact" className="text-lg text-gray-800 hover:text-red-600">
            Contact
          </Link>

          {/* Profile Icon */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="focus:outline-none"
            >
              <User className="h-8 w-8 text-gray-800 hover:text-red-600" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Login
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => alert("Logged Out!")}
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-8 w-8 text-gray-800 hover:text-red-600" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
