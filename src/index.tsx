import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Global, css } from "@emotion/react";
import reset from "./styles/reset";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Global styles={reset} />
      <App />
    </React.StrictMode>
  );
}
