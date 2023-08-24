import { useState } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import { Outlet } from "react-router";
import Footer from "./components/menu/Footer";


function App() {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(false);

  return (
    <div data-bs-theme={theme} className={`bg-${theme}`}>
      <Menu theme={theme} setTheme={setTheme} />
      <section className="page-detail">
        <Outlet context={[loading, setLoading]} />
      </section>
      <Footer />
    </div>
  );
}

export default App;
