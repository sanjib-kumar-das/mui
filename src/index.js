import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {myTheme} from "./Theme"
import { ThemeProvider } from '@emotion/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
