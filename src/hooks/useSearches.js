import { useDispatch, useSelector } from "react-redux";
import reviewsApi from "../api/reviewsApi";
import { onSetMaestros, onSetMaestrosPorFacultades } from "../store";

export const useSearches = () => {
  const { maestros, maestrosPorFacultades } = useSelector((state) => state.maestros);
  const dispatch = useDispatch();
  const urlBase = '/search';

  const startSearchFacultades = async () => {
    try {
      const { data } = await reviewsApi.get(`${urlBase}/facultades`);
      return data.facultades;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.msg);
      } else {
        throw new Error("Ha ocurrido un error");
      }
    }
  };

  const startSearchCarreras = async (facultadId) => {
    try {
      const { data } = await reviewsApi.get(`${urlBase}/carreras`, {
        params: { facultad: facultadId },
      });
      return data.carreras;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.msg);
      } else {
        throw new Error("Ha ocurrido un error");
      }
    }
  };

  const startSearchMaterias = async (carreraId) => {
    try {
      const { data } = await reviewsApi.get(`${urlBase}/materias`, {
        params: { carrera: carreraId },
      });
      return data.materias;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.msg);
      } else {
        throw new Error("Ha ocurrido un error");
      }
    }
  };

  const startSearchMaestros = async (materiaId) => {
    try {
      const { data } = await reviewsApi.get(`${urlBase}/maestros`, {
        params: { materia: materiaId },
      });
      return data.maestros;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.msg);
      } else {
        throw new Error("Ha ocurrido un error");
      }
    }
  };

  const startSearchAllMaestros = async ( ) => {
    try {
      const { data } = await reviewsApi.get(`${urlBase}/allmaestros`);
      dispatch(onSetMaestros(data.maestros));
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.msg);
      } else {
        throw new Error("Ha ocurrido un error al recuperar a los maestros");
      }
    }
  };

  const startSearchAllMaestrosPorFacultades = async ( ) => {
    try {
      const { data } = await reviewsApi.get(`${urlBase}/allfacultades`);
      dispatch(onSetMaestrosPorFacultades(data.facultades));
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.msg);
      } else {
        throw new Error("Ha ocurrido un error al recuperar las facultades");
      }
    }
  };



  return {
    //*Propiedades
    maestros,
    maestrosPorFacultades,

    //* Métodos
    startSearchFacultades,
    startSearchCarreras,
    startSearchMaterias,
    startSearchMaestros,
    startSearchAllMaestros,
    startSearchAllMaestrosPorFacultades,
  };
};
