import { Navigate } from "react-router-dom";
import { Inicio, Evaluaciones, DetallesEvaluacion, FormularioEvaluacion } from "../pages";

export const HomeRoutes = [
    {
      index: true,
      element: <Inicio />,
    },
    {
      path: "pages/evaluaciones",
      element: <Evaluaciones />,
    },
    {
      path: "pages/evaluaciones/:id",
      element: <DetallesEvaluacion />,
    },
    {
      path: "pages/evaluaciones/nuevo",
      element: <FormularioEvaluacion />,
    },
    {
      path: "/*",
      element: <Navigate to={"/"} />,
    },
];