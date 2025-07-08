import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./UI/AppLayout";
import Home from "./UI/Home";
import Menu, { loader as menuLoader } from "./features/Menu/Menu";
import Cart from "./features/Cart/Cart";
import Order from "./features/Order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Order",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
