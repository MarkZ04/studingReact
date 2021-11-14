import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import 'react-devtools';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';

const lightTheme = createTheme({
  theme: {
    color: 'red'
  }
})

ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

