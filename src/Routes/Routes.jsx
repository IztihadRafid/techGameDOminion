
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import ErrorPage from "./ErrorPage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path:'/login',
        },
        {
            path: '/register',
            
        }
      ]
    },
  ]);
export default router