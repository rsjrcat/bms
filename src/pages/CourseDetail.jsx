import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, DollarSign, Award, CheckCircle, Star, Calendar, BookOpen, Target, Trophy } from 'lucide-react';


const CourseDetailPage = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const { courseId } = useParams();
    const [courseData, setCourseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        setError(null);


        fetch(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/courses/${courseId}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch course data: ${res.statusText}`);
                }
                return res.json();
            })
            .then(data => {
                setCourseData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [courseId]);


    if (loading) {
        return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;
    }


    if (error) {
        return <div className="min-h-screen bg-gray-50 flex items-center justify-center text-red-600">
            Error: {error}
        </div>;
    }


    if (!courseData) {
        return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            Course not found
        </div>;
    }


    const tabs = [
        { id: 'overview', label: 'Overview', icon: BookOpen },
        { id: 'syllabus', label: 'Syllabus', icon: Target },
        { id: 'certificate', label: 'Certificate', icon: Award }
    ];


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner Section */}
            <div className="relative h-96 overflow-hidden">
                <img
                    src={courseData.banner}
                    alt="Course Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>


                <div className="absolute inset-0 flex items-center">
                    <div className="container max-w-7xl mx-auto px-6">
                        <div className="max-w-4xl text-white">
                            <h1 className="text-5xl font-bold mb-4">{courseData.title}</h1>
                            <p className="text-xl mb-6 opacity-90">{courseData.subtitle}</p>
                            <div className="flex items-center space-x-6 text-sm">
                                <div className="flex items-center">
                                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                                    <span>{courseData.rating} ({courseData.reviews} reviews)</span>
                                </div>
                                <div className="flex items-center">
                                    <Users className="h-5 w-5 mr-1" />
                                    <span>
                                        {typeof courseData.totalStudents === 'number'
                                            ? courseData.totalStudents.toLocaleString()
                                            : 'N/A'} students
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="h-5 w-5 mr-1" />
                                    <span>{courseData.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Navigation Tabs */}
                        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center px-4 py-2 rounded-md transition-all ${activeTab === tab.id
                                            ? 'bg-teal-700 hover:bg-green-700 text-white shadow-md'
                                            : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        <Icon className="h-4 w-4 mr-2" />
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>


                        {/* Tab Content */}
                        {activeTab === 'overview' && (
                            <div className="space-y-8">
                                {/* Course Description */}
                                <div className="bg-white rounded-lg p-6 shadow-sm">
                                    <h2 className="text-2xl font-bold mb-4">Course Description</h2>
                                    <p className="text-gray-700 leading-relaxed">{courseData.description}</p>
                                </div>


                                {/* Eligibility */}
                                <div className="bg-white rounded-lg p-6 shadow-sm">
                                    <h2 className="text-2xl font-bold mb-4">Eligibility Requirements</h2>
                                    <ul className="space-y-2">
                                        {courseData.eligibility.map((req, index) => (
                                            <li key={index} className="flex items-start">
                                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>


                                {/* Skills */}
                                <div className="bg-white rounded-lg p-6 shadow-sm">
                                    <h2 className="text-2xl font-bold mb-4">Skills You Will Learn</h2>
                                    <ul className="space-y-2">
                                        {courseData.skills.map((req, index) => (
                                            <li key={index} className="flex items-start">
                                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>


                                {/* How it Helps */}
                                <div className="bg-white rounded-lg p-6 shadow-sm">
                                    <h2 className="text-2xl font-bold mb-4">How This Course Helps You</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {courseData.benefits.map((benefit, index) => (
                                            <div key={index} className="flex items-start">
                                                <Target className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}


                        {activeTab === 'syllabus' && (
                            <div className="bg-white rounded-lg p-6 shadow-sm">
                                <h2 className="text-2xl font-bold mb-6">Course Syllabus</h2>
                                <div className="space-y-6">
                                    {courseData.syllabus.map((module, index) => (
                                        <div key={index} className="border-l-4 border-blue-500 pl-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-lg font-semibold text-gray-800">{module.module}</h3>
                                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                                    {module.duration}
                                                </span>
                                            </div>
                                            <ul className="space-y-1">
                                                {module.topics.map((topic, topicIndex) => (
                                                    <li key={topicIndex} className="text-gray-600 flex items-center">
                                                        <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                                                        {topic}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}


                        {activeTab === 'certificate' && (
                            <div className="space-y-6">
                                <div className="bg-white rounded-lg p-6 shadow-sm">
                                    <h2 className="text-2xl font-bold mb-4">Certificate of Completion</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <img
                                                src={courseData.certificate.image}
                                                alt="Certificate Sample"
                                                className="w-full rounded-lg shadow-md"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-4">Certification Criteria</h3>
                                            <ul className="space-y-3">
                                                {courseData.certificate.criteria.map((criteria, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <Trophy className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                                                        <span className="text-gray-700">{criteria}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>


                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-6 space-y-6">
                            {/* Pricing Card */}
                            <div className="bg-green-50 rounded-lg p-6 shadow-sm border">
                                <div className="text-center mb-6">
                                    <div className="flex items-center justify-center space-x-2 mb-2">
                                        <span className="text-3xl font-bold text-green-600">
                                            {courseData.fees.currency}{courseData.fees.discounted}
                                        </span>
                                        <span className="text-lg text-gray-500 line-through">
                                            {courseData.fees.currency}{courseData.fees.original}
                                        </span>
                                    </div>
                                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                                        33% OFF Limited Time
                                    </span>
                                </div>


                                <button className="w-full flex items-center justify-center gap-2 bg-teal-700 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition mb-4"
                                >
                                    Enroll Now
                                </button>


                                <div className="space-y-3 text-sm text-gray-600">
                                    <div className="flex items-center">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        <span>Starts: Next Monday</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="h-4 w-4 mr-2" />
                                        <span>Duration: {courseData.duration}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="h-4 w-4 mr-2" />
                                        <span>
                                            {typeof courseData.totalStudents === 'number'
                                                ? courseData.totalStudents.toLocaleString()
                                                : 'N/A'} enrolled
                                        </span>
                                    </div>
                                </div>
                            </div>


                            {/* Course Features */}
                            <div className="bg-green-50 rounded-lg p-6 shadow-sm">
                                <h3 className="text-lg font-semibold mb-4">What's Included</h3>
                                <ul className="space-y-3">
                                    {courseData.features.map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>


                            {/* Quick Actions */}
                            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                                <h3 className="text-md font-semibold text-gray-800 mb-3">Quick Actions</h3>


                                <a
                                    href={courseData.preview}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-teal-700 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-4.586-2.65A1 1 0 009 9.368v5.264a1 1 0 001.166.984l4.586-2.65a1 1 0 000-1.768z" />
                                    </svg>
                                    Preview Course
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CourseDetailPage;