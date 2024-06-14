import './Main.css';
import team from '../../images/team.svg';
const Main = () => {
  return (
    <main className="main">
      <div className="place">
        <div className="place__title">Вы попали в нужное место, если</div>
        <p className="place__description">
          Не понятно, сколько ваш сотрудник выполняет задач и какую ценность он
          приносит компании?
        </p>
        <p className="place__description place__description_yellow">
          Сложно отследить, насколько эффективно он работает в команде и какие
          у него навыки общения.
        </p>
      </div>
      <div className="you-get">
        <div className="you-get__title">Вы получите</div>
        <div className="you-get__table">
          <div className="you-get__cell">
            <p className="you-get__number">01</p>
            <p className="you-get__description">
              Эффективную команду на основе аналитики и кросс-опросов.
            </p>
          </div>
          <div className="you-get__cell">
            <p className="you-get__number">02</p>
            <p className="you-get__description">
              Выявление проблем коммуникации в команде.
            </p>
          </div>
          <div className="you-get__cell">
            <p className="you-get__number">03</p>
            <p className="you-get__description">
              Контроль и ясность всех задач через единую канбан-доску.
            </p>
          </div>
          <div className="you-get__cell">
            <p className="you-get__number">04</p>
            <p className="you-get__description">
              Удобство использования, как у вашего личного журнала записей.
            </p>
          </div>
          <div className="you-get__cell">
            <p className="you-get__number">05</p>
            <p className="you-get__description">
              Экономию до 100 000 ₽ на малоэффективных сотрудниках.
            </p>
          </div>
        </div>
      </div>

      <div className="suitable">
        <div className="suitable__title">Вы попали в нужное место, если</div>
        <p className="suitable__description">
          Удалённым командам до 10 человек. IT, маркетингу, агентствам,
          заказчикам и фрилансерам.
        </p>
        <img
          className="suitable__description_image"
          src={team}
          alt="рисунок дружной команды"
        />
      </div>
    </main>
  );
};

export default Main;
