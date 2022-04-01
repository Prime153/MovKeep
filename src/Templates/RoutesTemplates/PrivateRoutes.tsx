import React from 'react';
import { Navigate } from 'react-router';

const PrivateRoutes: React.FC<{ children: any }> = ({ children }) => {
  // const { errorHandle } = useAuth();

  

 
    return sessionStorage.getItem('user') ? children : <Navigate to="/" />;
  
};

export default PrivateRoutes;
