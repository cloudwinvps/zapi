import React, { useState, useEffect } from "react";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Routes from "./routes";

import "react-toastify/dist/ReactToastify.css";

import { ptBR } from "@material-ui/core/locale";

import "@fontsource/oxanium";

const theme = createTheme({

  typography: {
    fontFamily: 'Oxanium',
  },

  scrollbarStyles: {
    '&::-webkit-scrollbar': {
      width: '10px',
      height: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 5)',
      backgroundColor: '#223B62',
    },
  },
  
  palette: {
    primary: { main: '#223B62' },
    danger: { main: '#1172b8' },
  },

});

const App = () => {

  const [locale, setLocale] = useState();

  useEffect(() => {
    const i18nlocale = localStorage.getItem("i18nextLng");
    const browserLocale = 
      i18nlocale.substring(0, 2) + i18nlocale.substring(3, 5);
    
    if (browserLocale === "ptBR") {
      setLocale(ptBR); 
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
