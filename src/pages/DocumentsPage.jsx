import Card from '../components/Card.jsx';
import Slider from '../components/Slider.jsx';
import dotsIcon from '../icons/docs_page/details_three_dots.svg';
import { USER, DOCUMENTS } from '../data/user.js';
import './DocumentsPage.css';

export default function DocumentsPage() {
  return (
    <div className="documents">
      <Slider ariaLabel="Документи">
        {DOCUMENTS.map((doc) => (
          <Card key={doc.id} variant="solid" className="doc-card">
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
              <button className="dots-btn" type="button" aria-label="Дії над документом">
                <img src={dotsIcon} alt="" />
              </button>
            </div>
          </Card>
        ))}
      </Slider>
    </div>
  );
}
