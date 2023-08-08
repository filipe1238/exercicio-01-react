import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Artigo from "./components/Artigo";
import Cabecalho from "./components/Cabecalho";
import Menu from "./components/Menu";
import Artigos from "./components/Artigos";

function App() {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(false);
  const [artigos, setArtigos] = useState([]);
  const [searchParam, setSearchParam] = useState({page: 1, limit: 20});
  let baseUrl = "https://picsum.photos/v2/list";
  const handleSearch = () => {
    setLoading(true);
    axios
      .get(baseUrl, {
        params: searchParam,
      })

      .then((response) => {
        setArtigos(response.data);
        console.log(response.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    handleSearch();
  }, [searchParam]);

  return (
    <div data-bs-theme={theme} className={`bg-${theme}`}>
      <Menu theme={theme} setTheme={setTheme} />
      <Cabecalho searchParam={searchParam} setSearchParam={setSearchParam} />
      <div className="container-fluid">
        {loading && <p className="text-center">Carregando...</p>}
        {!loading && <Artigos artigos={artigos} />}
      </div>
    </div>
  );
}

export default App;
