import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav.jsx';

export default function Layout() {
  return (
    <div className="layout">
      <main className="layout__content">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
