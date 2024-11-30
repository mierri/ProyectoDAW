import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearches } from "../../../hooks";

export const AllFacultades = ({searchTerm}) => {
  const { maestrosPorFacultades } = useSearches();
  const [maestrosPorFacultadesModificable, setMaestrosPorFacultadesModificable] = useState([]);

  useEffect(() => {
    setMaestrosPorFacultadesModificable(maestrosPorFacultades)
  }, [maestrosPorFacultades])
  
  const filteredFacultades = maestrosPorFacultadesModificable.map((facultad) => {
    const filteredMaestros = facultad.maestros.filter(({ maestro }) =>
      maestro.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      ...facultad,
      maestros: filteredMaestros,
    };
  }).filter((facultad) => {
    const matchesFacultad = facultad.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFacultad || facultad.maestros.length > 0;
  });


  return (
    <div className="container mx-auto p-4">
      {filteredFacultades.map((facultad) => (
        <div key={facultad._id} className="mb-8 p-6 border rounded-lg shadow-lg bg-white">
          <h2 className="text-3xl font-bold mb-4 text-colorprimary">{facultad.nombre}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {facultad.maestros.map(({ maestro }) => (
              <div key={maestro._id} className="p-4 border rounded-lg shadow-md bg-colortertiary">
                <h3 className="text-xl font-semibold mb-2 text-colorprimarydark">{maestro.nombre}</h3>
                <Link
                  to={`/pages/evaluaciones/${maestro._id}?facultad=${facultad._id}`}
                  className="text-customYellow hover:text-colorsecondarydark font-bold"
                >
                  Ver detalles
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};