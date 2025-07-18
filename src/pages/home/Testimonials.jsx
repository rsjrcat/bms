import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { db } from "../../lib/supabase";

export default function CoachingTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const { data, error } = await db.getTestimonials();
        if (error) throw new Error(error.message);
        
        setTestimonials(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  if (loading) return <p className="text-center">Loading testimonials...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-16">
        What our clients say about{" "}
        <span className="text-purple-600">Peak Coaching</span>
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
