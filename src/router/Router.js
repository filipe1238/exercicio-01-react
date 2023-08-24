import { createBrowserRouter } from "react-router-dom";
import Wallpapers from "../Pages/Wallpapers";
import Home from "../Pages/Home";
import App from "../App";
import SingleWallpaper from "../Pages/SingleWallpaper";
import Movies from "../Pages/Movies";
import SingleMovie from "../Pages/SingleMovie";
import About from "../components/common/About";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/wallpapers", element: <Wallpapers /> },
      { path: "/wallpapers/:id", element: <SingleWallpaper />},
      { path: "/movies", element: <Movies /> },
      { path: "/movies/:id", element: <SingleMovie />},
      { path: "/about", element: <About />},

      { path: "*", element: <div>404 Not Found</div> },
    ],
  },
]);
