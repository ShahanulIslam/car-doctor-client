import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Service from "../Pages/Servcice/Service";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        },
        {
          path:"/service/:id",
          element:<PrivateRoute><Service></Service></PrivateRoute>,
          loader: ({params}) => fetch(`https://car-doctor-server-gamma-seven.vercel.app/services/${params.id}`)
        },
        {
          path:"/bookings",
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>,
        }
      ]
    },
  ]);

  export default router
  