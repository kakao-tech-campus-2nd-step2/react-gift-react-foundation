import React from "react";
import reset from "./reset"
import { Global } from "@emotion/react";

function App() {
  return (
    <div className="App">
      <Global styles={reset} />
      카카오
    </div>
  );
}

export default App;
