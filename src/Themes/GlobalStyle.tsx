import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::before,*::after {
    box-sizing:border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}
html {
  font-size: calc(15px + 0.390625vw);
}
body {
   padding:0; 
    margin:0;
    font-family: 'Roboto, sans-serif';
    
}
`;

export default GlobalStyle;