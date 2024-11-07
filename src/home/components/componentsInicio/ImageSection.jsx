import './ImageSection.css';

export const ImageSection = () => {
  return (
    <div className="image-section">
      <img src="/students_group.jpg" alt="Estudiantes" />
      <div className="buttons">
        <button className="btn-primary">Regístrate y comienza a evaluar</button>
        <button className="btn-primary">Evaluaciones más recientes</button>
      </div>
    </div>
  )
}

