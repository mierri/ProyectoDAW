import { useAuthStore } from "../../../hooks";
import { showErrorAlert, showSuccess } from "../../../admin";
import Swal from "sweetalert2";


export const InfoUser = () => {
    const {user, startLogout, startDeleteAccount} = useAuthStore();

    const handleDeleteAccount = async (uid) => {
        try {
          const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar cuenta',
            cancelButtonText: 'Cancelar'
          });
    
          if (result.isConfirmed) {
            const msg = await startDeleteAccount(uid);
            showSuccess(msg);
            startLogout();
          }
        } catch (error) {
          showErrorAlert(error?.message);
        }
      };

    return (
    <div className="absolute top-full mt-2 right-0 w-64 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
        <p className="text-colorprimary font-semibold mb-2">Hola, {user.username}</p>
        <button
          type="button"
          className="w-full bg-colorsecondary text-white py-2 px-4 rounded hover:bg-colorsecondarydark mb-2"
          onClick={startLogout}
        >
          Cerrar Sesión
        </button>
        <button
          type="button"
          className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
          onClick={() => handleDeleteAccount(user.uid)}
        >
          Eliminar cuenta
        </button>
    </div>
    );
};
