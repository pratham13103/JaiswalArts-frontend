import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-12 rounded-3xl shadow-2xl w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Login
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          If you have an account with us, please log in.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-xl text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 border rounded-lg outline-none text-lg focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-xl text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-3 border rounded-lg outline-none text-lg focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-4 rounded-full text-xl font-semibold hover:bg-red-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Additional Links */}
        <div className="text-center mt-6">
          <Link to="/register" className="text-lg text-red-600 hover:underline">
            Don’t have an account? Create an account
          </Link>
          <br />
          <Link
            to="/forgot-password"
            className="text-lg text-gray-600 hover:underline mt-3 inline-block"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
