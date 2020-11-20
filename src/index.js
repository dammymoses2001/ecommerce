import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
// import RootStore from "./mobx/RootStore";
import { StoreProvider } from "./mobx/helpers/store-provider";
import Product from "./mobx/store/Product";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StoreProvider value={Product}>
        <App />
      </StoreProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
