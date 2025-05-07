import React from 'react';
import { getCurrentUser } from '../services/AuthService';
import { Navigate } from 'react-router-dom';

const withRoleGuard = (Component, allowedRoles = []) => {
  return (props) => {
    const user = getCurrentUser();

    if (!user) return <Navigate to="/login" />;
    if (!allowedRoles.includes(user.role)) return <Navigate to="/unauthorized" />;

    return <Component {...props} />;
  };
};

export default withRoleGuard;
