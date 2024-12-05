import './Content.css';

export const Content = () => {
  return (
    <div className="content">
      <div className="purpose">
        <h2>
          <span className="yellow"><b>Nuestro</b></span> <span className="blue"><b>Propósito</b></span>
        </h2>
        <p>
          En cada período académico, los estudiantes enfrentan el reto de seleccionar cursos y profesores sin suficiente información. Nuestra plataforma centraliza las evaluaciones y opiniones de los estudiantes, ayudándote a tomar decisiones más informadas y ajustadas a tus intereses y estilo de aprendizaje.
        </p>
      </div>
      <div className="latest-evaluations">
        <h2>
          <span className="blue"><b>Últimas</b></span> <span className="yellow"><b>Evaluaciones</b></span>
        </h2>
        <p>
          Consulta las opiniones más recientes de tus compañeros sobre cursos y profesores. Conoce sus experiencias y aprovecha esta información para tomar decisiones informadas que se ajusten a tus metas académicas.
        </p>
      </div>
    </div>
  );
};

