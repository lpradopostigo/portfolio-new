import React from "react";
import ReactDOM from "react-dom";

import "./i18n";
import { OverlayProvider } from "react-aria";
import App from "./components/App/App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <OverlayProvider>
      <App />
    </OverlayProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
