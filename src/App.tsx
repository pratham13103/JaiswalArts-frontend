import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/LandingPage/Hero";
import Products from "./pages/LandingPage/Products";
import Cart from "./pages/Cart"; // ✅ Import Cart component
import CustomOrder from "./pages/CustomOrders"; // ✅ Import Custom Order component
import About from "./pages/About"; // Import About page
import Contact from "./pages/Contact"; // Import Contact page
import Login from "./pages/Login"; // Import Contact page
import Register from "./pages/Register"; // Import Register page
import TermsAndConditions from "./pages/Legal/TermsAndConditions";
import RefundPolicy from "./pages/Legal/RefundPolicy";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import ShippingPolicy from "./pages/Legal/ShippingPolicy";
import { CartProvider } from "./context/CartContext"; // ✅ Import Cart Context

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} /> {/* Add About Route */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} /> {/* Add Contact Route */}
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} /> 
              <Route path="/custom-orders" element={<CustomOrder />} /> {/* ✅ Add Custom Order Route */}
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
