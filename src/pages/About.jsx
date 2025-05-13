import React from 'react';

export default function About() {
  const stats = [
    { label: "Active Students", value: "50,000+" },
    { label: "Course Completion Rate", value: "94%" },
    { label: "Expert Instructors", value: "200+" },
    { label: "Countries Reached", value: "150+" }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
      bio: "20+ years experience in education technology"
    },
    {
      name: "Michael Chen",
      role: "Head of Education",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      bio: "Former Stanford Professor"
    },
    {
      name: "Emily Rodriguez",
      role: "Chief Technology Officer",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
      bio: "15+ years in EdTech development"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
<<<<<<< HEAD
      <div className="mt-8 text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About BMS Academey</h1>
=======
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Onlearn</h1>
>>>>>>> 8d86a8a88b0a92ea228b71aa30fde1d2de30bad6
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering learners worldwide with quality education and practical skills for success
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
<<<<<<< HEAD
            At BMS Academey, we believe that quality education should be accessible to everyone. Our mission
=======
            At Onlearn, we believe that quality education should be accessible to everyone. Our mission
>>>>>>> 8d86a8a88b0a92ea228b71aa30fde1d2de30bad6
            is to provide world-class learning experiences that empower individuals to achieve their
            full potential and succeed in their chosen careers.
          </p>
          <p className="text-gray-600">
            Through innovative teaching methods, industry-expert instructors, and a supportive learning
            community, we're transforming how people learn and grow professionally.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt="Team collaboration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-teal-50 rounded-lg p-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Instructors</h3>
          <p className="text-gray-600">
            Learn from industry professionals with years of real-world experience and proven teaching expertise.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Learning</h3>
          <p className="text-gray-600">
            Study at your own pace with our flexible course schedules and accessible online platform.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Career Support</h3>
          <p className="text-gray-600">
            Get guidance and support to help you transition into your dream career or advance in your current role.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-teal-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600">Committed to delivering the highest quality education</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">Embracing new technologies and teaching methods</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Inclusivity</h3>
            <p className="text-gray-600">Making education accessible to all</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600">Building a supportive learning environment</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-teal-600 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Learning?</h2>
        <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
          Join our community of learners and start your journey towards success today.
        </p>
        <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors">
          Browse Courses
        </button>
      </div>
    </div>
  );
}