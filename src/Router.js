import { createBrowserRouter } from "react-router-dom";
import Wallpapers from "./Pages/Wallpapers";
import Home from "./Pages/Home";
import App from "./App";
import SingleWallpaper from "./Pages/SingleWallpaper";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/wallpapers", element: <Wallpapers /> },
      { path: "/wallpapers/:id", element: <SingleWallpaper />},



      { path: "*", element: <div>Not Found</div> },
    ],
  },
]);
