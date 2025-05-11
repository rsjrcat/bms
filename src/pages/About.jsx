import React from 'react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Onlearn</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering learners worldwide with quality education and practical skills for success
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            At Onlearn, we believe that quality education should be accessible to everyone. Our mission
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
    </div>
  );
}