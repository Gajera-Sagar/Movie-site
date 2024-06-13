import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import AppStore from "./components/AppStore/AppStore";
import Layout from "./components/Layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={AppStore}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
