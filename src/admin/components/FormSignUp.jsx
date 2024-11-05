import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faEyeSlash, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "../../hooks";
import { handleKeyPress, showErrorAlert, showSuccess, validateEmailUADY, validatePassword, validateUser } from "./";

const initialFormSignUp = {
  userSignUp: "",
  emailSignUp: "",
  passwordSignUp: "",
};

const formValidations = {
  userSignUp: [(value) => value.trim() !== '', 'El usuario es obligatorio'],
  emailSignUp: [(value) => value.trim() !== '', 'El correo es obligatorio'],
  passwordSignUp: [(value) => value.trim() !== '', 'La contraseña es obligatoria'],
};

export const FormSignUp = () => {
  const [visibilityPassword, setVisibilityPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const {
    userSignUp,
    emailSignUp,
    passwordSignUp,
    onInputChange,
    onResetForm,
    isFormValid,
  } = useForm(initialFormSignUp, formValidations);

  const handleEmailChange = (e) => {
    const email = e.target.value.trim();
    setErrorEmail(email && !validateEmailUADY(email));
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPasswordError(password ? validatePassword(password) : "");
  };

  const handlePasswordBlur = (e) => {
    const password = e.target.value;
    if (password === '') setPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isFormValid){
      showErrorAlert('Todos los campos son obligatorios');
      return;
    }

    const validations = [
      { valid: validateUser(userSignUp), message: 'Ingrese un usuario válido, solo letras y números' },
      { valid: validateEmailUADY(emailSignUp), message: 'Ingrese un correo institucional válido' },
      { valid: !validatePassword(passwordSignUp), message: 'Ingrese una contraseña válida' }
    ]

    for (const { valid, message } of validations) {
      if (!valid) {
        showErrorAlert(message);
        return;
      }
    }

    showSuccess('Se ha realizado su registro!');
    onResetForm();
    // TODO: implementar envío de formulario
  };

  const toggleVisibilityPassword = () => {
    setVisibilityPassword(!visibilityPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="form-login sign-up-form">
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
          onKeyDown={handleKeyPress}
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
          onBlur={handleEmailChange}
          autoComplete="email"
        />
        {errorEmail && <p className="error-message">Para comentar necesitas ser estudiante, ¡usa tu correo institucional!</p>}
      </div>

      <div className="input-field--login">
        <label htmlFor="passwordSignUp" className="sr-only">Contraseña</label>
        <i>
          <FontAwesomeIcon className="custom__icon" icon={faLock} />
        </i>
        <input
          type={visibilityPassword ? 'text' : 'password'}
          placeholder="Contraseña"
          name="passwordSignUp"
          id="passwordSignUp"
          value={passwordSignUp}
          onChange={(e) => {
            onInputChange(e);
            handlePasswordChange(e);
          }}
          onBlur={handlePasswordBlur}
          autoComplete="new-password"
        />
        <i>
          <span onClick={toggleVisibilityPassword} className="cursor-pointer p-3" role="button">
            {visibilityPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
          </span>
        </i>
        {passwordError && <p className="error-message">{passwordError}</p>}
      </div>

      <input type="submit" value="Registrarse" className="btn__login solid" />
    </form>
  );
};