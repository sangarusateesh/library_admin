import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Login from './Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Login />
    ),
  },
  {
    path: "Login",
    element: <div>Login</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);