import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { getRoutes } from "./Routes";
import { useAuthStore } from "../hooks";


const router = getRoutes();

export const AppRouter = () => {
  const { checkAuthToken } = useAuthStore();
    // Aqui van cosas que queremos que se ejecuten una sola vez y esten disponibles en toda la aplicacion o desde el inicio
    useEffect(() => {
      checkAuthToken();
    }, [])
  
  return <RouterProvider router={router} /> ;

}