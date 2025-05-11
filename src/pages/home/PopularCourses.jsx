import React from 'react';

const PopularCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Product Management Basic",
      dates: "1 - 28 July 2022",
      image: "/api/placeholder/320/240",
      bgColor: "bg-teal-500",
      instructor: "Sarah Johnson - Head of Product Customer Platform Gojek Indonesia",
      students: 40,
      currentPrice: 380,
      originalPrice: 500
    },
    {
      id: 2,
      title: "BM Data Science Professional Certificate",
      dates: "1 - 28 July 2022",
      image: "/api/placeholder/320/240",
      bgColor: "bg-amber-100",
      instructor: "Sarah Johnson - Head of Product Customer Platform Gojek Indonesia",
      students: 11,
      currentPrice: 678,
      originalPrice: 500
    },
    {
      id: 3,
      title: "The Science of Well-Being",
      dates: "1 - 28 July 2022",
      image: "/api/placeholder/320/240",
      bgColor: "bg-blue-400",
      instructor: "Sarah Johnson - Head of Product Customer Platform Gojek Indonesia",
      students: 234,
      currentPrice: 123,
      originalPrice: 500
    },
    {
      id: 4,
      title: "Python for Everybody Specialization",
      dates: "1 - 28 July 2022",
      image: "/api/placeholder/320/240",
      bgColor: "bg-teal-500",
      instructor: "Sarah Johnson - Head of Product Customer Platform Gojek Indonesia",
      students: 342,
      currentPrice: 567,
      originalPrice: 500
    }
  ];

  const categories = [
    "All Programme",
    "UI/UX Design",
    "Program Design",
    "Program Design",
    "Program Design",
    "Program Design"
  ];

  // Helper function to generate avatar placeholders
  const renderAvatars = () => {
    const colors = ["bg-blue-500", "bg-purple-500", "bg-yellow-500", "bg-green-500", "bg-red-500"];
    return (
      <div className="flex -space-x-2">
        {colors.map((color, index) => (
          <div key={index} className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs`}>
            {String.fromCharCode(65 + index)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Title with underline */}
      <div className="text-center mb-8 relative">
        <h2 className="text-4xl font-bold text-orange-500">Popular Courses</h2>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-blue-400 rounded-full"></div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors 
              ${index === 0 ? 'bg-teal-700 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            {/* Simplified Course Image */}
            <div className="h-48 bg-gray-200">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            </div>

            {/* Course Info */}
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-4">
                {renderAvatars()}
                <div className="text-sm text-gray-500">+ {course.students} students</div>
              </div>
              
              <div className="text-sm text-gray-500 mb-1">{course.dates}</div>
              <h3 className="text-lg font-bold text-teal-700 mb-2">{course.title}</h3>
              
              <p className="text-xs text-gray-600 mb-4">
                Product Management Masterclass, you will learn with<br />
                {course.instructor}
              </p>
              
              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-end">
                  <span className="text-xl font-bold text-orange-500">${course.currentPrice}</span>
                  <span className="text-sm text-gray-400 line-through ml-2">${course.originalPrice}</span>
                </div>
                <button className="bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
