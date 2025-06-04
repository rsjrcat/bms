import React, { useState } from 'react';
import coursesData from '../../data/courseData'; // Adjust this path accordingly
import { Link } from 'react-router-dom';
import AvatarGroup from '../../components/AvatarGroup';
import Modal from '../../components/Modal';
import EnrollmentForm from '../../components/EnrollmentForm';

const PopularCourses = () => {
  const allCourses = coursesData.flatMap(category =>
    category.courses.map(course => ({
      ...course,
      category: category.category
    }))
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  // Extract unique categories
  const categoryList = ['All Programmes', ...coursesData.map(c => c.category)];

  const [selectedCategory, setSelectedCategory] = useState('All Programmes');

  // Filter courses based on selected category
  const filteredCourses = selectedCategory === 'All Programmes'
    ? allCourses
    : allCourses.filter(course => course.category === selectedCategory);

  // Sort by popularity
  const popularCourses = filteredCourses.sort((a, b) => b.students - a.students).slice(0, 4);

  const renderAvatars = () => {
    const colors = ["bg-blue-500", "bg-purple-500", "bg-yellow-500", "bg-green-500"];
    return (
      <div className="flex -space-x-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs`}
          >
            {String.fromCharCode(65 + index)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Title */}
      <div className="text-center mb-8 relative">
        <h2 className="text-4xl font-bold text-orange-500">Popular Courses</h2>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-blue-400 rounded-full"></div>
      </div>

      {/* Dynamic Category Buttons */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categoryList.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors 
              ${selectedCategory === category
                ? 'bg-teal-700 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Popular Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularCourses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <Link to={`/courses/${course.courseCode}`} className="h-48 bg-gray-200">
              <img src={course.image} alt={course.courseName} className="w-full h-full object-cover" />
            </Link>

            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-4">
                <AvatarGroup />
                <div className="text-sm text-gray-500">+ {course.students} students</div>
              </div>

              <div className="text-sm text-gray-500 mb-1">{course.duration}</div>
              <Link to={`/courses/${course.courseCode}`} className="text-lg font-bold text-teal-700 mb-2 hover:underline">
                {course.courseName}
              </Link>

              <p className="text-xs text-gray-600 mb-4">{course.details}</p>

              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-end">
                  {course.fees && typeof course.fees.discounted === 'number' ? (
                    course.fees.original !== course.fees.discounted ? (
                      <div className="text-right">
                        <div className="text-sm text-gray-500 line-through">
                          {course.fees.currency} {course.fees.original?.toLocaleString()}
                        </div>
                        <div className="text-xl font-bold text-orange-500">
                          {course.fees.currency} {course.fees.discounted.toLocaleString()}
                        </div>
                      </div>
                    ) : (
                      <span className="text-xl font-bold text-orange-500">
                        {course.fees.currency} {course.fees.original?.toLocaleString()}
                      </span>
                    )
                  ) : (
                    <span className="text-sm text-gray-400 italic">Fee info unavailable</span>
                  )}


                </div>
                <button 
  onClick={() => {
    setSelectedCourseId(course.courseCode);
    setIsModalOpen(true);
  }}
  className="bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
>
  Enroll Now
</button>

              </div>
            </div>
          </div>
        ))}
      </div>
<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <EnrollmentForm courseId={selectedCourseId} onClose={() => setIsModalOpen(false)} />
</Modal>

    </div>
  );
};

export default PopularCourses;
