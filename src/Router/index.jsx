import { createBrowserRouter, redirect, useNavigate } from "react-router-dom";
import Root from "../Layouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Cart from "../Pages/Cart/Cart";
import UserByUsername from "../Pages/UserById/UserByUsername";
import DesignsByCategory from "../Pages/DesingsByCategory/DesignsByCategory";
import UniqueDesign from "../Pages/UniqueDesign/UniqueDesign";
import CartUser from "../Pages/CartUser/CartUser";
import AdminTools from "../Pages/AdminTools/AdminTools";
import PrinterModelsList from "../Pages/PrinterModelList/PrinterModelList";
import UploadDesign from "../Pages/Upload/UploadDesign";
import GetMyProfile from "../Services/GetMyProfile";
// import Profile from "../Pages/Profile/Profile";

async function checkAdmin() {

  try {
    const token = localStorage.getItem('token')
    if (token) {
      const user = await GetMyProfile(token)
      return user.role === 'admin' ?
      null
      : redirect('/')
    } else {
      alert('You should Login first')
      return redirect('/')
    }
    
  } catch(error) {
    console.log(error)
    alert('Something went wrong')
    return redirect('/')
  }

  // return localStorage.getItem('token') ?
  //   localStorage.getItem('role') === 'admin' ?
  //     null
  //     : redirect('/')
  //   : redirect('/')
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      }  ,
      {
        path: "/admin",
        element: <AdminTools />,
        loader: checkAdmin
      } ,
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
      {
        path: "/user/cart",
        element: <CartUser />,
      },
      {
        path: "/printer",
        element: <PrinterModelsList />,
      },
      {
        path: "/upload",
        element: <UploadDesign />,
      },
      //   {
      //   path: "/profile",
      //   element: <Profile />,
      // },
    ],
  },
]);

export default router;
