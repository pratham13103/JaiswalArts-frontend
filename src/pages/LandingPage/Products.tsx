import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  image_url: string;
  name: string;
  artist: string;
  description: string;
  original_price: number;
  current_price: number;
  category: string;
}

const categories = ["All", "Mandala Art", "Warli Art", "Sketches", "Paintings"];

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:8000/products/")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch products");
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="px-5 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Artworks</h2>

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

      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500">No products found.</p>
          ) : (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="p-4 border rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition-transform"
                whileHover={{ scale: 1.05 }}
              >
                {/* Wrap image and title with Link */}
                <Link to={`/products/${product.id}`}>
                  <img
                    src={`http://localhost:8000/${product.image_url}`}
                    alt={product.name}
                    className="w-full h-72 object-contain rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                </Link>

                <p className="text-gray-500">{product.artist}</p>
                <p className="text-sm mt-2">{product.description}</p>
                <p className="mt-2">
                  <span className="line-through text-gray-500">
                    ₹{product.original_price}
                  </span>{" "}
                  <span className="text-red-600 font-bold">
                    ₹{product.current_price}
                  </span>
                </p>
                <button
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      artist: product.artist,
                      description: product.description,
                      image: product.image_url,
                      category: product.category,
                      originalPrice: product.original_price,
                      currentPrice: product.current_price,
                    })
                  }
                  className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </motion.div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
