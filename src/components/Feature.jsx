import React from "react";

const Feature = ({ image, title, desc, tag }) => {
  return (
    <div className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg shadow-lg">
      <img src={image} alt={title} className="w-16 h-16 object-cover rounded-md" />
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
      <span className="ml-auto bg-purple-500 px-4 py-2 text-sm rounded-md">{tag}</span>
    </div>
  );
};

export default Feature;
