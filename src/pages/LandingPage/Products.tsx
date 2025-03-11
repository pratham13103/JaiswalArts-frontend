import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext"; // Import Cart Context

const products = [
  {
    id: 1,
    image: "/products/mandala1.jpeg",
    name: "Mandala Radiance",
    artist: "Aarav Mehta",
    description: "A detailed mandala art piece.",
    originalPrice: 5000,
    currentPrice: 3500,
    category: "Mandala Art",
  },
  {
    id: 2,
    image: "/products/mandala2.jpeg",
    name: "Tribal Tales",
    artist: "Priya Sharma",
    description: "A traditional mandala artwork.",
    originalPrice: 6000,
    currentPrice: 4200,
    category: "Mandala Art",
  },
  {
    id: 3,
    image: "/products/mandala3.jpeg",
    name: "Pencil Magic",
    artist: "Rahul Verma",
    description: "A stunning pencil mandala.",
    originalPrice: 7000,
    currentPrice: 4800,
    category: "Mandala Art",
  },
  {
    id: 4,
    image: "/products/painting1.jpeg",
    name: "Serene Landscape",
    artist: "Neha Kapoor",
    description: "A beautiful acrylic painting.",
    originalPrice: 8000,
    currentPrice: 5600,
    category: "Paintings",
  },
];

const categories = ["All", "Mandala Art", "Warli Art", "Sketches", "Paintings"];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart(); // Use Cart Context

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="px-5 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Artworks</h2>

      {/* Category Filters */}
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              selectedCategory === category
                ? "bg-red-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="p-4 border rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-contain rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-500">{product.artist}</p>
            <p className="text-sm mt-2">{product.description}</p>
            <p className="mt-2">
              <span className="line-through text-gray-500">
                ₹{product.originalPrice}
              </span>{" "}
              <span className="text-red-600 font-bold">₹{product.currentPrice}</span>
            </p>
            <button
              onClick={() => addToCart(product)} // Add to Cart Functionality
              className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
