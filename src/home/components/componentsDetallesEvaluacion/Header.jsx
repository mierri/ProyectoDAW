
export const Header = ({nombremaestro, facultadnombre}) => {
  return (
    <header className="headerDetalles">
      <h1 className="h1Detalles">{nombremaestro}</h1>
      <h2 className="h2Detalles">{facultadnombre}</h2>
    </header>
  )
}

