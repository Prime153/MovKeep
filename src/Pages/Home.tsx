import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../Contexts/AuthContext';
import gsap from 'gsap';

const Home: React.FC = () => {
  const history = useNavigate();

  const { logOut } = useAuth();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(container.current, { autoAlpha: 1, duration: 1 });
  }, []);

  const handleLogOut = async () => {
    try {
      await logOut();
      history('/');
    } catch {
      console.error('failed to logout');
    }
  };

  return (
    <div ref={container}>
      <button onClick={handleLogOut}>log out</button>;
    </div>
  );
};

export default Home;
