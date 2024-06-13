// react-router-dom imports

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// components

import ProtectedRoutes from "./components/ProtectedRoutes";

// mainLayout
import MainLayout from "./layout/MainLayout";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";

// context
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import Shopping from "./pages/Shopping";

function App() {
  const { user } = useContext(GlobalContext);
  console.log(user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={true}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/shopping",
          element: <Shopping />,
        },
      ],
    },

    {
      path: "/login",
      element: true ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: true ? <Navigate to="/" /> : <Register />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
