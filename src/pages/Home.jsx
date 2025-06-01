import HeroSection from "./home/HeroSection";
import PopularCourses from "./home/PopularCourses";
import FoundationalSkillsSection from "./home/Certificates";
import CoachingTestimonials from "./home/Testimonials";
import HeroSection2 from "./home/HeroSection2";

export default function Home() {
  return (
    <>
    <HeroSection />
      {/* <HeroSection2 /> */}
      <PopularCourses />
      <FoundationalSkillsSection />
      <CoachingTestimonials />
    </>
  );
}