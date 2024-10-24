import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "../../hooks";

const initialFormSignUp = {
  userSignUp: "",
  emailSignUp: "",
  passwordSignUp: "",
}

export const FormSignUp = () => {

  useEffect(() => {
    const inputUser = document.getElementById('userSignUp');
    const inputEmail = document.getElementById('emailSignUp');
    const inputPassword = document.getElementById('passwordSignUp');

    const validateEmailUADY = (e) => {
      const emailRegex = /^a\d{8}@alumnos\.uady\.mx$/;
      if (!emailRegex.test(e.target.value)) {
        e.target.setCustomValidity("Para comentar necesitas ser estudiante, ¡usa tu correo institucional!");
      } else {
        e.target.setCustomValidity("");
      }
    };

    const validatePassword = (e) => {
      const password = e.target.value;
      const minLength = 6;
      const specialCharRegex = /[!@#$%^&*(),.?":{}|<>-_]/;
      const numberRegex = /[0-9]/;
      const letterRegex = /[a-zA-Z]/;

      let errorMessage = "";
      if (password.length < minLength) {
        errorMessage = `La contraseña debe tener al menos ${minLength} caracteres.`;
      } else if (!specialCharRegex.test(password)) {
        errorMessage = "La contraseña debe contener al menos un carácter especial.";
      } else if (!numberRegex.test(password)) {
        errorMessage = "La contraseña debe contener al menos un número.";
      } else if (!letterRegex.test(password)) {
        errorMessage = "La contraseña debe contener al menos una letra.";
      }

      e.target.setCustomValidity(errorMessage);
    };
    
    const handleKeyPress = (e) => {
      const spaceRegex = /[\s]/;
      const letterNumsRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9]+$/;
      if (spaceRegex.test(e.key) || !letterNumsRegex.test(e.key)) {
        e.preventDefault(); 
      }
    };

    inputUser.addEventListener('keypress', handleKeyPress);
    inputEmail.addEventListener('input', validateEmailUADY);
    inputPassword.addEventListener('input', validatePassword);

    return () => {
      inputUser.removeEventListener('keypress', handleKeyPress);
      inputEmail.removeEventListener('input', validateEmailUADY);
      inputPassword.removeEventListener('input', validatePassword);
    };
    
  }, [])
  

  const {
    userSignUp,
    emailSignUp,
    passwordSignUp,
    onInputChange,
    onResetForm,
  } = useForm(initialFormSignUp);

  return (
    <form className="form-login sign-up-form">
      <h2 className="title">Registrarse</h2>

      <div className="input-field--login">
      <label htmlFor="userSignUp" className="sr-only">Usuario</label>
        <i>
          <FontAwesomeIcon icon={faUser} />
        </i>
        <input 
          type="text" 
          placeholder="Usuario" 
          name="userSignUp"
          id="userSignUp"
          value={userSignUp}
          onChange={onInputChange}
          autoComplete="username"
        />
      </div>

      <div className="input-field--login">
        <label htmlFor="emailSignUp" className="sr-only">Email</label>
        <i>
          <FontAwesomeIcon icon={faEnvelope} />
        </i>
        <input 
          type="email" 
          placeholder="Email"
          name="emailSignUp"
          id="emailSignUp"
          value={emailSignUp}
          onChange={onInputChange}
          autoComplete="email" 
        />
      </div>

      <div className="input-field--login">
        <label htmlFor="passwordSignUp" className="sr-only">Contraseña</label>
        <i>
          <FontAwesomeIcon className="custom__icon" icon={faLock} />
        </i>
        <input 
          type="password" 
          placeholder="Contraseña"
          name="passwordSignUp"
          id="passwordSignUp"
          value={passwordSignUp}
          onChange={onInputChange}
          autoComplete="new-password" 
        />
      </div>

      <input type="submit" value="Registrarse" className="btn__login solid" />
    </form>
  );
};
