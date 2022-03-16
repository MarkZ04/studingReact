import "./index.css";
import { store } from "./redux/storeRedux";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { Content } from "./components/content";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <>
          <Header />
          <Menu />
          <Content />
        </>
      </Provider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById("root")
);


