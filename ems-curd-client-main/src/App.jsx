// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';

import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import EmployeView from './components/EmployeView';
import ListEmployee from './components/ListEmployee';
import Home from './components/Home';

import Login from './pages/Login';
import Register from './pages/Register';
import { isAuthenticated } from './services/AuthService';

import Dashboard from './pages/Dashboard'; // ↩️ Full dashboard page
import withRoleGuard from './guards/withRoleGuard'; // ↩️ HOC for role guard
import GroupedView from './pages/GroupedView';
import EmployeeDirectory from './pages/EmployeeDirectory';

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* 🔓 Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔒 Protected Routes */}
        <Route path="/employees" element={<PrivateRoute><ListEmployee /></PrivateRoute>} />
        <Route path="/add-employee" element={<PrivateRoute><AddEmployee /></PrivateRoute>} />
        <Route path="/view-employee/:id" element={<PrivateRoute><EmployeView /></PrivateRoute>} />
        <Route path="/edit-employee/:id" element={<PrivateRoute><UpdateEmployee /></PrivateRoute>} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/grouped-by-department" element={<PrivateRoute><GroupedView /></PrivateRoute>} />
        <Route path="/directory" element={<PrivateRoute><EmployeeDirectory /></PrivateRoute>} />


         {/* 📊 Dashboard (admin only if needed) */}
         <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

        {/* 🏠 Default Route */}
        {/* <Route path="/" element={<Navigate to="/employees" />} />   */} 
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/home" />} />

        
      </Routes>
    </Router>
  );
}
