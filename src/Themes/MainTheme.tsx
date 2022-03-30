interface Theme {
  colors: {
    mainBlue: string;
    darkerBlue: string;
  };
  fontSize: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
  fontFamily: {
    Architects: string;
    Roboto: string;
  };
  breakpoints: {
    small: string;
    medium: string;
  };
}

export const theme: Theme = {
  colors: {
    mainBlue: '#055FFC',
    darkerBlue: '#233C78',
  },
  fontSize: {
    xs: '0.8rem',
    s: '1.3rem',
    m: '1.8rem',
    l: '2.2rem',
    xl: '2.7rem',
  },
  fontFamily: {
    Architects: 'Architects Daughter, cursive',
    Roboto: 'Roboto, sans-serif',
  },
  breakpoints: {
    small: '330px',
    medium: '800px',
  },
};
