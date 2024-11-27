import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { handleKeyPress, showErrorAlert, showSuccess, validateUser } from "./helpers";
import { useAuthStore, useForm } from "../../hooks";

const initialFormSingUp = {
  userSignIn: "",
  passwordSignIn: "",
}

const formValidations = {
  userSignIn: [(value) => value.trim() !== '', 'El usuario es obligatorio'],
  passwordSignIn: [(value) => value.trim() !== '', 'La contraseña es obligatoria'],
}

export const FormSignIn = () => {
  const [visibilityPassword, setVisibilityPassword] = useState(false);
  const {startLogin, errorMessage} = useAuthStore();

  useEffect(() => {
    if (errorMessage !== undefined) {
      showErrorAlert(errorMessage);
    }
  }, [errorMessage])

  const {
    userSignIn,
    passwordSignIn,
    onInputChange,
    onResetForm,
    isFormValid,
  } = useForm(initialFormSingUp, formValidations);

  const onSubmitFormSignIn = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      showErrorAlert('Todos los campos son obligatorios');
      return;
    };

    const validations = [
      { valid: validateUser(userSignIn), message: 'Ingrese un usuario válido, solo letras y números' },
    ]

    for (const { valid, message } of validations) {
      if (!valid) {
        showErrorAlert(message);
        return;
      }
    }

    const userAccount = {
      username: userSignIn,
      password: passwordSignIn,
    }

    const msg = await startLogin(userAccount);
  };

  const toggleVisibilityPassword = () => {
    setVisibilityPassword(!visibilityPassword);
  };

  return (
    <form onSubmit={onSubmitFormSignIn} className="form-login sign-in-form">
      <h2 className="title">Iniciar Sesión</h2>

      <div className="input-field--login">
        <i>
          <FontAwesomeIcon icon={faUser} />
        </i>
        <input 
          type="text" 
          placeholder="Usuario" 
          name="userSignIn" 
          id="userSignIn" 
          value={userSignIn} 
          onChange={onInputChange}
          onKeyDown={handleKeyPress}
          autoComplete="username"
        />
      </div>

      <div className="input-field--login">
        <i>
          <FontAwesomeIcon className="custom__icon" icon={faLock} />
        </i>
        <input 
          type={visibilityPassword ? 'text' : 'password'} 
          placeholder="Contraseña" 
          name="passwordSignIn" 
          id="passwordSignIn" 
          value={passwordSignIn}
          onChange={onInputChange}
          autoComplete="current-password"
        />
        <i>
          <span onClick={toggleVisibilityPassword} className="cursor-pointer p-3" role="button">
            {visibilityPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
          </span>
        </i>
      </div>

      <input
        type="submit"
        value="Iniciar Sesión"
        className="btn__login solid"
      />
    </form>
  );
};
