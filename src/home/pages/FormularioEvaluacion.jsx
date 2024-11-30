import { useEffect, useState } from "react";
import { DatosGenerales, SegmentedControl, YesNoSegmentedControl } from "../components";
import { useAuthStore, useForm, useReviews } from "../../hooks";
import { showAlert, showErrorAlert, showSuccess } from "../../admin/components";
import { LoadingElement } from "../../helpers/LoadingElement";

const initialFormValues = {
    carreraText: '',
    curso: '',
    profesor: '',
    opinionTextArea: '',
}

export const FormularioEvaluacion = () => {
    const {status, user} = useAuthStore();
    const {startNewReview} = useReviews();
    const {carreraText, curso, profesor, opinionTextArea, onInputChange, onResetForm} = useForm(initialFormValues);
    const [recommendProfessor, setRecommendProfessor] = useState(null);
    const [attendance, setAttendance] = useState(null);
    const [accessibleToHelp, setAccessibleToHelp] = useState(null);
    const [isLoadingAddEvaluation, setIsLoadingAddEvaluation] = useState(false);

    const [ratings, setRatings] = useState({
        claridadProfesor: null,
        facilidadClase: null,
        cantidadTrabajo: null,
    });

    const [valueFacultad, setValueFacultad] = useState('');
    const [valueCarrera, setValueCarrera] = useState('');
    const [valueNombreCurso, setValueNombreCurso] = useState('');
    const [valueNombreMaestro, setValueNombreMaestro] = useState('');

    useEffect(() => {
        if (status === 'not-authenticated') {
            showAlert("Debe de estar autenticado para realizar comentarios!");
        }
    }, [status]);

    // Function to handle the selection for each question
    const handleSelect = (question, rating) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [question]: rating,
        }));
    };

    const resetAllForms = ( ) => {
        onResetForm();
        setRatings({
        claridadProfesor: null,
        facilidadClase: null,
        cantidadTrabajo: null,
        });
        setRecommendProfessor(null);
        setAttendance(null);
        setAccessibleToHelp(null);
        setValueFacultad('');
        setValueCarrera('');
        setValueNombreCurso('');
        setValueNombreMaestro('');
    
    }

    const validateForm = (newReview) => {
        for (const [key, value] of Object.entries(newReview)) {
            if (value === null || value === '' || (typeof value === 'object' && Object.values(value).includes(null))) {
                showErrorAlert(`El campo ${key} es obligatorio.`);
                return false;
            }
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const carreraFinal = (valueCarrera === 'add_new') ? carreraText : valueCarrera;
        const cursoFinal = (valueNombreCurso === 'add_new') ? curso : valueNombreCurso;
        const maestroFinal = (valueNombreMaestro === 'add_new') ? profesor : valueNombreMaestro;

        const newReview = {
            alumno: user.uid,
            carrera: carreraFinal,
            materia: cursoFinal,
            maestro: maestroFinal,
            facultad: valueFacultad,
            recomendarProfesor: (recommendProfessor === 'Sí'),
            asistenciaObligatoria: (attendance === 'Sí'),
            accesibilidadAyudar: (accessibleToHelp === 'Sí'),
            puntos: ratings,
            comentario: opinionTextArea,
        }

        if (!validateForm(newReview)) {
            return;
        }

        try {
            setIsLoadingAddEvaluation(true);
            const msg = await startNewReview(newReview);
            setIsLoadingAddEvaluation(false);
            resetAllForms();
            showSuccess(msg);
        } catch (error) {
            setIsLoadingAddEvaluation(false);
            showErrorAlert(error.message)
        }
    };

    return (
        isLoadingAddEvaluation ? (
            <LoadingElement />
        ) : (
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
                        <form onSubmit={handleSubmit}>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Datos Generales
                            </h6>
                                <DatosGenerales
                                    carreraText={carreraText}
                                    curso={curso}
                                    profesor={profesor}
                                    onInputChange={onInputChange}
                                    valueFacultad={valueFacultad}
                                    setValueFacultad={setValueFacultad}
                                    valueCarrera={valueCarrera}
                                    setValueCarrera={setValueCarrera}
                                    valueNombreCurso={valueNombreCurso}
                                    setValueNombreCurso={setValueNombreCurso}
                                    valueNombreMaestro={valueNombreMaestro}
                                    setValueNombreMaestro={setValueNombreMaestro}
                                />

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
                                            selected={ratings.claridadProfesor}
                                            onSelect={(rating) => handleSelect("claridadProfesor", rating)}
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
                                            selected={ratings.facilidadClase}
                                            onSelect={(rating) => handleSelect("facilidadClase", rating)}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-5">
                                        <label
                                            className="text-customYellow block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                            ¿El profesor es accesible a ayudarte?
                                        </label>
                                        <YesNoSegmentedControl
                                            selected={accessibleToHelp}
                                            onSelect={(answer) => setAccessibleToHelp(answer)}
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
                                            selected={ratings.cantidadTrabajo}
                                            onSelect={(rating) => handleSelect("cantidadTrabajo", rating)}
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
                                            selected={recommendProfessor}
                                            onSelect={(answer) => setRecommendProfessor(answer)}
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
                                            htmlFor="opinionTextArea"
                                            className="text-customYellow block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                            Complementa tu evaluación
                                        </label>
                                        <textarea 
                                            type="text"
                                            id="opinionTextArea"
                                            name="opinionTextArea"
                                            value={opinionTextArea}
                                            onChange={onInputChange}
                                            className="comments mt-3 drop-shadow-lg border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Escribe aquí tus comentarios"
                                            rows="4"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6">
                                <button
                                    disabled = {(status !== 'authenticated')}
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
        )
    );
};
