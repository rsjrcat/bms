import { Star } from "lucide-react";

export default function CoachingTestimonials() {
  const testimonials = [
    {
      text: "The coaching program transformed my daughter's confidence. She's now excelling in both academics and extracurriculars.",
      name: "Sarah Williams",
      role: "Parent",
      avatar: "/api/placeholder/48/48",
      rating: 4.9
    },
    {
      text: "Coach Michael's personalized approach helped me improve my technique and mental game. I've seen incredible progress in just 3 months.",
      name: "Jason Parker",
      role: "Student Athlete",
      avatar: "/api/placeholder/48/48",
      rating: 4.9
    },
    {
      text: "I've been through multiple coaching programs before, but this one stands out for its hands-on approach and supportive community.",
      name: "Michelle Rodriguez",
      role: "Adult Learner",
      avatar: "/api/placeholder/48/48",
      rating: 4.9
    },
    {
      text: "The coaches created a structured plan that worked with our busy family schedule. My son's grades improved dramatically.",
      name: "Robert Chen",
      role: "Parent",
      avatar: "/api/placeholder/48/48",
      rating: 4.9
    },
    {
      text: "The coaching team went above and beyond to accommodate my learning needs. They truly care about each student's success.",
      name: "Aisha Johnson",
      role: "High School Student",
      avatar: "/api/placeholder/48/48",
      rating: 4.9
    },
    {
      text: "This coaching program is simply the best investment we've made in our child's education and personal development.",
      name: "David Thompson",
      role: "Parent",
      avatar: "/api/placeholder/48/48",
      rating: 4.9
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-16">
        What our clients say about <span className="text-purple-600">Peak Coaching</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-gray-50 border border-gray-300 rounded-lg p-6 flex flex-col justify-between h-full transform transition-all duration-300 hover:shadow-xl hover:border-blue-500 hover:bg-blue-50"
          >
            <p className="text-gray-600 mb-8">{testimonial.text}</p>
            
            <div className="border-t border-gray-200 pt-4 mt-auto flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 text-purple-600 font-medium">{testimonial.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
