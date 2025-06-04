import React from 'react';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';

const Activities = () => {
  const upcomingEvents = [
    {
      title: "Annual Tech Symposium",
      date: "December 15, 2024",
      location: "Main Auditorium",
      time: "9:00 AM - 5:00 PM",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
      description: "Join us for a day of technology talks, workshops, and networking opportunities."
    },
    {
      title: "Career Development Workshop",
      date: "December 20, 2024",
      location: "Training Center",
      time: "2:00 PM - 4:00 PM",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      description: "Learn essential skills for career growth and professional development."
    }
  ];

  const pastEvents = [
    {
      title: "Coding Competition",
      date: "November 25, 2024",
      location: "Computer Lab",
      participants: 150,
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
    },
    {
      title: "Industry Expert Talk",
      date: "November 15, 2024",
      location: "Conference Hall",
      participants: 200,
      image: "https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Activities & Events</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Participate in our engaging activities and events designed to enhance your learning experience
        </p>
      </div>

      {/* Upcoming Events */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Past Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {pastEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{event.participants} Participants</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition-colors">
                  View Gallery
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Activities;