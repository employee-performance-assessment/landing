import './Header.css';
import Letter from '../Letter/Letter'
const Header = () => {


  return (
    <header className="header">
      <h1 className="header__pouring">
        {'Welldone'.split('').map((item, i) => <Letter letter={item} id={i}/>)}
      </h1>
      <p className="header__description">
        Соберите все данные о ваших сотрудниках в одном месте и постройте
        эффективную команду
      </p>
      <a href='#' className="header__link">Перейти на сайт</a>
    </header>
  );
};

export default Header;
