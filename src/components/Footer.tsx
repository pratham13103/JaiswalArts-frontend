import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-300 text-black py-8 px-6 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-blue-600" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-blue-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-700" />
            </a>
          </div>
        </div>

        {/* Terms & Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Policies</h3>
          <ul className="space-y-2">
            <li><Link to="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:underline">Refund Policy</Link></li>
            <li><Link to="/shipping-policy" className="hover:underline">Shipping Policy</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2">
            <li><Link to="/custom-orders" className="hover:underline">Custom Art</Link></li>
            <li><Link to="/prints" className="hover:underline">Art Prints</Link></li>
            <li><Link to="/digital-art" className="hover:underline">Digital Art</Link></li>
          </ul>
        </div>

        {/* About & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-6 border-t border-gray-400 pt-4">
        © {new Date().getFullYear()} Jaiswal Arts. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
