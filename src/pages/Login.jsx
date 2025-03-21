import React from "react";
import bg2 from "../assets/bg2.png"; // Ensure the image is in the correct path

const Login = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      {/* Login Box */}
      <div className="bg-[rgba(16,4,37,1)] bg-opacity-80 p-10 rounded-2xl shadow-2xl w-96 ">
        <h2 className="text-3xl font-extrabold text-center mb-6">Welcome Back!</h2>
        <p className="text-gray-400 text-1xl text-center mb-4 animate-pulse">Login to continue</p>

        {/* Input Fields */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Login Button */}
          <button className="w-full bg-blue-500 p-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </div>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-600" />
          <span className="px-3 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3 gap-10 grid grid-cols-2">
          <button className="w-32 h-12 flex items-center justify-center bg-red-500 p-3 rounded-lg text-1xl font-semibold hover:bg-red-600 transition duration-300">
            <i className="fab fa-google mr-2"></i> Sign in with G+
          </button>

          <button className="w-32 relative bottom-3  h-12 flex items-center justify-center bg-gray-700 p-3 rounded-lg text-1xl font-semibold hover:bg-gray-800 transition duration-300">
            <i className="fab fa-github mr-2"></i> Sign in with Git
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-gray-400 text-center mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
