import { Content, Header, ImageSection, Sidebar } from "../components/componentsInicio"

export const Inicio = () => {
  return (
    <div className="MainInicio">
      <Header />
      <div className="containerInicio">
        <Content />
        <ImageSection />
      </div>
    </div>
  )
}
