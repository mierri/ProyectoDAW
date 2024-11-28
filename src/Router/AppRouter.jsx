import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { getRoutes } from "./Routes";
import { useAuthStore, useSearches } from "../hooks";


const router = getRoutes();

export const AppRouter = () => {
  const { checkAuthToken } = useAuthStore();
  const {startSearchAllMaestros, startSearchAllMaestrosPorFacultades } = useSearches();
    // Aqui van cosas que queremos que se ejecuten una sola vez y esten disponibles en toda la aplicacion o desde el inicio
    useEffect(() => {
      checkAuthToken();
      startSearchAllMaestros();
      startSearchAllMaestrosPorFacultades();
    }, [])
  
  return <RouterProvider router={router} /> ;

}