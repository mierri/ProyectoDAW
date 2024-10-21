export const BurgerIcon = ({ clicked, handleClick }) => {

    return (
      <div onClick={handleClick} className={`nav-icon ${clicked ? 'open' : ''} `}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  };