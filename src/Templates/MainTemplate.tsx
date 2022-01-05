import React from "react";
import GlobalStyle from '../Themes/GlobalStyle'
import { ThemeProvider } from "styled-components";
import { theme } from "../Themes/MainTheme";


interface Props {
    children: React.ReactNode
}


const MainTemplate: React.FC<Props> = ({children}) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);



export default MainTemplate;
