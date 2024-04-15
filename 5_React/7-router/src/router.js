import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Error from "./pages/Error";
import Layout from "./components/Layout";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "create", element: <Create /> },
    ],
  },
  {
    // Layout 없이 페이지 출력하려면 다른 중괄호에 만들면 된다
    path: "/detail/:no",
    element: <Detail />,
  },

  // {
  //   path: "/create",
  //   element: <Create />,
  // },
]);

export default router;
