import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { Content } from "./components/content";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <Header />
        <Menu />
        <Content />
      </>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById("root")
);
