import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./styles/styles.css";
import ItemsContextProvider from "./store/items/context/ItemsContextProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ItemsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ItemsContextProvider>
  </React.StrictMode>,
);
