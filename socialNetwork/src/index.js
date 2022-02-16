import "./index.css";
import { store } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { Content } from "./components/content";

const rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <>
          <Header />
          <Menu />
          <Content
            state={state}
            dispatch={store.dispatch.bind(store)}
          />
        </>
      </BrowserRouter>
    </React.StrictMode >,
    document.getElementById("root")
  );
}
rerender(store.getState());
store.subscribe(rerender);
