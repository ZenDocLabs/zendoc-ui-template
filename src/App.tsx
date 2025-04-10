import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { AppContent } from "./components/AppContent";
import { DocProvider } from "./context/DocContext";

const App = (): React.JSX.Element => {
  return <ThemeProvider>
    <DocProvider>
      <AppContent />
    </DocProvider>
  </ThemeProvider>

}

export default App
