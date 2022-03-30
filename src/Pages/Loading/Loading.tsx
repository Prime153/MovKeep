import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Container } from './LoadingStyle';

const Loading: React.FC = () => {
  return (
    <Container>
      <CircularProgress size={180} />
    </Container>
  );
};

export default Loading;
