import React from 'react';
import MainTemplate from './Templates/MainTemplate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn/LogIn';
import { routes } from './Routes/routes';

const App: React.FC = () => {
  return (
    <MainTemplate>
      <BrowserRouter basename='MovKeep'>
        <Routes>
          <Route path={routes.login} element={<LogIn />} />
          <Route path={routes.home} element={<Home />} />
          {/* <Route path="/" />
          <Route path="/" /> */}
        </Routes>
      </BrowserRouter>
    </MainTemplate>
  );
};

export default App;
