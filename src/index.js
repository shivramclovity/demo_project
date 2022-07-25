import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { unregister } from "./registerServiceWorker";

import { BrowserRouter } from "react-router-dom";
import "./assets/base.css";
import Main from "./Pages/Main";
import { setAuthHeader, store } from "./_helpers";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");

const renderApp = (Component) => {
  return ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>,
    rootElement
  );
};

setAuthHeader();
renderApp(Main);

if (module.hot) {
  module.hot.accept("./Pages/Main", () => {
    const NextApp = require("./Pages/Main").default;
    renderApp(NextApp);
  });
}
unregister();

registerServiceWorker();
