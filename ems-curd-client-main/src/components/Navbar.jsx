import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, getCurrentUser } from '../services/AuthService';
import ProfilePopup from './ProfilePopup';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = getCurrentUser(); // { username, email }

  return (
    <nav className="h-12 bg-slate-600 flex items-center px-6 text-white justify-between">
      {/* Logo */}
      <div className="text-lg font-semibold cursor-pointer">Ems Crud App</div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/add-employee" className="hover:underline">AddEmployee</Link>
        <Link to="/employees" className="hover:underline">EmpList</Link>

        {!isAuthenticated() ? (
          <>
            <Link to="/login" className="hover:underline text-blue-200">Login</Link>
            <Link to="/register" className="hover:underline text-green-200">Register</Link>
          </>
        ) : (
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img
                src="https://i.pravatar.cc/30"
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
             { /*<span className="font-medium">{user?.username}</span>*/}
            </button>

            {menuOpen && (
              <ProfilePopup user={user} />
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
