import "./Topbar.css";

export const Topbar = () => {
  return (
    <div className="topbar">
      <img src="/logoProyecto.ico" alt="Logo" className="logo" />
      <h2>Administrador</h2>
      <div className="profile">
        <a href="#perfil">Perfil </a> |
        <a href="notificaciones">Notificaciones</a>
      </div>
    </div>
  );
};
