import { useDispatch, useSelector } from "react-redux";
import reviewsApi from "../api/reviewsApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async (userAccount) => {
    dispatch(onChecking());
    try {
    const { data } = await reviewsApi.post("/auth", userAccount);
    localStorage.setItem("token", data.token);
    dispatch(onLogin(data.user));
    return data.msg;

    } catch (error) {
        dispatch( onLogout('Credenciales incorrectas') );
        
        setTimeout(() => {
            dispatch( clearErrorMessage() );
        }, 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        dispatch(onLogout());
        return;
    }

    try {
      const { data } = await reviewsApi.get("/auth/renew");
      localStorage.setItem("token", data.token);
      dispatch(onLogin({uid: data.uid, username: data.username}));

    } catch (error) {
        localStorage.clear();
      dispatch(onLogout());
    }
  }

  const startRegisterAccount = async ( newAccount ) => {
    try {
      const { data } = await reviewsApi.post("/auth/new", newAccount);
      return data.msg;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.msg);
        } else {
            throw new Error("Ha ocurrido un error");
        }
    }
  }

  const startDeleteAccount = async (uid) => {
    try {
      const { data } = await reviewsApi.delete('/auth', {uid});
      return data.msg;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.msg);
      } else {
        throw new Error("Ha ocurrido un error");
      }
    }
  }

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    //* Propiedades
    status,
    user,
    errorMessage,

    //* Métodos
    startLogin,
    checkAuthToken,
    startLogout,
    startRegisterAccount,
    startDeleteAccount,
  };
};