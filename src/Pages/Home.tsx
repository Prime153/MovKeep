import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../Contexts/AuthContext';
import gsap from 'gsap';

const Home: React.FC = () => {
  const history = useNavigate();

  const { logOut } = useAuth();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(container.current, {autoAlpha: 0}, { autoAlpha: 1, duration: 0.2 });
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
      <button onClick={handleLogOut}>log out</button>
    </div>
  );
};

export default Home;
