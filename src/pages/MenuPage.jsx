import { APP_VERSION, MENU_GROUPS } from '../data/menu.js';
import './MenuPage.css';

export default function MenuPage() {
  return (
    <div className="menu">
      <header className="menu__header">
        <h1 className="menu__title">Меню</h1>
        <div className="menu__version">Версія Дії: {APP_VERSION}</div>
      </header>

      {MENU_GROUPS.map((group, i) => (
        <div key={i} className="menu-card">
          {group.map((item) => (
            <button key={item.id} type="button" className="menu-item">
              <span className="menu-item__icon">
                <img
                  src={item.icon}
                  alt=""
                  className={item.invert ? 'menu-item__img--invert' : undefined}
                />
              </span>
              <span className="menu-item__label">{item.label}</span>
            </button>
          ))}
        </div>
      ))}

      <button type="button" className="menu__logout">
        Вийти
      </button>
    </div>
  );
}
