import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoleHeader from "./Components/RoleHeader.tsx";
import RoleProvider from "./Context/RoleContext";
import Register from "./Components/Register.tsx";
import Login from "./Components/Login.tsx";
import Manager from "./Manager/Manager.tsx";
import Administrator from "./Administrator/Administrator.tsx";
import Distributor from "./Distributor/Distributor.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/enter",
    element: <RoleHeader />,
    children: [
      {
        path: "/enter/register",
        element: <Register />,
      },
      {
        path: "/enter/login",
        element: <Login />,
      },
      {
        path: "/enter/manager",
        element: <Manager />,
      },
      {
        path: "/enter/admin",
        element: <Administrator />,
      },
      {
        path: "/enter/distributor",
        element: <Distributor />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RoleProvider>
      <RouterProvider router={router} />
    </RoleProvider>
  </StrictMode>
);
