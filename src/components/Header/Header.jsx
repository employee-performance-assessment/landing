import './Header.css';
const Header = () => {
  return (
    <header className="header">
      <h1 className="header__pouring">
        <p className="header__text">W</p>
        <p className="header__text">e</p>
        <p className="header__text">l</p>
        <p className="header__text">l</p>
        <p className="header__text">D</p>
        <p className="header__text">o</p>
        <p className="header__text">n</p>
        <p className="header__text">e</p>
      </h1>
      <p className="header__description">
        Соберите все данные о ваших сотрудниках в одном месте и постройте
        эффективную команду
      </p>
      <p className="header__link">Перейти на сайт</p>
    </header>
  );
};

export default Header;
