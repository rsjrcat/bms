// HeroSection.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const images = [
  "https://res.cloudinary.com/dsol90tiu/image/upload/v1748724705/image_5_ydnihy.jpg",
  "https://res.cloudinary.com/dsol90tiu/image/upload/v1748724705/image_4_mjsruo.jpg",
  "https://res.cloudinary.com/dsol90tiu/image/upload/v1748724705/image_5_ydnihy.jpg"
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[4/5.5] sm:aspect-[4/2.7] lg:aspect-[4/1.5] overflow-hidden">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Text Content */}
      <div className="absolute z-20 inset-0 flex flex-col items-center justify-center px-4 text-center text-white max-w-4xl mx-auto">
        
        <div className="text-orange-500 font-medium mb-3 flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg">
          <span>🚀</span>
          <span>Empower Your Learning Journey Today</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Unlock Your Potential
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl mt-2 text-gray-300 font-semibold">
          with Expert-Led Courses
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 mt-4 px-2 sm:px-8">
          Hands-on training and certifications to help you get the most from Geeks Learning.
        </p>

        <ul className="mt-6 text-white flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm sm:text-base items-center sm:justify-center">
          <li>✅ Expert Instructors</li>
          <li>✅ Flexible Learning</li>
          <li>✅ Supportive Community</li>
        </ul>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded text-sm sm:text-base cursor-pointer">
      Contact Now
    </button>
  </Link>
  
  <Link to="/courses">
    <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded border text-sm sm:text-base cursor-pointer">
      Explore Courses
    </button>
  </Link>
        </div>
      </div>

      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 transition-all duration-1000">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              current === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
