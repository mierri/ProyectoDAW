import { useState } from "react";

export const SegmentedControl = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (value) => {
        setSelectedOption(value);
    };

    return (
        <div className="w-full flex space-x-1">
            {[1, 2, 3, 4, 5].map((number) => (
                <button
                    key={number}
                    onClick={() => handleSelect(number)}
                    className={`w-full px-4 py-2 rounded ${
                        selectedOption === number ? "bg-customYellow text-black" : "hover:bg-gray-100 bg-white drop-shadow-lg text-gray-600"
                    } focus:outline-none ease-linear transition-all duration-50`}
                    type="button"
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

// eslint-disable-next-line react/prop-types
const YesNoSegmentedControl = ({ selected, onSelect }) => {
    const options = ["Sí", "No"];

    return (
        <div className="w-full flex space-x-1">
            {options.map((option) => (
                <button
                    key={option}
                    onClick={() => onSelect(option)}
                    className={`w-full px-4 py-2 rounded ${
                        selected === option ? "bg-customYellow text-black" : "hover:bg-gray-100 bg-white drop-shadow-lg text-gray-600"
                    } focus:outline-none ease-linear transition-all duration-50`}
                    type="button"
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export const FormularioEvaluacion = () => {

    const [recommendClass, setRecommendClass] = useState(null);
    const [attendance, setAttendance] = useState(null);

    const [ratings, setRatings] = useState({
        question1: null,
        question2: null,
        question3: null,
    });

    // Function to handle the selection for each question
    const handleSelect = (question, rating) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [question]: rating,
        }));
    };

    return (
        <main className="min-h-screen flex font-poppins">
            <div className="w-full lg:w-10/12 px-4 mx-auto mt-2">
                <h1 className="px-3 mt-10 text-4xl font-bold text-left text-customYellow">Comparte tu Experiencia.</h1>
                <p className="px-3 text-md leading-relaxed mt-4 mb-4 text-gray-600 text-justify">
                  Tu opinión es muy importante para ayudar a otros estudiantes a tomar decisiones informadas sobre sus clases y profesores. Tus comentarios pueden marcar la diferencia y contribuir a una mejor experiencia universitaria para todos. ¡Gracias por tomarte el tiempo de compartir tu experiencia!
              </p>
              <div className="mt-10 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-1.5">
                  <div className="rounded-t bg-white mb-0 px-6 py-6">
                      <div className="text-center flex justify-between">
                          <h6 className="text-blueGray-700 text-xl font-bold text-customYellow">
                              Nueva Evaluación
                          </h6>
                      </div>
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <form method="post">
                          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                              Datos Generales
                          </h6>
                          <div className="flex flex-wrap">
                              <div className="w-full lg:w-6/12 px-4">
                                  <div className="relative w-full mb-3">
                                      <label className="text-customYellow block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                          Facultad
                                      </label>
                                      <select
                                          id="faculty-select"
                                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                          defaultValue=""
                                      >
                                          <option value="" disabled>Selecciona una facultad</option>
                                          <option value="curso1">Facultad de Matemáticas</option>
                                          <option value="curso2">Facultad de Ingeniería</option>
                                          <option value="curso3">Facultad de Ingeniería Química</option>
                                      </select>
                                  </div>
                              </div>
                              <div className="w-full lg:w-6/12 px-4">
                                  <div className="relative w-full mb-3">
                                      <label className="text-customYellow block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                          Nombre del Curso
                                      </label>
                                      <select
                                          id="course-select"
                                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                          defaultValue=""
                                      >
                                          <option value="" disabled>Selecciona un curso</option>
                                          <option value="curso1">Curso 1</option>
                                          <option value="curso2">Curso 2</option>
                                          <option value="curso3">Curso 3</option>
                                      </select>
                                  </div>
                              </div>
                              <div className="w-full lg:w-6/12 px-4">
                                  <div className="relative w-full mb-3">
                                      <label
                                          className="text-customYellow block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                          Profesor que impartió el curso
                                      </label>
                                      <select
                                          id="professor-select"
                                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                          defaultValue=""
                                      >
                                          <option value="" disabled>Selecciona a tu profesor</option>
                                          <option value="profe1">Profesor 1</option>
                                          <option value="profe2">Profesor 2</option>
                                          <option value="profe3">Profesor 3</option>
                                      </select>
                                  </div>
                              </div>
                              <div className="w-full lg:w-6/12 px-4">
                                  <div className="relative w-full mb-3">
                                      <label
                                          className="text-customYellow block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                          Carrera
                                      </label>
                                      <select
                                          id="career-select"
                                          className="custom-select border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                          defaultValue=""
                                      >
                                          <option value="" disabled>Selecciona tu carrera</option>
                                          <option value="carrera1">Carrera 1</option>
                                          <option value="carrera2">Carrera 2</option>
                                          <option value="carrera3">Carrera 3</option>
                                      </select>
                                  </div>
                              </div>
                          </div>

                          <hr className="mt-6 border-b-1 border-blueGray-300"/>

                          <h6 className="text-blueGray-400 text-sm mt-3 font-bold uppercase">
                              Calificaciones
                          </h6>
                          <p className="text-sm mb-6 text-gray-700">Considera 1 como &apos;Muy Bajo&apos; y 5 como &apos;Muy Alto&apos;.</p>
                          <div className="flex flex-wrap">
                              <div className="w-full lg:w-6/12 px-4">
                                  <div className="relative w-full mb-5">
                                      <label
                                          className="text-customYellow block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                          ¿Qué tan claro fue el profesor?
                                      </label>
                                      <SegmentedControl
                                          selected={ratings.question1}
                                          onSelect={(rating) => handleSelect("question1", rating)}
                                      />
                                  </div>
                              </div>
                              <div className="w-full lg:w-6/12 px-4">
                                  <div className="relative w-full mb-5">
                                      <label
                                          className="text-customYellow block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                          ¿Cuál fue la facilidad de la clase?
                                      </label>
                                      <SegmentedControl
                                          selected={ratings.question2}
                                          onSelect={(rating) => handleSelect("question2", rating)}
                                      />
                                  </div>
                              </div>
                              <div className="w-full lg:w-6/12 px-4">
                                  <div className="relative w-full mb-5">
                                      <label
                                          className="text-customYellow block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                          ¿El profesor es accesible a ayudarte?
                                      </label>
                                      <SegmentedControl
                                          selected={ratings.question2}
                                          onSelect={(rating) => handleSelect("question2", rating)}
                                      />
                                  </div>
                              </div>
                              <div className="w-full lg:w-6/12 px-4">
                                  <div className="relative w-full mb-5">
                                      <label
                                          className="text-customYellow block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                          ¿Cuál fue la cantidad de trabajo?
                                      </label>
                                      <SegmentedControl
                                          selected={ratings.question3}
                                          onSelect={(rating) => handleSelect("question3", rating)}
                                      />
                                  </div>
                              </div>
                              <div className="w-full lg:w-6/12 px-4">
                                  <div className="relative w-full mb-5">
                                      <label
                                          className="text-customYellow block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                          ¿Recomendarías al profesor?
                                      </label>
                                      <YesNoSegmentedControl
                                          selected={recommendClass}
                                          onSelect={(answer) => setRecommendClass(answer)}
                                      />
                                  </div>
                              </div>
                              <div className="w-full lg:w-6/12 px-4">
                                  <div className="relative w-full mb-5">
                                      <label
                                          className="text-customYellow block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                          ¿La asistencia es obligatoria?
                                      </label>
                                      <YesNoSegmentedControl
                                          selected={attendance}
                                          onSelect={(answer) => setAttendance(answer)}
                                      />
                                  </div>
                              </div>
                          </div>


                          <hr className="mt-6 border-b-1 border-blueGray-300"/>

                          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                              Comentarios adicionales
                          </h6>
                          <div className="flex flex-wrap">
                              <div className="w-full lg:w-12/12 px-4">
                                  <div className="relative w-full mb-3">
                                      <label
                                          className="text-customYellow block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                          Complementa tu evaluación
                                      </label>
                                      <textarea type="text"
                                                className="comments mt-3 drop-shadow-lg border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Escribe aquí tus comentarios"
                                                rows="4"></textarea>
                                  </div>
                              </div>
                          </div>
                          <div className="flex justify-center mt-6">
                              <button
                                  type="submit"
                                  className="boton-enviar text-white active:bg-green-600 font-bold uppercase text-md px-10 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                              >
                                  Enviar
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </main>
  );
};
