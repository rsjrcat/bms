import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
<<<<<<< HEAD
              <img src="https://s3u.tmimgcdn.com/u37752224/40b6d70b252d68b7bf449eb2804a627c.gif" alt="BMS Academey Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-semibold text-white">BMS Academey</span>
=======
              <img src="https://s3u.tmimgcdn.com/u37752224/40b6d70b252d68b7bf449eb2804a627c.gif" alt="Onlearn Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-semibold text-white">onlearn</span>
>>>>>>> 8d86a8a88b0a92ea228b71aa30fde1d2de30bad6
            </div>
            <p className="text-sm mb-4">
              Empowering learners worldwide with quality education and practical skills for success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
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
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
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
              <li>1234 Education Ave</li>
              <li>Learning City, ED 12345</li>
              <li>Phone: (123) 456-7890</li>
<<<<<<< HEAD
              <li>Email: info@BMS Academey.com</li>
=======
              <li>Email: info@onlearn.com</li>
>>>>>>> 8d86a8a88b0a92ea228b71aa30fde1d2de30bad6
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
<<<<<<< HEAD
          <p>&copy; {new Date().getFullYear()} BMS Academey. All rights reserved.</p>
=======
          <p>&copy; {new Date().getFullYear()} Onlearn. All rights reserved.</p>
>>>>>>> 8d86a8a88b0a92ea228b71aa30fde1d2de30bad6
        </div>
      </div>
    </footer>
  );
};

export default Footer;