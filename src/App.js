import { useState, createContext, useContext, useEffect } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import Page from "./Page";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const value = { theme, setTheme };
  
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <Page />
    </ThemeContext.Provider>
  );
}

export default App;
