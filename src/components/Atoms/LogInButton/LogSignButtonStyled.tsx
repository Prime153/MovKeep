import styled from 'styled-components';

export const LogSubmitButton = styled.button<{ type: String }>`
  width: 100%;
  text-align: center;
  border: none;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.darkerBlue};
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 5px;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
`;
