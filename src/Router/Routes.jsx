import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomeRouter, HomeRoutes } from "../home";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { Admin, AdminRouter, AdminRoutes } from "../admin";

 
 
export const getRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <HomeRouter />,
        children: HomeRoutes,
    },
    {
        path: "/login",
        element: <PublicRoutes children= {<AdminRouter />} />,
        children: AdminRoutes,
    },
    {
        path: "/admin/panel",
        element: <PrivateRoutes children={<Admin />} />,
    },
    {
        path: "/*",
        element: <Navigate to={"/auth/login"} />,
    },
]);