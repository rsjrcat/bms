import Navbar from "./components/layout/Navbar";
import Newsletter from "./components/layout/Newsletter";
import Footer from "./components/layout/Footer";
import FoundationalSkillsSection from "./pages/home/Certificates";
import HeroSection from "./pages/home/HeroSection";
import PopularCourses from "./pages/home/PopularCourses";
import CoachingTestimonials from "./pages/home/Testimonials";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <HeroSection />
      <PopularCourses />
      <FoundationalSkillsSection />
      <CoachingTestimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}