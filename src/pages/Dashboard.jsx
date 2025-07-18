import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, User } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const adminName = user?.user_metadata?.name || user?.email?.split('@')[0] || 'Admin';

  useEffect(() => {
    if (!user) {
      navigate('/dashboard-login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    signOut();
    navigate('/dashboard-login');
  };

  const cards = [
    {
      title: 'Courses',
      description: 'Manage course listings and categories',
      bg: 'bg-blue-100',
      icon: '👜',
      cardLink: '/dashboard/courses',
    },
    // {
    //   title: 'Projects',
    //   description: 'Manage portfolio projects',
    //   bg: 'bg-green-100',
    //   icon: '📁',
    // },
    // {
    //   title: 'Contacts',
    //   description: 'View and manage contact messages',
    //   bg: 'bg-purple-100',
    //   icon: '✉️',
    // },
    // {
    //   title: 'Blogs',
    //   description: 'Manage admin blogs',
    //   bg: 'bg-yellow-100',
    //   icon: '🧑‍💻',
    // },
    {
      title: 'Testimonials',
      description: 'Manage client testimonials',
      bg: 'bg-yellow-200',
      icon: '⭐',
      cardLink: '/dashboard/testimonials',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-white shadow-sm">
        <div className="px-4 py-4 flex items-center justify-between relative">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-lg select-none">
                {adminName.charAt(0).toUpperCase()}
              </div>
              <ChevronDown className="h-4 w-4" />
            </button>

            {profileMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                <button
                  onClick={() => {
                    setShowProfileModal(true);
                    setProfileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dashboard Cards Section */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-md transition duration-300 cursor-pointer p-6 flex items-center space-x-4"
          >
            <div className={`rounded-full p-3 text-2xl ${card.bg}`}>
              {card.icon}
            </div>
            <div>
              <Link to={card.cardLink}><h3 className="text-lg font-semibold">{card.title}</h3></Link> 
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">Profile Info</h2>
            <p><strong>Name:</strong> {adminName}</p>
            <p><strong>Role:</strong> Administrator</p>
            <button
              onClick={() => setShowProfileModal(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
