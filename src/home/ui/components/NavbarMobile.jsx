import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { BurgerIcon } from "../helpers/BurgerIcon";

export const NavbarMobile = () => {
  const [clicked, setClicked] = useState(false);

  const handleNegativeClick = () => {
    setClicked(false);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setClicked(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickNotModal = (event) => {
      const modal = document.getElementById("menu__modal");
      const burgerIcon = document.getElementById("burger-icon");
      if (modal && burgerIcon) {
        if (!modal.contains(event.target) && !burgerIcon.contains(event.target)) {
          setClicked(false);
        }
      }
    };
    window.addEventListener("click", handleClickNotModal);
    return () => window.removeEventListener("click", handleClickNotModal);
  }, []);

  return (
    <>
      <div className="flex flex-wrap bg-white p-4">
        <div className="flex items-center flex-grow">
          <a href="/">
            <img src="/logoProyecto.ico" alt="logo" className="h-14 w-14" />
          </a>
        </div>

        <div className="burguer" id="burger-icon">
          <BurgerIcon clicked={clicked} handleClick={handleClick} />
        </div>

        <div className="w-full border-t-2 border-solid border-colorsecondary mt-3">
          <form className="mt-4 relative">
            <input
              type="text"
              placeholder="Buscar"
              id="buscar"
              name="buscar"
              className="
                border-2 border-gray-300 p-3 w-full rounded-3xl
                drop-shadow-lg placeholder-gray-400 text-gray-700 bg-white text-sm 
                shadow focus:outline-none focus:ring ease-linear transition-all duration-150  
              "
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </form>
        </div>
      </div>

      <div className={`menu__modal ${clicked ? 'active' : ''} p-5 bg-white`} id="menu__modal">
        <div className="flex flex-wrap">
          <div className="flex items-center flex-grow">
            <a href="/">
              <img src="/logoProyecto.ico" alt="logo" className="h-14 w-14" />
            </a>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faTimes}
              size="3x"
              className="text-colorprimary"
              onClick={handleClick}
            />
          </div>
        </div>

        <div className="mt-2">
          <ul className="[&>li>a]:px-3 [&>li>a]:py-1 [&>li>a]:text-colorprimary nav__li hActive block space-y-4">
            <li>
              <Link onClick={handleNegativeClick} to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link onClick={handleNegativeClick} to="/pages/evaluaciones">
                Evaluaciones
              </Link>
            </li>
            <li>
              <Link onClick={handleNegativeClick} to="/pages/evaluaciones/nuevo">
                Agregar Evaluación
              </Link>
            </li>
          </ul>

          <div className="mt-10 flex items-center justify-center">
            <div className="flex items-center justify-evenly flex-wrap w-full max-w-sm">
              <Link className="bg-colorsecondary text-colortertiary hover:bg-colorsecondarydark py-2 px-4 rounded mt-5" to='/auth'>
                Iniciar Sesión
              </Link>
              <Link className="bg-colortertiary text-colorprimary border border-colorprimary hover:bg-gray-200 py-2 px-4 rounded mt-5" to='/auth'>
                Crear Cuenta
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <FontAwesomeIcon icon={faUserAlt} className="h-7 w-7 text-colorprimary" />
        </div>
      </div>
    </>
  );
};