import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../../assets/logo.png'; // Adjust the path as necessary
import extendlogo from '../../assets/extendlogo.png'; // Adjust the path as necessary
import { FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <a href="/" className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="h-10 w-10" />
                <img src={extendlogo} alt="Logo" className="h-10" />
                {/* <span className="ml-2 text-xl font-semibold text-teal-700">BMS Academy</span> */}
              </a>
            </div>
            <p className="text-sm mb-4">
              Empowering learners worldwide with quality education and practical skills for success.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/bmsittraining?rdid=HQ8yuRR80obgw9fh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1NVxH9T2j5%2F#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              {/* <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a> */}
              <a href="https://www.youtube.com/@bmsacademy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/courses" className="hover:text-white transition-colors">Our Courses</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/activities" className="hover:text-white transition-colors">Activity</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>1st Floor, Park Plaza</li>
              <li>BMS ACADEMY, Goner Rd</li>
              <li>Jaipur, Rajasthan 302031 </li>
              <li>Phone: 9660038052</li>
              <li>Email: info@BMS Academey.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} BMS Academey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;