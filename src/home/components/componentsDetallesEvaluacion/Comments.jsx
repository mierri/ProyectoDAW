import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Comments = ({reviews}) => {

  const renderBooleanIcon = (value) => {
    return value ? (
      <FontAwesomeIcon icon={faCheck} className="text-green-500" />
    ) : (
      <FontAwesomeIcon icon={faTimes} className="text-red-500" />
    );
  };
  
  return (
    <div className="comments">
      <h3>Comentarios de Estudiantes</h3>
      {
        reviews?.map((review) => (
          <div className="comment" key={review.fecha}>
            <p><strong> 
              {new Date(review.fecha).toLocaleDateString()} 
              - Recomienda al profesor: {renderBooleanIcon(review.recomendarPorfesor)} 
              - Accesible a ayduar: {renderBooleanIcon(review.accesibilidadAyudar)}
              - Asistencia Obligatoria: {renderBooleanIcon(review.asistenciaObligatoria)}
            </strong></p>
            <p>{review.comentario}</p>
          </div>
        ))
      }
    </div>
  )
}

