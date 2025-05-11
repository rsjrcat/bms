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
            {/* Course Image */}
            <div className={`${course.bgColor} p-6 h-48 flex items-center justify-center`}>
              {course.id === 1 && (
                <div className="relative h-32 w-full">
                  <div className="absolute transform -rotate-12 left-6">
                    <div className="w-12 h-12 bg-white rounded-md shadow-md flex items-center justify-center">
                      <span className="text-gray-700 text-lg">📊</span>
                    </div>
                  </div>
                  <div className="absolute right-12 top-0">
                    <div className="w-12 h-12 bg-white rounded-md shadow-md flex items-center justify-center">
                      <span className="text-gray-700 text-lg">📄</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <div className="w-20 h-20 rounded-full bg-white shadow-lg overflow-hidden">
                      <div className="h-full w-full flex items-end justify-center">
                        <div className="w-16 h-10 bg-black rounded-t-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-10">
                    <div className="w-12 h-12 bg-green-400 rounded-full shadow-md flex items-center justify-center">
                      <span className="text-white text-lg">✓</span>
                    </div>
                  </div>
                  <div className="absolute bottom-1 right-1">
                    <div className="w-10 h-10 bg-yellow-300 rounded-full shadow-md"></div>
                  </div>
                </div>
              )}
              
              {course.id === 2 && (
                <div className="h-32 w-full relative">
                  <div className="absolute left-0 top-0">
                    <div className="w-12 h-12 bg-red-500 rounded-md flex items-center justify-center">
                      <span className="text-white">🔒</span>
                    </div>
                  </div>
                  <div className="absolute left-1/4 bottom-0">
                    <div className="w-16 h-6 bg-orange-300 rounded-full"></div>
                  </div>
                  <div className="absolute right-1/4 h-full flex items-center">
                    <div className="flex">
                      <div className="w-14 h-24 bg-white rounded-md shadow-md flex flex-col items-center justify-center">
                        <div className="w-10 h-3 bg-amber-400 mb-1"></div>
                        <div className="w-10 h-3 bg-blue-400"></div>
                      </div>
                      <div className="flex items-center h-full">
                        <div className="h-16 w-10 flex flex-col space-y-1 ml-2">
                          <div className="h-3 w-full bg-green-500 rounded-full"></div>
                          <div className="h-3 w-full bg-blue-500 rounded-full"></div>
                          <div className="h-3 w-full bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-0 top-1/3">
                    <div className="h-16 w-24 bg-white rounded-md shadow-md flex items-center justify-center">
                      <div className="w-16 h-8">
                        <div className="w-full h-2 bg-gray-400 rounded-full mb-1"></div>
                        <div className="w-4/5 h-2 bg-gray-400 rounded-full mb-1"></div>
                        <div className="w-3/5 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="flex">
                      <div className="w-8 h-16 bg-blue-50 border-2 border-blue-200 rounded-l-md flex items-center justify-center">
                        <span className="text-blue-500 text-sm">👩</span>
                      </div>
                      <div className="w-8 h-16 bg-blue-50 border-2 border-blue-200 rounded-r-md flex items-center justify-center">
                        <span className="text-blue-500 text-sm">👨</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {course.id === 3 && (
                <div className="h-32 w-32 bg-yellow-300 rounded-full flex items-center justify-center overflow-hidden shadow-md">
                  <div className="relative w-full h-full">
                    <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-black rounded-full"></div>
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-black rounded-full"></div>
                    <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-black rounded-t-full"></div>
                  </div>
                </div>
              )}
              
              {course.id === 4 && (
                <div className="h-32 w-32 relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-24 h-24 bg-blue-800 rounded-t-full overflow-hidden">
                      <div className="h-full w-full relative">
                        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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