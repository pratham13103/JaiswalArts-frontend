import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const categories = [
  "Mandala", "Warli", "Traditional", "Abstract", "Modern", "Landscape"
];

const Navbar: React.FC = () => {
  const { cart } = useCart();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]); // Filtered categories based on search
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter categories based on search query
    if (query) {
      const filtered = categories.filter((category) =>
        category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories([]);
    }
  };

  const handleCategoryClick = (category: string) => {
    setSearchQuery(category); // Set the full category name as search query
    setFilteredCategories([]); // Close the dropdown
    navigate(`/product-search?query=${category}`);  // Navigate to the search results
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission
    if (searchQuery) {
      navigate(`/product-search?query=${searchQuery}`);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Marquee (Always Visible) */}
      <div className="bg-red-600 text-white py-2 text-lg font-semibold overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
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
          className={`relative md:flex items-center rounded-lg px-4 py-2 w-[64rem] shadow-md border ${
            isSearchFocused ? "bg-white border-red-500" : "bg-transparent border-transparent"
          } transition-all duration-300`}
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            placeholder="Search artwork..."
            className="outline-none text-black px-3 py-2 w-full text-lg placeholder:text-gray-500 bg-transparent focus:bg-white transition-all duration-300"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            onChange={handleSearchChange} // Handle search input change
            value={searchQuery} // Controlled input
          />
          <button type="submit">
            <Search className="h-7 w-7 text-red-600" />
          </button>

          {/* Dropdown for Category Recommendations */}
          {isSearchFocused && searchQuery && filteredCategories.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white shadow-md rounded-lg p-2 z-10">
              {filteredCategories.slice(0, 5).map((category, index) => (
                <div
                  key={index}
                  className="p-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleCategoryClick(category)} // Auto-fill category into search and trigger search
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </form>

        {/* Right: Icons & Sidebar Toggle */}
        <div className="flex items-center space-x-6 relative">
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

          {/* Hamburger Icon (Opens Sidebar) */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-800 hover:text-red-600 focus:outline-none"
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 text-gray-800 hover:text-red-600 focus:outline-none"
        >
          <X className="h-8 w-8" />
        </button>

        {/* Sidebar Links */}
        <div className="mt-16 flex flex-col space-y-6 px-6">
          <Link
            to="/about"
            className="text-lg text-gray-800 hover:text-red-600"
            onClick={() => setSidebarOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-lg text-gray-800 hover:text-red-600"
            onClick={() => setSidebarOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/admin-login"
            className="text-lg text-gray-800 hover:text-red-600"
            onClick={() => setSidebarOpen(false)}
          >
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
