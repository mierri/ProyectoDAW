import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { AddEvaluationButton, Comments, GeneralRatings, Header } from "../components/componentsDetallesEvaluacion";
import { useSearches } from "../../hooks";
import { LoadingElement } from "../../helpers/LoadingElement";

export const DetallesEvaluacion = () => {
  const location = useLocation();
  const { id } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const facultadId = queryParams.get('facultad');

  const [selectedMaestro, setSelectedMaestro] = useState(null);
  const [maestroReviews, setMaestroReviews] = useState([]);
  const [facultad, setFacultad] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { maestrosPorFacultades } = useSearches();

  useEffect(() => {
    const facultad = maestrosPorFacultades.find((facultad) => facultad._id === facultadId);
    if (facultad) {
      const maestroEncontrado = facultad.maestros.find((m) => m.maestro._id === id);
      if (maestroEncontrado) {
        setSelectedMaestro(maestroEncontrado.maestro);
        setMaestroReviews(maestroEncontrado.reviews);
        setFacultad(facultad);
      }
    }
    setIsLoading(false);
  }, [id, facultadId, maestrosPorFacultades]);

  return (
    isLoading ? (
      <LoadingElement />
    ) : (
      <div className="containerDetalles">
        <Header nombremaestro={selectedMaestro?.nombre} facultadnombre={facultad?.nombre} />
        <GeneralRatings puntos={maestroReviews?.map(review => review?.puntos)} />
        <Comments reviews={maestroReviews} />
        {/* <AddEvaluationButton maestroId={selectedMaestro._id} /> */}
      </div>
    )
  );
};