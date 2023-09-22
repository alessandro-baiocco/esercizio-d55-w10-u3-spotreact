import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import { music } from "./redux/music";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={music}>
    <App />
  </Provider>
);
