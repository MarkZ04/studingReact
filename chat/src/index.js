import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import 'react-devtools';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import { ChatPage, ProfilePage } from "./pages";
import { store } from "./store/store";
import { Header } from './components';

const lightTheme = createTheme({
  theme: {
    color: 'red'
  }
})

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

