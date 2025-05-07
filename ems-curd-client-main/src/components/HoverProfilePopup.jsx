import React, { useState } from 'react';
import { logout } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const HoverProfilePopup = ({ user }) => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/home');
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      {/* Profile trigger */}
      <div className="cursor-pointer px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
        {user?.username || 'Profile'}
      </div>

      {/* Popup shown only on hover */}
      {showPopup && (
        <div className="absolute right-0 mt-2 w-60 bg-white rounded-md shadow-lg py-3 shadow-gray-400 z-50">
          <div className="px-4 py-2 text-sm text-gray-800 font-semibold border-b">
            {user?.username || 'No Username'}
          </div>
          <div className="px-4 py-2 text-xs text-gray-600 truncate">
            {user?.email || 'No Email'}
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default HoverProfilePopup;
