import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { InfoUser } from "../helpers";

export const NavbarDesktop = ({status, isDisplayUserInfo, toggleDisplayUserInfo}) => {

  return (
    <>
      <div className="flex flex-wrap justify-center items-center bg-white p-4">
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
              className="
                border-2 border-gray-300 p-3 w-[550px] rounded-3xl 
                drop-shadow-lg placeholder-gray-400 text-gray-700 bg-white text-sm shadow 
                focus:outline-none focus:ring ease-linear transition-all duration-150
                pointer-events-none opacity-0
              "
            />
            <span className="pointer-events-none opacity-0 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </form>

          <div className="flex flex-grow basis-0 justify-end relative">
            <button onClick={toggleDisplayUserInfo} type="button" disabled={(status !== 'authenticated')}>
              <FontAwesomeIcon icon={faUserAlt} className="h-7 w-7 text-colorsecondary" />
            </button>
            {(isDisplayUserInfo && (status === 'authenticated')) && <InfoUser />}
          </div>
        </div>

        <div className="flex items-center justify-between w-full border-t-2 border-solid border-colorsecondary mt-3 pt-3">
          <ul className="[&>li>a]:px-3 [&>li>a]:py-1 [&>li>a]:text-colorprimary flex">
            <li>
              <Link to="/" className="hover:text-colorsecondarydark">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/pages/evaluaciones" className="hover:text-colorsecondarydark">
                Evaluaciones
              </Link>
            </li>
            <li>
              <Link to="/pages/evaluaciones/nuevo" className="hover:text-colorsecondarydark">
                Agregar Evaluación
              </Link>
            </li>
          </ul>

          <div className="w-full max-w-72">
            <div className="flex items-center justify-evenly">
              <Link className={`bg-colorsecondary text-white hover:bg-colorsecondarydark py-2 px-4 rounded ${(status === 'authenticated') ? 'pointer-events-none' : ''}`} to='/auth'>
                Iniciar Sesión
              </Link>
              <Link className={`bg-white text-colorprimary border border-colorprimary hover:bg-gray-200 py-2 px-4 rounded ${(status === 'authenticated') ? 'pointer-events-none' : ''}`} to='/auth'>
                Crear Cuenta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};