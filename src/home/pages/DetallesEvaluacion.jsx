import { AddEvaluationButton, Comments, GeneralRatings, Header } from "../components/componentsDetallesEvaluacion"

export const DetallesEvaluacion = () => {
  return (
    <div className="containerDetalles">
      <Header />
      <GeneralRatings />
      <Comments />
      <AddEvaluationButton />
    </div>
  )
}
