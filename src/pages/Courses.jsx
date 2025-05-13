import React, { useState } from 'react';
import { Search, Star, Users, Clock, BookOpen, Award } from 'lucide-react';

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
      description: "Learn web development from scratch with HTML, CSS, JavaScript, React, and Node.js",
      duration: "12 weeks",
      level: "Beginner"
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
      description: "Master the principles of UI/UX design and create stunning user interfaces",
      duration: "8 weeks",
      level: "Intermediate"
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
      description: "Learn effective digital marketing strategies for business growth",
      duration: "6 weeks",
      level: "Advanced"
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
      description: "Essential business management skills for entrepreneurs and managers",
      duration: "10 weeks",
      level: "Beginner"
    }
  ];

  const stats = [
    { icon: BookOpen, label: "Total Courses", value: "500+" },
    { icon: Users, label: "Active Students", value: "50,000+" },
    { icon: Star, label: "5-Star Reviews", value: "25,000+" },
    { icon: Award, label: "Certified Instructors", value: "200+" }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
<<<<<<< HEAD
      <div className="mt-8 text-center mb-12">
=======
      <div className="text-center mb-12">
>>>>>>> 8d86a8a88b0a92ea228b71aa30fde1d2de30bad6
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our wide range of courses designed to help you achieve your goals
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <IconComponent className="w-8 h-8 text-teal-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Search and Filter Section */}
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

      {/* Course Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-teal-600">{course.category}</span>
                <span className="text-sm text-gray-500">{course.level}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-500">{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm text-gray-600">{course.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-500">{course.students} students</span>
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

      {/* CTA Section */}
      <div className="bg-teal-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Contact our team to learn more about our courses or request a custom training program for your organization.
        </p>
        <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
}