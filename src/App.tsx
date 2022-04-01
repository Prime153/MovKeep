import React from 'react';
import ThemesProvider from './Templates/ThemesProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn/LogIn';
import { routes } from './Routes/routes';
import { AuthProvider } from './Contexts/AuthContext';
import PrivateRoutes from './Templates/RoutesTemplates/PrivateRoutes';
import SessionRoutes from './Templates/RoutesTemplates/SessionRoutes';

const App: React.FC = () => {
  return (
    <ThemesProvider>
      <BrowserRouter basename="MovKeep">
        <AuthProvider>
          <Routes>
            <Route
              path={routes.login}
              element={
                <SessionRoutes>
                  <LogIn />
                </SessionRoutes>
              }
            />

            <Route
              path={routes.home}
              element={
                <PrivateRoutes>
                  <Home />
                </PrivateRoutes>
              }
            />
            {/* <Route path="/" />
          <Route path="/" /> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemesProvider>
  );
};

export default App;
