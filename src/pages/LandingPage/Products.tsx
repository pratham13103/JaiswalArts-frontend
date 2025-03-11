import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext"; // Import Cart Context

const categories = ["All", "Mandala Art", "Warli Art", "Sketches", "Paintings"];

const Products: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart(); // Use Cart Context

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

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
              src={product.image_url}
              alt={product.name}
              className="w-full h-72 object-contain rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-500">{product.artist}</p>
            <p className="text-sm mt-2">{product.description}</p>
            <p className="mt-2">
              <span className="line-through text-gray-500">
                ₹{product.original_price}
              </span>{" "}
              <span className="text-red-600 font-bold">₹{product.current_price}</span>
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
