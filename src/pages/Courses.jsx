import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' },
    { id: 'marketing', name: 'Marketing' },
  ];

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      category: "development",
      instructor: "John Smith",
      rating: 4.8,
      students: 12345,
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      price: 99.99,
      description: "Learn web development from scratch with HTML, CSS, JavaScript, React, and Node.js"
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      category: "design",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 8765,
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      price: 89.99,
      description: "Master the principles of UI/UX design and create stunning user interfaces"
    },
    {
      id: 3,
      title: "Digital Marketing Strategy",
      category: "marketing",
      instructor: "Mike Wilson",
      rating: 4.7,
      students: 6543,
      image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg",
      price: 79.99,
      description: "Learn effective digital marketing strategies for business growth"
    },
    {
      id: 4,
      title: "Business Management Fundamentals",
      category: "business",
      instructor: "Emily Brown",
      rating: 4.6,
      students: 4321,
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      price: 69.99,
      description: "Essential business management skills for entrepreneurs and managers"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of courses designed to help you achieve your goals
        </p>
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-md ${
                  selectedCategory === category.id
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-gray-600">{course.rating}</span>
                  <span className="ml-2 text-gray-500">({course.students} students)</span>
                </div>
                <span className="text-teal-600 font-bold">${course.price}</span>
              </div>
              <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}