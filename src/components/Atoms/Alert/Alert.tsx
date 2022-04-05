import React, { useEffect, useRef } from 'react';
import { AlertMaterialStyled } from './AlertStyled';
import gsap from 'gsap';

interface Props {
  type: 'error' | 'warning' | 'info' | 'success';
  children: React.ReactNode | any;
}

const Alert: React.FC<Props> = ({ type, children }) => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(container.current, { autoAlpha: 1, duration: 0.1 });
  }, []);

  return (
    <AlertMaterialStyled ref={container} variant="filled" severity={type}>
      {children}
    </AlertMaterialStyled>
  );
};

export default Alert;
