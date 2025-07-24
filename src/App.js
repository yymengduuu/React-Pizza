import { RouterProvider, createHashRouter } from 'react-router-dom';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'; （github不支持子路径刷新）
import './App.css';
import AppLayout from './UI/AppLayout';
import Home from './UI/Home';
import Menu from './features/Menu/Menu';
// import { loader as menuLoader } from './features/Menu/Menu';
import Cart from './features/Cart/Cart';
import CreateOrder from './features/Order/CreateOrder';
import Order from './features/Order/Order';
import LoginUser from './features/User/LoginUser.jsx';
import RegisterUser from './features/User/RegisterUser.jsx';

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
        // loader: menuLoader,
      },
      {
        path: '/Cart',
        element: <Cart />,
      },
      {
        path: '/RegisterUser',
        element: <RegisterUser />,
      },
      {
        path: '/Order/CreateOrder',
        element: <CreateOrder />,
      },
      {
        path: '/Order/Status',
        element: <Order />,
      },
      {
        path: '/LoginUser',
        element: <LoginUser />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
