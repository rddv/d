import { NavLink } from 'react-router-dom';
import homeIcon from '../icons/main_menu/home.png';
import homeActiveIcon from '../icons/main_menu/home_active.png';
import docsIcon from '../icons/main_menu/documents.png';
import docsActiveIcon from '../icons/main_menu/documents_active.png';
import servicesIcon from '../icons/main_menu/services.png';
import servicesActiveIcon from '../icons/main_menu/services_active.png';
import menuIcon from '../icons/main_menu/menu.png';
import menuActiveIcon from '../icons/main_menu/menu_active.png';
import './BottomNav.css';

const TABS = [
  { to: '/', label: 'Стрічка', icon: homeIcon, iconActive: homeActiveIcon },
  { to: '/documents', label: 'Документи', icon: docsIcon, iconActive: docsActiveIcon },
  { to: '/services', label: 'Сервіси', icon: servicesIcon, iconActive: servicesActiveIcon },
  { to: '/menu', label: 'Меню', icon: menuIcon, iconActive: menuActiveIcon },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {TABS.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          end={tab.to === '/'}
          className={({ isActive }) => 'bottom-nav__item' + (isActive ? ' is-active' : '')}
        >
          {({ isActive }) => (
            <>
              <img
                className="bottom-nav__icon"
                src={isActive ? tab.iconActive : tab.icon}
                alt=""
                aria-hidden="true"
              />
              <span className="bottom-nav__label">{tab.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
