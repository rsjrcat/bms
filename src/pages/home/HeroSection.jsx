// HeroSection.jsx
import { useEffect, useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1581090700227-1e8e6f1a1a19?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&w=1500&q=80'
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
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 transition-opacity duration-1000">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              current === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Gradient Overlay with Text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10 flex items-center px-8 md:px-16">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Achieve Academic Excellence
          </h1>
          <p className="text-lg md:text-xl">
            Enroll in our top-rated coaching for JEE, NEET, and Board exams. Personalized guidance, expert mentors, and real results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
