import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Comments, GeneralRatings, Header } from "../components/componentsDetallesEvaluacion";
import { useSearches } from "../../hooks";
import { LoadingElement } from "../../helpers/LoadingElement";

export const DetallesEvaluacion = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const facultadId = queryParams.get('facultad');

  const [selectedMaestro, setSelectedMaestro] = useState(null);
  const [maestroReviews, setMaestroReviews] = useState([]);
  const [facultad, setFacultad] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { maestrosPorFacultades } = useSearches();

  const isValidMongoId = (id) => /^[a-f\d]{24}$/i.test(id);

  useEffect(() => {
    if (!isValidMongoId(id) || !isValidMongoId(facultadId)) {
      navigate("/");
      return;
    }

    const facultad = maestrosPorFacultades.find((facultad) => facultad._id === facultadId);
    if (facultad) {
      const maestroEncontrado = facultad.maestros.find((m) => m.maestro._id === id);
      if (maestroEncontrado) {
        setSelectedMaestro(maestroEncontrado.maestro);
        setMaestroReviews(maestroEncontrado.reviews);
        setFacultad(facultad);
      } else {
        navigate("/")
      }
    } else {
      navigate("/")
    }
    setIsLoading(false);
  }, [id, facultadId, maestrosPorFacultades, navigate]);

  return (
    isLoading ? (
      <LoadingElement />
    ) : (
      <div className="containerDetalles font-poppins">
        <Header nombremaestro={selectedMaestro?.nombre} facultadnombre={facultad?.nombre} />
        <GeneralRatings puntos={maestroReviews?.map(review => review?.puntos)} />
        <Comments reviews={maestroReviews} />
      </div>
    )
  );
};