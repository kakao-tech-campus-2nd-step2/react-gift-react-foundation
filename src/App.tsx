import React from "react";
import { Global } from "@emotion/react";
import reset from "./styles/reset";

function App() {
  return (
    <div className="App">
      <Global styles={reset} />
      카카오
    </div>
  );
}

export default App;
