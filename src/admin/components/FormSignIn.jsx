import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useForm } from "../../hooks";

const initialFormSingUp = {
  userSignIn: "",
  passwordSignIn: "",
}

export const FormSignIn = () => {

  const {
    userSignIn,
    passwordSignIn,
    onInputChange,
    onResetForm,
  } = useForm(initialFormSingUp);

  const onSubmitFormSignIn = ( event ) => {
    event.preventDefault();

    if ( userSignIn.trim() === '' || passwordSignIn.trim() === '' ) {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos son obligatorios',
        icon:'error',
        timer: 1500,
        showConfirmButton: false,
      });
      return;
    };

    // TODO: Implementar lógica de inicio de sesión

    console.log({ userSignIn, passwordSignIn });
  
  }


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
          autoComplete="username"
        />
      </div>

      <div className="input-field--login">
        <i>
          <FontAwesomeIcon className="custom__icon" icon={faLock} />
        </i>
        <input 
          type="password" 
          placeholder="Contraseña" 
          name="passwordSignIn" 
          id="passwordSignIn" 
          value={passwordSignIn}
          onChange={onInputChange}
          autoComplete="current-password"
        />
      </div>

      <input
        type="submit"
        value="Iniciar Sesión"
        className="btn__login solid"
      />
    </form>
  );
};
