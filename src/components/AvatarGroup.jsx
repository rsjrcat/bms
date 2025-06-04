// components/AvatarGroup.jsx
import React from 'react';

const profileImages = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/76.jpg',
  'https://randomuser.me/api/portraits/women/65.jpg',
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const AvatarGroup = () => {
  const shuffledImages = shuffleArray(profileImages);

  return (
    <div className="flex -space-x-2 mb-2">
      {shuffledImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Avatar ${index + 1}`}
          className="w-8 h-8 rounded-full border-2 border-white object-cover"
        />
      ))}
    </div>
  );
};

export default AvatarGroup;
