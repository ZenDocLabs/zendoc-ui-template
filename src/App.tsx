import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { DocProvider } from "./context/DocContext";
import Router from "./components/router/Router";
import { DocVersionProvider } from "./context/DocVersionContext";

const App = (): React.JSX.Element => {
  return <ThemeProvider>
    <DocVersionProvider>
      <DocProvider>
        <Router />
      </DocProvider>
    </DocVersionProvider>
  </ThemeProvider>

}

export default App
