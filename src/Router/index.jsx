import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Cart from "../Pages/Cart/Cart";
import UserByUsername from "../Pages/UserById/UserByUsername";
import DesignsByCategory from "../Pages/DesingsByCategory/DesignsByCategory";
import UniqueDesign from "../Pages/UniqueDesign/UniqueDesign";
import Favorites from "../Pages/Favorites/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
        {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/user/:username",
        element: <UserByUsername />,
      },
      {
        path: "/category/:name",
        element: <DesignsByCategory />,
      },
      {
        path: "/user/:username/designs/:id",
        element: <UniqueDesign />,
      },
      ,
      {
        path: "/user/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

export default router;
