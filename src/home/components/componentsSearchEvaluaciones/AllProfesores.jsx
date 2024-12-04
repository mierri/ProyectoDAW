import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSearches } from "../../../hooks";

export const AllProfesores = ({ searchTerm }) => {
  const { maestros } = useSearches();
  const [maestrosModificable, setMaestrosModificable] = useState([]);
  const [expandedMaterias, setExpandedMaterias] = useState({});

  useEffect(() => {
    setMaestrosModificable(maestros);
  }, [maestros]);

  const filteredMaestros = maestrosModificable.filter((maestro) => {
    return (
      maestro.nombre.toLowerCase().includes(searchTerm) ||
      maestro.facultad.nombre.toLowerCase().includes(searchTerm) ||
      maestro.materias.some((materia) =>
        materia.nombre.toLowerCase().includes(searchTerm)
      )
    );
  });

  const toggleMateria = (materiaId) => {
    setExpandedMaterias((prev) => ({
      ...prev,
      [materiaId]: !prev[materiaId],
    }));
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

  const renderBooleanIcon = (value) => {
    return value ? (
      <FontAwesomeIcon icon={faCheck} className="text-green-500" />
    ) : (
      <FontAwesomeIcon icon={faTimes} className="text-red-500" />
    );
  };

  return (
    <div className="container mx-auto p-4 w-full sm:max-w-[900px] md:max-w-[1200px]">
      {filteredMaestros.map((maestro) => (
        <div
          key={maestro._id}
          className="mb-8 p-6 border rounded-lg shadow-lg bg-white"
        >
          <h2 className="text-3xl font-bold mb-2 text-colorprimary underline hover:text-colorprimarydark">
            <Link
              to={`/pages/evaluaciones/${maestro._id}?facultad=${maestro.facultad._id}`}
            >
              {maestro.nombre}
            </Link>
          </h2>
          <p className="text-lg text-gray-600 mb-4">{maestro.facultad.nombre}</p>
          {maestro.materias.map((materia) => (
            <div
              key={materia._id}
              className="mb-4 p-4 border rounded-lg shadow-md bg-colortertiary"
            >
              <h3 className="text-xl font-semibold mb-2 text-colorprimarydark"> {materia.nombre} </h3>
              <p className="text-md text-gray-500 mb-2"> {materia.carrera.nombre} </p>
              <button
                onClick={() => toggleMateria(materia._id)}
                className="text-blue-500 hover:text-blue-700 font-bold"
              >
                {expandedMaterias[materia._id] ? "Ocultar comentarios" : "Ver comentarios"}
              </button>
              {expandedMaterias[materia._id] && (
                <div className="grid xl:grid-cols-2 gap-1 mt-4">
                  {materia.reviews.map((review) => (
                    <div
                      key={review._id}
                      className="mb-2 p-3 border rounded-lg shadow-sm bg-white"
                    >
                      <p className="text-sm text-gray-700 mb-1">
                        <b>Comentario:</b> {review.comentario}
                      </p>
                      <div className="flex items-center mb-1">
                        <span className="text-sm text-gray-700 mr-2">
                          Claridad del Profesor:
                        </span>
                        {renderStars(review.puntos.claridadProfesor)}
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="text-sm text-gray-700 mr-2">
                          Facilidad de la Clase:
                        </span>
                        {renderStars(review.puntos.facilidadClase)}
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="text-sm text-gray-700 mr-2">
                          Cantidad de Trabajo:
                        </span>
                        {renderStars(review.puntos.cantidadTrabajo)}
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="text-sm text-gray-700 mr-2">
                          Accesibilidad para Ayudar:
                        </span>
                        {renderBooleanIcon(review.accesibilidadAyudar)}
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="text-sm text-gray-700 mr-2">
                          Recomendaría al Profesor:
                        </span>
                        {renderBooleanIcon(review.recomendarProfesor)}
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="text-sm text-gray-700 mr-2">
                          Asistencia Obligatoria:
                        </span>
                        {renderBooleanIcon(review.asistenciaObligatoria)}
                      </div>
                      <p className="text-sm text-gray-500">
                        Fecha: {new Date(review.fecha).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
