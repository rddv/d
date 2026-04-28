import Card from '../components/Card.jsx';
import Slider from '../components/Slider.jsx';
import arrowIcon from '../icons/arrow.svg';
import helloIcon from '../icons/hello.png';
import chipAll from '../icons/home_page/chip_all.svg';
import failedConnection from '../icons/home_page/failed_connection.svg';
import madeInUa from '../icons/home_page/madeinua.svg';
import smartScan from '../icons/home_page/smart_scan.svg';
import tridentWhite from '../icons/home_page/trident_white.svg';
import './HomePage.css';

const USER_NAME = 'Денис';

const MESSAGES = [
  {
    title: 'Опитування',
    body: 'Обирайте переможців MUZVAR AWARDS 2025 у Дії. Переходьте у розділ Сервіси …',
  },
  {
    title: 'Новини',
    body: 'Виплати ВПО у 2026: усе, що варто знати про головні зміни.',
  },
  {
    title: 'Сервіс',
    body: 'Оновлено розділ «Послуги» — знайдіть нові сервіси швидше.',
  },
];

const QUICK_ACTIONS = [
  { icon: smartScan, label: 'Дія Сканер' },
  { icon: tridentWhite, label: 'Військові облігації' },
  { icon: failedConnection, label: "Відсутній зв'язок" },
];

export default function HomePage() {
  return (
    <div className="home">
      <h1 className="home__greeting">
        Привіт, {USER_NAME} <img className="home__wave" src={helloIcon} alt="" />
      </h1>

      <section className="home__section">
        <h2 className="home__section-title">Нові повідомлення</h2>
        <Slider ariaLabel="Нові повідомлення">
          {MESSAGES.map((m, i) => (
            <Card key={i} variant="solid" className="message-card">
              <div className="message-card__title">{m.title}</div>
              <p className="message-card__body">{m.body}</p>
            </Card>
          ))}
        </Slider>
      </section>

      <section className="home__section">
        <Card className="invincibility">
          <div className="invincibility__content">
            <h3 className="invincibility__title">Незламність</h3>
            <p className="invincibility__desc">
              Мапа укриттів, Пунктів незламності та відділень Power Banking.
              <br />
              Заява про відсутній зв'язок.
            </p>
            <div className="invincibility__chips">
              <img src={chipAll} alt="" />
            </div>
          </div>
          <button className="circle-arrow" type="button" aria-label="Відкрити Незламність">
            <img src={arrowIcon} alt="" />
          </button>
        </Card>
      </section>

      <section className="home__section home__quick">
        {QUICK_ACTIONS.map((a) => (
          <button key={a.label} className="quick-action" type="button">
            <span className="quick-action__circle">
              <img src={a.icon} alt="" />
            </span>
            <span className="quick-action__label">{a.label}</span>
          </button>
        ))}
      </section>

      <section className="home__section">
        <Card variant="dark" className="drones">
          <div className="drones__bg" aria-hidden="true" />
          <div className="drones__content">
            <img src={tridentWhite} alt="" className="drones__trident" />
            <div className="drones__title">
              <span>ЛІНІЯ</span>
              <span>ДРОНІВ</span>
            </div>
          </div>
          <div className="drones__footer">
            <span className="drones__cta">Змінити хід подій</span>
            <button className="circle-arrow white" type="button" aria-label="Лінія Дронів">
              <img src={arrowIcon} alt="" />
            </button>
          </div>
        </Card>
      </section>
    </div>
  );
}
