import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import banner from '../assets/banners/contact.jpg'
import Header from '../components/common/Header';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "Simply browse our courses, select the one you're interested in, and click the 'Enroll Now' button. Follow the checkout process to complete your enrollment."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee for all our courses if you're not completely satisfied with your purchase."
    },
    {
      question: "How do I access my courses?",
      answer: "After enrollment, you can access your courses through your student dashboard. Simply log in to your account to start learning."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
        <Header 
                image={banner}
                heading="Contact Us"
                subheading="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
              />
    <div className="max-w-7xl mx-auto px-4 py-16">
      

      {/* Contact Methods */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <MapPin className="w-8 h-8 text-teal-600 mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-600">1234 Education Ave, Learning City, ED 12345</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Phone className="w-8 h-8 text-teal-600 mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600">(123) 456-7890</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Mail className="w-8 h-8 text-teal-600 mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600">info@BMS Academey.com</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Clock className="w-8 h-8 text-teal-600 mx-auto mb-4" />
          <h3 className="font-semibold mb-2">Working Hours</h3>
          <p className="text-gray-600">Mon-Fri: 9AM-6PM</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <MessageSquare className="w-5 h-5 text-teal-600 mr-2" />
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
        <div className="bg-gray-200 h-96 rounded-lg">
          {/* Add your map component here */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Map Component Placeholder
          </div>
        </div>
      </div>
    </div>
    </>
  );
}