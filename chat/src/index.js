import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import 'react-devtools';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import {
  ChatPage,
  ProfilePage,
  GistsPage,
  LoginPage,
  SignUpPage
} from "./pages";
import { store, persistor } from "./store/store";
import { Header, PrivateRoute, PublicRoute } from './components';
import { firebaseApp } from './api/firebase';

const lightTheme = createTheme({
  theme: {
    color: 'red'
  }
})

const Root = () => {

  const [session, setSession] = useState(null);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setSession(user);
        return;
      }
      setSession(null);
    })
  }, []);

  const isAuth = !!session?.email;

  return (
    < Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={lightTheme}>
          <BrowserRouter>
            <Header session={session} />

            <Routes>
              <Route
                path="/"
                element={<div>Main page</div>}
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <ProfilePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute isAuth={isAuth}>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/sign-up"
                element={
                  <PublicRoute isAuth={isAuth}>
                    <SignUpPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/chat/*"
                element={
                  <PrivateRoute isAuth={isAuth}>
                    <ChatPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/gists"
                element={<GistsPage />}
              />
              <Route
                path="/*"
                element={<h1>404</h1>}
              />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider >
  )
}

ReactDOM.render(
  <Root />, document.getElementById('root')
);

