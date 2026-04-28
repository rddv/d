import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import DocumentsPage from './pages/DocumentsPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import MenuPage from './pages/MenuPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
