import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoleHeader from "./Components/RoleHeader.tsx";
import RoleProvider from "./Context/RoleContext";
import Register from "./Components/Register.tsx";

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
