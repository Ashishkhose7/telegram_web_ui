import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Dashboard from "../Pages/Dashboard";
 const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard/>,
          },
          {
            path: '*',
            element: <div>Not Found</div>,
          },
        ],
      },
 ])

 export default router;