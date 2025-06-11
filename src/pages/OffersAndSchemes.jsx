import React from 'react';
import { Tag, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Header from '../components/common/Header';
import banner from '../assets/banners/offers.png'; // Adjust the path as necessary

const OffersAndSchemes = () => {
  const currentOffers = [
    {
      title: "Early Bird Discount",
      discount: "25% OFF",
      validUntil: "December 31, 2024",
      description: "Register early for any course and get 25% off on the total course fee.",
      code: "EARLY25",
      conditions: [
        "Valid for new registrations only",
        "Cannot be combined with other offers",
        "Full payment required"
      ]
    },
    {
      title: "Group Enrollment Offer",
      discount: "30% OFF",
      validUntil: "January 15, 2025",
      description: "Enroll with a group of 3 or more and get 30% discount for each student.",
      code: "GROUP30",
      conditions: [
        "Minimum 3 students required",
        "Same course enrollment",
        "Valid for all courses"
      ]
    }
  ];

  const scholarships = [
    {
      title: "Merit Scholarship",
      benefit: "Up to 50% Fee Waiver",
      eligibility: [
        "Minimum 85% in previous academic year",
        "Clear entrance test",
        "Interview performance"
      ]
    },
    {
      title: "Women in Tech Scholarship",
      benefit: "Up to 40% Fee Waiver",
      eligibility: [
        "Female candidates",
        "For technology courses only",
        "Basic coding knowledge required"
      ]
    }
  ];

  return (<>
    <Header 
                  image={banner}
                  heading="Special Offers & Schemes"
                  subheading="Take advantage of our exclusive offers and scholarship programs to make quality education more accessible"
                />
    <div className="max-w-7xl mx-auto px-4 py-16">
      

      {/* Current Offers */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Current Offers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {currentOffers.map((offer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="bg-teal-50 p-6 border-b border-teal-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                    <div className="text-3xl font-bold text-teal-600">{offer.discount}</div>
                  </div>
                  <Tag className="w-8 h-8 text-teal-600" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="font-semibold mb-2">Use Code:</div>
                  <div className="bg-gray-100 p-2 rounded text-center font-mono text-lg">{offer.code}</div>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Valid until {offer.validUntil}</span>
                </div>
                <div>
                  <div className="font-semibold mb-2">Conditions:</div>
                  <ul className="space-y-2">
                    {offer.conditions.map((condition, i) => (
                      <li key={i} className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scholarships */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Scholarship Programs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {scholarships.map((scholarship, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="bg-blue-50 p-6 border-b border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{scholarship.title}</h3>
                <div className="text-2xl font-bold text-blue-600">{scholarship.benefit}</div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="font-semibold mb-2">Eligibility Criteria:</div>
                  <ul className="space-y-2">
                    {scholarship.eligibility.map((criteria, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Check Eligibility
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default OffersAndSchemes;