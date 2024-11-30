import reviewsApi from "../api/reviewsApi";
import { useSearches } from "./useSearches";

export const useReviews = () => {
    const {startSearchAllMaestros, startSearchAllMaestrosPorFacultades} = useSearches();
    const urlBase = '/review';

    const startNewReview = async (newReview) => {
      try {
        const { data } = await reviewsApi.post(`${urlBase}/new`, newReview);
        startSearchAllMaestros();
        startSearchAllMaestrosPorFacultades();
        return data.msg;
      } catch (error) {
        if (error.response) {
          throw new Error(error.response.data.msg);
        } else {
          throw new Error("Ha ocurrido un error");
        }
      }
    };


  return {


    //* Métodos
    startNewReview,
  }
}
