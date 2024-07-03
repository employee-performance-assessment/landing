import { useState } from 'react';
import './Main.css';
import team from '../../images/team.svg';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import img5 from '../../images/img5.png';
import img6 from '../../images/img6.png';
import img7 from '../../images/img7.png';
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Card';
import githubIco from '../../images/ico-github.png';
import mailIco from '../../images/ico-mail.png';
const Main = () => {
  return (
    <main className="main">
      <div className="place">
        <h2 className="place__title">Вы попали в нужное место, если</h2>
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
        <h2 className="you-get__title">Вы получите</h2>
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
        <h2 className="suitable__title">Вы попали в нужное место, если</h2>
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
      <div className="seven-steps">
        <h2 className="seven-steps__title">
          Семь шагов к вашей эффективной команде
        </h2>
        <div className="seven-steps__table">
          <div className="seven-steps__cell">
            <p className="seven-steps__number-cell">01</p>
            <p className="seven-steps__title-cell">Зарегистрируйтесь</p>
            <img
              className="seven-steps__img-cell"
              src={img1}
              alt="Зарегистрируйтесь"
            />
          </div>
          <div className="seven-steps__cell">
            <p className="seven-steps__number-cell">02</p>
            <p className="seven-steps__title-cell"> Добавьте сотрудников</p>
            <img src={img2} alt="Добавьте сотрудников" />
          </div>
          <div className="seven-steps__cell">
            <p className="seven-steps__number-cell">03</p>
            <p className="seven-steps__title-cell">
              Создайте задачу для сотрудника
            </p>
            <img src={img3} alt="Создайте задачу для сотрудника" />
          </div>
          <div className="seven-steps__cell">
            <p className="seven-steps__number-cell">04</p>
            <p className="seven-steps__title-cell">
              Следите за скоростью и качеством выполнения задач
            </p>
            <img
              src={img4}
              alt="Следите за скоростью и качеством выполнения задач"
            />
          </div>
          <div className="seven-steps__cell">
            <p className="seven-steps__number-cell">05</p>
            <p className="seven-steps__title-cell">
              Создайте кросс-опросы, чтобы узнать климат в команде
            </p>
            <img
              src={img5}
              alt="Создайте кросс-опросы, чтобы узнать климат в команде"
            />
          </div>
          <div className="seven-steps__cell">
            <p className="seven-steps__number-cell">06</p>
            <p className="seven-steps__title-cell">
              Находите отстающих и лидеров команды благодаря аналитике дедлайнов
            </p>
            <img
              src={img6}
              alt="Находите отстающих и лидеров команды благодаря аналитике дедлайнов"
            />
          </div>
          <div className="seven-steps__cell">
            <p className="seven-steps__number-cell">07</p>
            <p className="seven-steps__title-cell">
              Получайте полную статистику оценок эффективности по каждому
              участнику
            </p>
            <img
              src={img7}
              alt="олучайте полную статистику оценок эффективности по каждому участнику"
            />
          </div>
        </div>
      </div>
      <div className="carousel-component">
        <h2 className="carousel__title">Над продуктом работали</h2>
        <Carousel />
      </div>
      <div className="questions">
        <h2 className="questions__title">Часто задаваемые вопросы</h2>
        <div className="questions__cards">
          <div className="questions__column">
            <Card
              question="Как измеряется эффективность сотрудника?"
              answer="Эффективность задач измеряется по накопленным баллам за выполненные задачи в личном кабинете сотрудника или по мнениям коллег через кросс-опросы."
            />
            <Card
              question="В чём разница между ролью администратора и сотрудника?"
              answer="Администратор ставит задачи, оценивает баллы, создаёт проекты, видит всю аналитику и инициирует опросы."
            />
            <Card
              question="Кто может видеть результаты эффективности команды?"
              answer="Только администратор в разделе «Аналитика» может посмотреть успеваемость выполнения всей команды и индивидуально по каждому сотруднику. Также можно посмотреть по всей команде."
            />
          </div>
          <div className="questions__column">
            <Card
              question="Кто оценивает баллы за задачу?"
              answer="Баллы за задачу оценивает администратор."
            />
            <Card
              question="Можно ли создавать свои уникальные опросы?"
              answer="Да, вы можете создавать свои уникальные опросы в личном кабинете администратора."
            />
            <Card question="" answer="" />
          </div>
        </div>
      </div>
      <div className="contacts">
        <h2 className="contacts__title">Контакты</h2>
        <div className="contacts__container">
          <div className="contacts__card">
            <img src={githubIco} className="contacts__img" />
            <p className="contacts__contact">Наше сообщество</p>
          </div>
          <div className="contacts__card">
            <img src={mailIco} className="contacts__img" />
            <p className="contacts__contact">Наша почта</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
