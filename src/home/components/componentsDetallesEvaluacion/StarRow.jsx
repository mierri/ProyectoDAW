
export const StarRow = ({ criterio, estrellas }) => {
  return (
    <div className="star-row">
      <p>{criterio}:</p>
      <div>{estrellas}</div>
    </div>
  )
}

