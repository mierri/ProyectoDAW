import { StarRow } from "./StarRow"


export const GeneralRatings = () => {
  return (
    <div className="general-ratings">
      <div className="average-rating">
        <p>Promedio General: ⭐ 4.5 de 5</p>
      </div>
      <div className="star-chart">
        <h3>Gráfico de estrellas por número de evaluaciones</h3>
        <StarRow criterio="Criterio 1" estrellas="⭐⭐⭐⭐⭐" />
        <StarRow criterio="Criterio 2" estrellas="⭐⭐⭐⭐" />
        <StarRow criterio="Criterio 3" estrellas="⭐⭐⭐" />
        <StarRow criterio="Criterio 4" estrellas="⭐⭐" />
        <StarRow criterio="Criterio 5" estrellas="⭐" />
        <StarRow criterio="Criterio 6" estrellas="⭐⭐⭐⭐⭐" />
      </div>
    </div>
  )
}

