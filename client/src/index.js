import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import RootProvider from "./App/root/context/RootProvider";
import Root from "./App/root/Root";

ReactDOM.render(
  <RootProvider>
    <Root />
  </RootProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
