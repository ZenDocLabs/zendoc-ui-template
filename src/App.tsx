import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { DocProvider } from "./context/DocContext";
import Router from "./components/router/Router";

const App = (): React.JSX.Element => {
  return <ThemeProvider>
    <DocProvider>
      <Router />
    </DocProvider>
  </ThemeProvider>

}

export default App
