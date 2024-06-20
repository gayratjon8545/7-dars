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
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobalContext";
import Shopping from "./pages/Shopping";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

import { action as RegisterAction } from "./pages/Register";

function App() {
  const { user, dispatch, isAuthChange } = useContext(GlobalContext);
  // console.log(user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
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
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
      action: RegisterAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOG_IN", payload: user });
      dispatch({ type: "AUTH_CHANGE" });
    });
  }, []);
  return <>{isAuthChange && <RouterProvider router={routes} />}</>;
}

export default App;
