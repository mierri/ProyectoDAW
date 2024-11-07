import './Sidebar.css';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Navegación</h2>
      <ul>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#gestionar-evaluaciones">Gestionar Evaluaciones</a></li>
        <li><a href="#gestionar-usuarios">Gestionar Usuarios</a></li>
        <li><a href="#base-datos">Base de Datos Cursos/Profesores</a></li>
        <li><a href="#configuraciones">Configuraciones</a></li>
      </ul>
  </div>
  )
}