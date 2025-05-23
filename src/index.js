import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import { LocaleProvider } from './context/LocaleContext';
import 'leaflet/dist/leaflet.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LocaleProvider>
        <GlobalStyles />
        <App />
      </LocaleProvider>
    </ThemeProvider>
  </React.StrictMode>
);