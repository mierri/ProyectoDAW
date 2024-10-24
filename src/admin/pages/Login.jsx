import { useEffect } from "react";
import { FormSignIn, FormSignUp } from "../components";

export const Login = () => {

  useEffect(() => {
    const sign_in_btn = document.getElementById("sign-in-btn");
    const sign_up_btn = document.getElementById("sign-up-btn");
    const container = document.querySelector(".container--login");

    const handleSignUpClick = () => {
      container.classList.add("sign-up-mode");
    };

    const handleSignInClick = () => {
      container.classList.remove("sign-up-mode");
    };

    sign_up_btn.addEventListener('click', handleSignUpClick);
    sign_in_btn.addEventListener('click', handleSignInClick);

    return () => {
      sign_up_btn.removeEventListener('click', handleSignUpClick);
      sign_in_btn.removeEventListener('click', handleSignInClick);
    };
  }, []);
  


  return (
    <div className="container--login">
      <div className="forms__container--login">
        <div className="signin__signup">
          <FormSignIn />

          <FormSignUp />
        </div>
      </div> 

      <div className="panels__container">
        <div className="panel left-panel">
          <div className="content--auth-form">
            <h3>¿Nuevo aquí?</h3>
            <p>¡Regístrate y ayuda a tus compañeros!</p>
            <button className="btn__login transparent" id="sign-up-btn">Registrarse</button>
          </div>
          <img src="/log2.svg" className="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content--auth-form">
            <h3>¿Ya tienes una cuenta?</h3>
            <p>Inicia sesión para continuar</p>
            <button className="btn__login transparent" id="sign-in-btn">Iniciar sesión</button>
          </div>
          <img src="/log.svg" className="image" alt="" />
        </div>  
      </div>
    </div>
  );
};
