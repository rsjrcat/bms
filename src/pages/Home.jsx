import HeroSection from "./home/HeroSection";
import PopularCourses from "./home/PopularCourses";
import FoundationalSkillsSection from "./home/Certificates";
import CoachingTestimonials from "./home/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularCourses />
      <FoundationalSkillsSection />
      <CoachingTestimonials />
    </>
  );
}