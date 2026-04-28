import { useMemo, useState } from 'react';
import { SERVICES } from '../data/services.js';
import './ServicesPage.css';

export default function ServicesPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SERVICES;
    return SERVICES.filter((s) => s.label.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="services">
      <h1 className="services__title">Сервіси</h1>

      <label className="search">
        <svg
          className="search__icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          className="search__input"
          type="search"
          placeholder="Пошук"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      <div className="services__grid">
        {filtered.map((s) => (
          <button key={s.id} type="button" className="service-tile">
            <span className="service-tile__icon">
              <img src={s.icon} alt="" />
            </span>
            <span className="service-tile__label">{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
