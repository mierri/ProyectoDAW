import { Navigate } from "react-router-dom";
import { Login } from "../pages";

export const AdminRoutes = [
  {
    index: true,
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to={"/admin/login"} />,
  },
];
