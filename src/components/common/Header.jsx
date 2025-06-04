import React from 'react';

export default function Header({ image, heading, subheading }) {
  return (
    <div className="relative w-full h-64 md:h-96  overflow-hidden shadow-md">
      {/* Banner Image */}
      <img
        src={image}
        alt={heading}
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-12 text-white">
        <h1 className="text-3xl md:text-5xl  text-teal-500 font-bold mb-6">{heading}</h1>
        <p className="text-lg text-center md:text-xl max-w-2xl">{subheading}</p>
      </div>
    </div>
  );
}
