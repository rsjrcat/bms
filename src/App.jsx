import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Newsletter from "./components/layout/Newsletter";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import CourseDetailPage from './pages/CourseDetail';
import CertificationVerificationPage from './pages/CertificationVerificationPage';

export default function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetailPage />} /> {/* Add this route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificate-verification" element={<CertificationVerificationPage />} />
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}