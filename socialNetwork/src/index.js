import "./index.css";
import { store } from "./redux/storeRedux";
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
            store={store}
          />
        </>
      </BrowserRouter>
    </React.StrictMode >,
    document.getElementById("root")
  );
}

rerender(store.getState());
store.subscribe(() => {
  const state = store.getState();
  rerender(state);
});
