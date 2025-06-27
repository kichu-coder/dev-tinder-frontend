import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element : <Feed /> },
        { path: "/login", element : <Login /> },
        { path: "/profile", element : <Profile /> },
        { path: "/connections", element : <Connections /> },
        { path: "/requests", element : <Requests /> },
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
