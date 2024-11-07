import { useState, useRef, useEffect } from "react";

export const Evaluaciones = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [activeTab, setActiveTab] = useState("Profesores");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <main className="min-h-screen flex font-poppins">
            <div className="w-full lg:w-10/12 px-4 mx-auto mt-2">
                <h1 className="px-3 mt-10 text-4xl font-bold text-left text-customYellow">Descubre que opinan tus
                    compañeros.</h1>
                <p className="px-3 text-md leading-relaxed mt-4 mb-4 text-gray-600 text-justify">
                    Encuentra evaluaciones honestas de cursos y profesores de estudiantes como tú. Usa los filtros para
                    personalizar tu búsqueda y leer comentarios que te ayudarán a tomar decisiones informadas.
                </p>
                <div className="w-full md:w-6/12 lg:w-8/12 mx-auto">
                    <ul className="flex mt-10 flex-wrap text-sm font-medium text-center text-gray-500">
                        <li>
                            <button
                                onClick={() => handleTabClick("Profesores")}
                                className={`inline-block py-2.5 px-3.5 rounded-t-lg ${
                                    activeTab === "Profesores"
                                        ? "text-black bg-customYellow"
                                        : "text-white bg-hoverBlue hover:bg-customBlue"
                                }`}
                            >
                                Profesores
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleTabClick("Facultades")}
                                className={`inline-block p-2.5 rounded-t-lg ${
                                    activeTab === "Facultades"
                                        ? "text-black bg-customYellow"
                                        : "text-white bg-hoverBlue hover:bg-customBlue"
                                }`}
                            >
                                Facultades
                            </button>
                        </li>
                    </ul>

                    <div className="flex">
                        <button id="dropdown-button"
                                ref={dropdownRef}
                                onClick={handleDropdownToggle}
                                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-5 text-sm font-medium text-white bg-hoverBlue rounded-bl-lg hover:bg-customBlue"
                                type="button">Ordenar por
                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div id="dropdown"
                                 className="z-10 bg-hoverBlue rounded-lg shadow w-auto absolute mt-12"
                                 ref={dropdownRef}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                    <li>
                                        <button type="button"
                                                className="inline-flex w-full px-4 py-2 hover:bg-customBlue">
                                            Mejores calificaciones
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button"
                                                className="inline-flex w-full px-4 py-2 hover:bg-customBlue">
                                            Más recientes
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button"
                                                className="inline-flex w-full px-4 py-2 hover:bg-customBlue">
                                            A-Z
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button"
                                                className="inline-flex w-full px-4 py-2 hover:bg-customBlue">
                                            Z-A
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        <div className="relative w-full">
                            <input type="search" id="search-dropdown"
                                   className="block p-2.5 w-full z-20 text-sm text-white bg-hoverBlue rounded-e-lg border-s-customBlue border-s-2 focus:outline-none"
                                   placeholder="Busca Profesores, Clases o Facultades..." required/>
                            <button type="submit"
                                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-customYellow rounded-e-lg hover:bg-customBlue">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                    <h2 className="mt-10 text-3xl font-bold text-left text-customYellow">Resultados: </h2>
                </div>
            </div>
        </main>
    );
};
