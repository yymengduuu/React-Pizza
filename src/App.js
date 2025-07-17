import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'; （github不支持子路径刷新）
import './App.css';
import AppLayout from './UI/AppLayout';
import Home from './UI/Home';
import Menu, { loader as menuLoader } from './features/Menu/Menu';
import Cart from './features/Cart/Cart';
import CreateOrder from './features/Order/CreateOrder';
import Order from './features/Order/Order';

// const router = createBrowserRouter([
const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Menu',
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: '/Cart',
        element: <Cart />,
      },
      {
        path: '/Order/CreateOrder',
        element: <CreateOrder />,
      },
      {
        path: '/Order/Status',
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
