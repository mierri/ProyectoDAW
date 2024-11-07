import { Link } from 'react-router-dom';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Navegación</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/gestionar-evaluaciones">Gestionar Evaluaciones</Link></li>
        <li><Link to="/gestionar-usuarios">Gestionar Usuarios</Link></li>
        <li><Link to="/base-datos">Base de Datos Cursos/Profesores</Link></li>
        <li><Link to="/configuraciones">Configuraciones</Link></li>
        <li><Link to="/">Ir al proyecto</Link></li>
      </ul>
    </div>
  )
}