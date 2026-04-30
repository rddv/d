import { useCallback, useEffect, useRef, useState } from 'react';
import Card from '../components/Card.jsx';
import Slider from '../components/Slider.jsx';
import dotsIcon from '../icons/docs_page/details_three_dots.svg';
import { USER, DOCUMENTS } from '../data/user.js';
import './DocumentsPage.css';

function IdCardFront({ doc, onDots }) {
  return (
    <>
      <h2 className="doc-card__title">{doc.title}</h2>

      <div className="doc-card__head">
        <img className="doc-card__photo" src={USER.photo} alt="" />
        <dl className="doc-card__meta">
          <div className="doc-card__row">
            <dt>Дата <br />народження:</dt>
            <dd>{USER.birthDate}</dd>
          </div>
          <div className="doc-card__row">
            <dt>РНОКПП:</dt>
            <dd>{USER.rnokpp}</dd>
          </div>
        </dl>
      </div>

      <div className="ticker">
        <div className="ticker__track">
          {(' ' + doc.tickerText + ' ').repeat(30)}
        </div>
      </div>

      <div className="doc-card__footer">
        <div className="doc-card__name">
          <span>{USER.lastName}</span>
          <span>{USER.firstName}</span>
          <span>{USER.patronymic}</span>
        </div>
        <button
          className="dots-btn"
          type="button"
          aria-label="Дії над документом"
          onClick={(e) => {
            e.stopPropagation();
            onDots?.();
          }}
        >
          <img src={dotsIcon} alt="" />
        </button>
      </div>
    </>
  );
}

function PassportCardFront({ doc, onDots }) {
  return (
    <>
      <h2 className="doc-card__title passport-card__title">{doc.title}</h2>

      <div className="doc-card__head">
        <img className="doc-card__photo" src={USER.photo} alt="" />
        <dl className="doc-card__meta">
          <div className="doc-card__row">
            <dt>Дата <br />народження:</dt>
            <dd>{USER.birthDate}</dd>
          </div>
          <div className="doc-card__row">
            <dt>Номер:</dt>
            <dd>{doc.number}</dd>
          </div>
        </dl>
      </div>

      <div className="ticker">
        <div className="ticker__track">
          {(' ' + doc.tickerText + ' ').repeat(30)}
        </div>
      </div>

      <div className="doc-card__footer">
        <div className="doc-card__name">
          <span>{USER.lastName}</span>
          <span>{USER.firstName}</span>
          <span>{USER.patronymic}</span>
        </div>
        <button
          className="dots-btn"
          type="button"
          aria-label="Дії над документом"
          onClick={(e) => {
            e.stopPropagation();
            onDots?.();
          }}
        >
          <img src={dotsIcon} alt="" />
        </button>
      </div>
    </>
  );
}

function LicenseCardFront({ doc, onDots }) {
  return (
    <>
      <h2 className="doc-card__title">{doc.title}</h2>

      <div className="doc-card__head">
        <img className="doc-card__photo" src={USER.photo} alt="" />
        <dl className="doc-card__meta">
          <div className="doc-card__row">
            <dt>Дата <br />народження:</dt>
            <dd>{USER.birthDate}</dd>
          </div>
          <div className="doc-card__row">
            <dt>Категорія:</dt>
            <dd>{doc.category}</dd>
          </div>
          <div className="doc-card__row">
            <dt>Номер <br />документа:</dt>
            <dd>{doc.number}</dd>
          </div>
        </dl>
      </div>

      <div className="ticker">
        <div className="ticker__track">
          {(' ' + doc.tickerText + ' ').repeat(30)}
        </div>
      </div>

      <div className="doc-card__footer">
        <div className="doc-card__name">
          <span>{USER.lastName}</span>
          <span>{USER.firstName}</span>
          <span>{USER.patronymic}</span>
        </div>
        <button
          className="dots-btn"
          type="button"
          aria-label="Дії над документом"
          onClick={(e) => {
            e.stopPropagation();
            onDots?.();
          }}
        >
          <img src={dotsIcon} alt="" />
        </button>
      </div>
    </>
  );
}

function TaxCardFront({ doc, onDots }) {
  return (
    <>
      <div className="tax-card__top">
        <h2 className="doc-card__title">{doc.title}</h2>
        <div className="tax-card__subtitle">{doc.subtitle}</div>
      </div>

      <div className="tax-card__name">
        <span>{USER.lastName}</span>
        <span>{USER.firstName}</span>
        <span>{USER.patronymic}</span>
      </div>

      <div className="tax-card__birth">
        <div className="tax-card__birth-label">Дата народження:</div>
        <div className="tax-card__birth-value">{USER.birthDate}</div>
      </div>

      <div className="ticker ticker--tax">
        <div className="ticker__track">
          {(' ' + doc.tickerText + ' ').repeat(30)}
        </div>
      </div>

      <div className="tax-card__footer">
        <div className="tax-card__rnokpp">
          <span>{USER.rnokpp}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        </div>
        <button
          className="dots-btn"
          type="button"
          aria-label="Дії над документом"
          onClick={(e) => {
            e.stopPropagation();
            onDots?.();
          }}
        >
          <img src={dotsIcon} alt="" />
        </button>
      </div>
    </>
  );
}

