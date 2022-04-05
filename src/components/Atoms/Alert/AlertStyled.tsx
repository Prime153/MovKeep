import styled from 'styled-components';
import { Alert as AlertMaterial } from '@mui/material';

export const AlertMaterialStyled = styled(AlertMaterial)`
  position: absolute;
  right: 0;
  top: 11%;
  width: 50%;
  z-index: 999;
  visibility: hidden;
`;
