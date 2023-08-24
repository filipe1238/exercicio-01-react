import React, { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Menu from "./components/menu/Menu";
import { Outlet } from "react-router";
import Footer from "./components/menu/Footer";

function Page() {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);

  return (
    <div data-bs-theme={theme} className={`bg-${theme}`}>
      <Menu />
      <section className="page-detail content" data-bs-theme={theme}>
        <Outlet context={[loading, setLoading]} />
      </section>
      <Footer />
    </div>
  );
}

export default Page;
