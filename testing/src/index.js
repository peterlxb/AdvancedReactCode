import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import Root from "./Root";

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById("root")
);
registerServiceWorker();
