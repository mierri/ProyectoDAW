import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { StarRow } from "./StarRow";


export const GeneralRatings = ({ puntos }) => {
  const criterios = ["claridadProfesor", "facilidadClase", "cantidadTrabajo"];

  const criteriosMap = {
    claridadProfesor: "Claridad del Profesor",
    facilidadClase: "Facilidad de la Clase",
    cantidadTrabajo: "Cantidad de Trabajo",
  };

  const calcularPromedio = (criterio) => {
    const total = puntos.reduce((acc, punto) => acc + punto[criterio], 0);
    return (total / puntos.length).toFixed(1);
  };

  const calcularPromedioGeneral = () => {
    const totalCriterios = criterios.length;
    const total = puntos.reduce((acc, punto) => {
      return acc + criterios.reduce((sum, criterio) => sum + punto[criterio], 0);
    }, 0);
    return (total / (puntos.length * totalCriterios)).toFixed(1);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={index < rating ? "text-customYellow" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="general-ratings p-4 border rounded-lg shadow-md bg-white">
      <div className="average-rating mb-4">
        <p className="text-lg font-bold text-colorprimary">Promedio General:</p>
        <p className="text-xl text-colorsecondary">
          <FontAwesomeIcon icon={faStar}/> {calcularPromedioGeneral()} de 5
        </p>
      </div>
      <div className="star-chart">
        <h3 className="text-lg font-bold text-colorprimary mb-2">Puntajes Promedio</h3>
        {criterios.map((criterio) => (
          <StarRow
            key={criterio}
            criterio={criteriosMap[criterio]}
            estrellas={renderStars(calcularPromedio(criterio))}
          />
        ))}
      </div>
    </div>
  );
};