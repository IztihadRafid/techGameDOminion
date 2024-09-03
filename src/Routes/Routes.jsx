
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import ErrorPage from "./ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
            loader: ()=>fetch('/games.json')
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>

        }
      ]
    },
  ]);
export default router