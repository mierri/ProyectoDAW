import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserAlt } from "@fortawesome/free-solid-svg-icons";

export const NavbarDesktop = () => {

  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex items-center flex-grow">
            <div className="flex flex-grow basis-0">
                <a href="/">
                    <img src="/logoProyecto.ico" alt="logo" className="h-14 w-14" />
                </a>
            </div>

            <form className="relative">
                <input
                    type="text"
                    placeholder="Buscar"
                    id="buscar"
                    name="buscar"
                    className="border-2 border-gray-300 p-3 w-[550px] rounded-3xl"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FontAwesomeIcon icon={faSearch} />
                </span>
            </form>

            <div className="flex flex-grow basis-0 justify-end">
                <FontAwesomeIcon icon={faUserAlt} className="h-7 w-7" />
            </div>
        </div>

        <div className="flex items-center justify-between w-full border-t-2 border-solid border-x-slate-400 mt-3 pt-3">

            <ul className="[&>li>a]:px-3 [&>li>a]:py-1 [&>li>a]:text-black flex">
                <li>
                    <Link to="/">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link  to="/pages/evaluaciones">
                        Evaluaciones
                    </Link>
                </li>
                <li>
                    <Link to="/pages/evaluaciones/nuevo">
                        Agregar Evaluación
                    </Link>
                </li>
            </ul>

            <div className="w-full max-w-72">
                <div className="flex items-center justify-evenly">
                    <Link className="btn__Black" to='/login'>Iniciar Sesión</Link>
                    <Link className="btn__white" to='/login'>Crear Cuenta</Link>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
