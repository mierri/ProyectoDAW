import { Link } from 'react-router-dom';
import './ImageSection.css';

export const ImageSection = () => {
  return (
    <div className="image-section">
      <div className="image-container">
        <img src="/students_group.jpg" alt="Estudiantes" />
        <img src="/uady_image.jpg" alt="UADY" />
      </div>
      <div className="buttons">
        <Link to={'/auth'}>
          <button className="btn-primary">Regístrate y comienza a evaluar</button>
        </Link>
        <Link to={'/pages/evaluaciones'}>
          <button className="btn-primary">Evaluaciones más recientes</button>
        </Link>
      </div>
    </div>
  );
};

