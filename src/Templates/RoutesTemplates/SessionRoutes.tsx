import React from 'react';
import { Navigate } from 'react-router';

const PrivateRoutes: React.FC<{ children: any }> = ({ children }) => {
  return sessionStorage.getItem('user') ? <Navigate to="/home" /> : children;
};

export default PrivateRoutes;
