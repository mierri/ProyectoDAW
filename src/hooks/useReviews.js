import reviewsApi from "../api/reviewsApi";

export const useReviews = () => {
    const urlBase = '/review';

    const startNewReview = async (newReview) => {
      try {
        const { data } = await reviewsApi.post(`${urlBase}/new`, newReview);
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
