import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { AppContent } from "./components/AppContent";

const App = (): React.JSX.Element => {
  return <ThemeProvider>
    <AppContent />
  </ThemeProvider>

}

export default App
