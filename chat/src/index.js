import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import 'react-devtools';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import { PersistGate } from "redux-persist/integration/react"; import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import { ChatPage, ProfilePage, GistsPage } from "./pages";
import { store, persistor } from "./store/store";
import { Header } from './components';

const lightTheme = createTheme({
  theme: {
    color: 'red'
  }
})

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/chat/*" element={<ChatPage />} />
            <Route path="/gists" element={<GistsPage />} />
            <Route path="/*" element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

