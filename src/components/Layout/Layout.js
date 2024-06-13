import React, { useEffect, useState } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "../LoginPage/Login";
import SignInForm from "../SignInForm/SignInForm";
import App from "../Dashboard/App";
import MovieDetails from "../MovieDetails/MovieDetails";
import LoginPassword from "../LoginPassword page/LoginPassword";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "../Firebase/Firebase";

function Layout() {
  const [user, setUser] = useState();

  let tocon = localStorage.getItem("accessTocon");
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(Auth, (user) => {
      setUser(user);
    });
    return () => unsuscribe();
  }, []);

  const layout = createBrowserRouter([
    {
      path: "/",
      element: tocon ? <Navigate to={"/dashboard"} /> : <Login />,
    },
    {
      path: "/:signin",
      element: <SignInForm />,
    },
    {
      path: "/dashboard",
      element: tocon ? <App /> : <Navigate to={"/"} />,
    },
    {
      path: "/dashboard/:typeofMovie/:movieID",
      element: tocon ? <MovieDetails /> : <Navigate to={"/"} />,
    },
    {
      path: "/in/password",
      element: <LoginPassword />,
    },
    {
      path: "*",
      element: <div>404 Not Found</div>,
    },
  ]);
  return <RouterProvider router={layout} />;
}

export default Layout;
