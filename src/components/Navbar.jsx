import React from "react";
import logo from "../assets/logo.png"; 

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-[rgba(16,4,37,1)] text-white">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-16" />
        <span className="text-xl font-bold text-blue-400">TECHNO CLUB</span>
      </div>
      <ul className="hidden md:flex space-x-6 mr-96">
        <li><a href="#" className="hover:text-blue-400">Home</a></li>
        <li><a href="#" className="hover:text-blue-400">About</a></li>
        <li><a href="#" className="hover:text-blue-400">Features</a></li>
        <li><a href="#" className="hover:text-blue-400">Contact</a></li>
      </ul>
      <div>
        <button className="border border-blue-400 px-4 py-2 rounded-md hover:bg-blue-400 hover:text-gray-900">Log In</button>
        <button className="bg-purple-500 px-4 py-2 rounded-md ml-2 hover:bg-purple-700">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
