import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import 'react-devtools';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import { ChatPage, ProfilePage } from "./pages";


const lightTheme = createTheme({
  theme: {
    color: 'red'
  }
})

ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chat/*" element={<ChatPage />} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