const SHEET_ITEMS = [
  {
    key: 'full',
    label: 'Повна інформація',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="13" y2="16" />
      </svg>
    ),
  },
  {
    key: 'verify',
    label: 'Код для перевірки',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="3" height="3" />
        <rect x="18" y="18" width="3" height="3" />
      </svg>
    ),
  },
  {
    key: 'rate',
    label: 'Оцінити документ',
    divider: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 3 14.8 9.3 21.5 10 16.5 14.4 18 21 12 17.5 6 21 7.5 14.4 2.5 10 9.2 9.3 12 3" />
      </svg>
    ),
  },
  {
    key: 'reorder',
    label: 'Змінити порядок документів',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="7 4 4 7 7 10" />
        <line x1="4" y1="7" x2="20" y2="7" />
        <polyline points="17 14 20 17 17 20" />
        <line x1="4" y1="17" x2="20" y2="17" />
      </svg>
    ),
  },
  {
    key: 'faq',
    label: 'Питання та відповіді',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.8-2.5 2-2.5 4" />
        <circle cx="12" cy="17" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
];

function ActionSheet({ open, onClose }) {
  const sheetRef = useRef(null);
  const drag = useRef({ startY: 0, delta: 0, active: false, height: 0 });

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const onPointerDown = (e) => {
    if (e.target.closest('.action-sheet__item')) return;
    drag.current = {
      startY: e.clientY,
      delta: 0,
      active: true,
      height: sheetRef.current?.offsetHeight ?? 0,
    };
    sheetRef.current?.classList.add('action-sheet--dragging');
    try { e.currentTarget.setPointerCapture?.(e.pointerId); } catch (err) { void err; }
  };

  const onPointerMove = (e) => {
    if (!drag.current.active) return;
    drag.current.delta = Math.max(0, e.clientY - drag.current.startY);
    if (sheetRef.current) {
      sheetRef.current.style.transform = `translateY(${drag.current.delta}px)`;
    }
  };

  const onPointerUp = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
    sheetRef.current?.classList.remove('action-sheet--dragging');
    const shouldClose = drag.current.delta > drag.current.height * 0.25;
    if (sheetRef.current) sheetRef.current.style.transform = '';
    if (shouldClose) onClose();
  };

  return (
    <div
      className={'action-sheet-root' + (open ? ' is-open' : '')}
      aria-hidden={!open}
    >
      <div className="action-sheet-backdrop" onClick={onClose} />
      <div
        ref={sheetRef}
        className="action-sheet"
        role="dialog"
        aria-modal="true"
        aria-label="Дії з документом"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div className="action-sheet__handle" aria-hidden="true" />
        <ul className="action-sheet__list">
          {SHEET_ITEMS.map((item) => (
            <li
              key={item.key}
              className={
                'action-sheet__item-wrap' + (item.divider ? ' action-sheet__item-wrap--divider' : '')
              }
            >
              <button className="action-sheet__item" type="button">
                <span className="action-sheet__icon">{item.icon}</span>
                <span className="action-sheet__label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button className="action-sheet__close" type="button" onClick={onClose}>
        Закрити
      </button>
    </div>
  );
}

export default function DocumentsPage() {
  const [flipped, setFlipped] = useState({});
  const [sheetOpen, setSheetOpen] = useState(false);

  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSlideChange = useCallback(() => {
    setFlipped({});
    setSheetOpen(false);
  }, []);

  return (
    <div className="documents">
      <Slider ariaLabel="Документи" onChange={handleSlideChange} peek>
        {DOCUMENTS.map((doc) => {
          const isFlipped = !!flipped[doc.id];
          const isTax = doc.type === 'tax';
          const isPassport = doc.type === 'passport';
          const isLicense = doc.type === 'license';
          const showSpinnerBack = isTax || isPassport || isLicense;
          return (
            <div
              key={doc.id}
              className={'doc-flip' + (isFlipped ? ' is-flipped' : '')}
              onClick={() => toggleFlip(doc.id)}
            >
              <div className="doc-flip__inner">
                <Card
                  variant="solid"
                  className={
                    'doc-card doc-flip__face doc-flip__face--front' +
                    (isTax ? ' doc-card--tax' : '') +
                    (isPassport ? ' doc-card--passport' : '')
                  }
                >
                  {isTax ? (
                    <TaxCardFront doc={doc} onDots={() => setSheetOpen(true)} />
                  ) : isPassport ? (
                    <PassportCardFront doc={doc} onDots={() => setSheetOpen(true)} />
                  ) : isLicense ? (
                    <LicenseCardFront doc={doc} onDots={() => setSheetOpen(true)} />
                  ) : (
                    <IdCardFront doc={doc} onDots={() => setSheetOpen(true)} />
                  )}
                </Card>

                <Card
                  variant="solid"
                  className={
                    'doc-card doc-flip__face doc-flip__face--back' +
                    (showSpinnerBack ? ' doc-card--tax-back' : '')
                  }
                >
                  {showSpinnerBack ? (
                    <span className="spinner" aria-label="Завантаження" />
                  ) : (
                    <img className="doc-card__qr" src={doc.qr} alt="QR" />
                  )}
                </Card>
              </div>
            </div>
          );
        })}
      </Slider>

      <ActionSheet open={sheetOpen} onClose={() => setSheetOpen(false)} />
    </div>
  );
}
