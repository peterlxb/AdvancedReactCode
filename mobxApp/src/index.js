import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import TodoStore from "./components/TodoStore";

ReactDOM.render(<App store={TodoStore} />, document.getElementById("root"));
registerServiceWorker();
