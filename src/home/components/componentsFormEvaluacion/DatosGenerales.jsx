import { useEffect, useState } from "react";
import { useSearches } from "../../../hooks";

export const DatosGenerales = ({
    carreraText, 
    curso,
    profesor,
    onInputChange,
    valueFacultad,
    setValueFacultad,
    valueCarrera,
    setValueCarrera,
    valueNombreCurso,
    setValueNombreCurso,
    valueNombreMaestro,
    setValueNombreMaestro,
}) => {

    const {
        startSearchFacultades,
        startSearchCarreras,
        startSearchMaterias,
        startSearchMaestros,
    } = useSearches();

    const [facultades, setFacultades] = useState([]);
    const [carreras, setCarreras] = useState([]);
    const [materias, setMaterias] = useState([]);
    const [maestros, setMaestros] = useState([]);

    const [isAddingCarrera, setIsAddingCarrera] = useState(false);
    const [isAddingMateria, setIsAddingMateria] = useState(false);
    const [isAddingMaestro, setIsAddingMaestro] = useState(false);

    useEffect(() => {
        const loadFacultades = async () => {
            const data = await startSearchFacultades();
            setFacultades(data);
        };
        loadFacultades();
    }, []);

    const handleFacultadChange = async (value) => {
        setValueFacultad(value);
        const data = await startSearchCarreras(value);
        setCarreras(data);
    };

    const handleCarreraChange = async (value) => {
        setValueCarrera(value);
        if (value === "add_new") {
            setIsAddingCarrera(true);
            return;
        }
        const data = await startSearchMaterias(value);
        setMaterias(data);
    };

    const handleMateriaChange = async (value) => {
        setValueNombreCurso(value);
        if (value === "add_new") {
            setIsAddingMateria(true);
            return;
        }
        const data = await startSearchMaestros(value);
        setMaestros(data);
    };

    const handleMaestroChange = (value) => {
        setValueNombreMaestro(value);
        if (value === "add_new") {
            setIsAddingMaestro(true);
        }
    };

    return (
        <div className="flex flex-wrap">
            {/* Facultad */}
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                    <label className="text-customYellow block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Facultad
                    </label>
                        <select
                            defaultValue={valueFacultad}
                            onChange={(e) => handleFacultadChange(e.target.value)}
                            className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        >
                            <option value='' disabled>
                                Selecciona una facultad
                            </option>
                            {facultades.map((facultad) => (
                                <option key={facultad._id} value={facultad._id}>
                                    {facultad.nombre}
                                </option>
                            ))}
                        </select>
                </div>
            </div>

            {/* Carrera */}
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                    <label className="text-customYellow block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Carrera
                    </label>
                    {isAddingCarrera ? (
                        <input
                            type="text"
                            id="carreraText"
                            name="carreraText"
                            value={carreraText}
                            onChange={onInputChange}
                            placeholder="Ingresa una nueva carrera"
                            className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        />
                    ) : (
                        <select
                            defaultValue={valueCarrera}
                            onChange={(e) => handleCarreraChange(e.target.value)}
                            className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        >
                            <option value='' disabled>
                                Selecciona una carrera
                            </option>
                            {carreras.map((carrera) => (
                                <option key={carrera._id} value={carrera._id}>
                                    {carrera.nombre}
                                </option>
                            ))}
                            <option value="add_new">Agregar nueva carrera</option>
                        </select>
                    )}
                </div>
            </div>

            {/* Materia */}
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                    <label className="text-customYellow block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Nombre del Curso
                    </label>
                    {isAddingMateria ? (
                        <input
                            type="text"
                            id="curso"
                            name="curso"
                            value={curso}
                            onChange={onInputChange}
                            placeholder="Ingresa una nueva materia"
                            className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        />
                    ) : (
                        <select
                            defaultValue={valueNombreCurso}
                            onChange={(e) => handleMateriaChange(e.target.value)}
                            className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        >
                            <option value='' disabled>
                                Selecciona una materia
                            </option>
                            {materias.map((materia) => (
                                <option key={materia._id} value={materia._id}>
                                    {materia.nombre}
                                </option>
                            ))}
                            <option value="add_new">Agregar nueva materia</option>
                        </select>
                    )}
                </div>
            </div>

            {/* Maestro */}
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                    <label className="text-customYellow block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Profesor que impartió el curso
                    </label>
                    {isAddingMaestro ? (
                        <input
                            type="text"
                            id="profesor"
                            name="profesor"
                            value={profesor}
                            onChange={onInputChange}
                            placeholder="Ingresa un nuevo maestro"
                            className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        />
                    ) : (
                        <select
                            defaultValue={valueNombreMaestro}
                            onChange={(e) => handleMaestroChange(e.target.value)}
                            className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        >
                            <option value='' disabled>
                                Selecciona un maestro
                            </option>
                            {maestros.map((maestro) => (
                                <option key={maestro._id} value={maestro._id}>
                                    {maestro.nombre}
                                </option>
                            ))}
                            <option value="add_new">Agregar nuevo maestro</option>
                        </select>
                    )}
                </div>
            </div>
        </div>
    );
};
