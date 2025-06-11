import React from 'react';
import banner from '../assets/banners/about.jpg';
import Header from '../components/common/Header';
import { 
  Users, 
  Award, 
  Globe, 
  TrendingUp, 
  BookOpen, 
  Clock, 
  Headphones,
  Target,
  Lightbulb,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Quote
} from 'lucide-react';

export default function About() {
  const stats = [
    { 
      label: "Active Students", 
      value: "50,000+", 
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    { 
      label: "Course Completion Rate", 
      value: "94%", 
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    { 
      label: "Expert Instructors", 
      value: "200+", 
      icon: Award,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    { 
      label: "Countries Reached", 
      value: "150+", 
      icon: Globe,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  const keyFigures = [
    {
      name: "Mr. B.M. Sharma",
      role: "Founder & Director",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      words: "Our vision is to make technical education accessible and practical for every learner. At BMS Academy, we build skills that empower careers.",
      expertise: ["Business Strategy", "IT Leadership", "Educational Innovation"]
    },
    {
      name: "Mrs. Rekha Sharma",
      role: "Training Head",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
      words: "We combine industry knowledge with modern teaching methods to prepare students for the real world. Your success is our commitment.",
      expertise: ["Curriculum Design", "Training Excellence", "Student Success"]
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience and proven teaching expertise.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Study at your own pace with our flexible course schedules and accessible online platform.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Headphones,
      title: "Career Support",
      description: "Get guidance and support to help you transition into your dream career or advance in your current role.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering the highest quality education and training experiences",
      color: "text-red-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing new technologies and modern teaching methodologies",
      color: "text-yellow-600"
    },
    {
      icon: Heart,
      title: "Inclusivity",
      description: "Making quality education accessible to learners from all backgrounds",
      color: "text-pink-600"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive and collaborative learning environment",
      color: "text-indigo-600"
    }
  ];

  const partnerships = [
    "Tally Education Pvt. Ltd.",
    "RKCL (RS-CIT & RS-CFA)",
    "Certiport Testing Center",
    "Microsoft Authorized",
    "Autodesk Partner",
    "IC3 Certification"
  ];

  const courses = [
    "Accounting with GST",
    "MS Office Suite",
    "Digital Marketing",
    "Graphic Designing",
    "Hardware Networking",
    "Web Development",
    "Programming Languages",
    "Software Development"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Header 
        image={banner}
        heading="About BMS Academy"
        subheading="Empowering learners with real-world skills and quality training"
      />

      <div className="max-w-7xl mx-auto px-4">

        {/* Introduction Section */}
        <div className="py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We introduce ourselves as <strong className="text-teal-600">BMS ACADEMY</strong>, which commenced operations in 2022 with a primary focus on IT software training. BMS Academy is a brand of <em>M/s BMS IT Training & Services, Jaipur</em>.
                </p>
                <p>
                  We are an authorized partner of leading organizations including Tally Education Pvt. Ltd., RKCL for RS-CIT & RS-CFA, and Certiport as an authorized testing center for Microsoft, Autodesk, IC3, and more.
                </p>
                <p>
                  Our faculty are seasoned professionals with deep expertise, supported by a competent team committed to excellence. We aim to build comprehensive technical support facilities for the industry through skilled manpower.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Our Partnerships
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {partnerships.map((partner, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Course Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  {courses.map((course, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      <span className="text-sm">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16  my-8">
          <div className="px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                  alt="Learning environment"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -top-4 -right-4 bg-teal-600 text-white p-4 rounded-lg shadow-lg">
                  <Target className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  At BMS Academy, we believe that quality education should be accessible to everyone. Our mission
                  is to provide world-class learning experiences that empower individuals to achieve their
                  full potential and succeed in their chosen careers.
                </p>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Through innovative teaching methods, industry-expert instructors, and a supportive learning
                  community, we're transforming how people learn and grow professionally.
                </p>
                <div className="flex items-center gap-4 p-4 bg-teal-50 rounded-lg">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Interactive & Practical Learning</div>
                    <div className="text-sm text-gray-600">Project-based approach with real-world applications</div>
                  </div>
                </div>
              </div>
            </div>
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


        {/* Features Section */}
        <div className="py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose BMS Academy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className={`${feature.bgColor} p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                  <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-md`}>
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>


        {/* Key Figures Section */}
        <div className="py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {keyFigures.map((person, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-full">
                    <Quote className="w-6 h-6 text-teal-600" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{person.name}</h3>
                  <p className="text-teal-600 font-semibold mb-4 text-lg">{person.role}</p>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">"{person.words}"</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Areas of Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {person.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-teal-600 rounded-lg p-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            Join our community of learners and start your journey towards success today.
          </p>
          <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors">
            Browse Courses
          </button>
        </div>
      </div>
    </div>
  );
}