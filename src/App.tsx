import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { AppLayout } from "./components/AppLayout";
import { DocProvider } from "./context/DocContext";

const App = (): React.JSX.Element => {
  return <ThemeProvider>
    <DocProvider>
      <AppLayout />
    </DocProvider>
  </ThemeProvider>

}

export default App
