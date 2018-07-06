import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import todoStore from "./components/TodoStore";

ReactDOM.render(<App store={todoStore} />, document.getElementById("root"));
registerServiceWorker();
