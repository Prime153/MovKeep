import React from 'react';
import GlobalStyle from '../Themes/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Themes/MainTheme';

const ThemesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default ThemesProvider;
