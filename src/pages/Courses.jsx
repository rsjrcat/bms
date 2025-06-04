import React, { useState } from 'react';
import { Search, Star, Users, Clock, BookOpen, Award } from 'lucide-react';
import Header from '../components/common/Header';
import coursesData from '../data/courseData';
import img1 from "../assets/banners/courses.png";
import { Link } from 'react-router-dom';

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Flatten all courses with category injected
  const allCourses = coursesData.flatMap(group =>
    group.courses.map(course => ({
      ...course,
      category: group.category
    }))
  );

  // Extract unique category buttons
  const categoryList = ['All', ...new Set(coursesData.map(group => group.category))];

  // Filter based on category + search
  const filteredCourses = allCourses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.courseName?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { icon: BookOpen, label: "Total Courses", value: "500+" },
    { icon: Users, label: "Active Students", value: "50,000+" },
    { icon: Star, label: "5-Star Reviews", value: "25,000+" },
    { icon: Award, label: "Certified Instructors", value: "200+" }
  ];

  return (
    <div>
      <Header 
        image={img1}
        heading="Our Courses"
        subheading="Explore our wide range of courses designed to help you achieve your goals"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
              <stat.icon className="w-8 h-8 text-teal-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search + Category Filter */}
        <div className="flex flex-col md:flex-row justify-between  gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>

          <div className="flex flex-wrap gap-2">
            {categoryList.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-md ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
  {filteredCourses.map((course, i) => (
    <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src={course.image}
        alt={course.courseName}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between mb-2 text-sm text-gray-600">
          <span className="font-medium text-teal-600">{course.category}</span>
          <span>{course.level || 'Beginner'}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.courseName}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {course.subtitle || 'No description available'}
        </p>
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {course.duration || 'N/A'}
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400" /> {course.rating || '4.0'}
          </span>
        </div>
        <div className="flex justify-between items-center mb-4 text-sm">
          <span className="flex items-center gap-1 text-gray-500">
            <Users className="w-4 h-4" /> {course.students || 0} students
          </span>
          <span className="text-teal-600 font-bold">
            ₹{course.fees?.discounted?.toLocaleString() || 'Free'}
          </span>
        </div>
        <div className="mt-auto">
          <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


        {/* CTA */}
        <div className="bg-teal-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact our team to learn more about our courses or request a custom training program for your organization.
          </p>
          <Link to="/contact">
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
