import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import { Outlet } from "react-router";


function App() {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(false);

  return (
    <div data-bs-theme={theme} className={`bg-${theme}`}>
      <Menu theme={theme} setTheme={setTheme} />
      <section className="page-detail">
        <Outlet context={[loading, setLoading]} />
      </section>
    </div>
  );
}

export default App;
