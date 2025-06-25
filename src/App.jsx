import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element : <Feed /> },
        { path: "/login", element : <Login /> },
        { path: "/profile", element : <Profile /> },
      ],
    },
  ]);

  return (
    <>
      {/* <NavBar /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
