import photo from '../icons/photo.jpg';
import seQr from '../icons/docs_page/ku_qr_d_1.png';

export const USER = {
  firstName: 'Олександр',
  lastName: 'Діхтярук',
  patronymic: 'Валерійович',
  birthDate: '16.11.1988',
  rnokpp: '3246207358',
  photo,
};

export const DOCUMENTS = [
  {
    id: 'e-document',
    type: 'id',
    title: 'єДокумент',
    tickerText: "Документ діє під час воєнного стану. Ой у лузі червона калина похилилася, чогось наша славна Україна зажурилася. А ми тую червону калину підіймемо, а ми нашу славну Україну гей, гей, розвеселимо!",
    qr: seQr,
  },
  {
    id: 'tax-card',
    type: 'tax',
    title: 'Картка платника податків',
    subtitle: 'РНОКПП',
    tickerText: "Документ оновлено о 14:35 | 21.04.2026 • Перевірено Державною податковою службою •",
  },
  {
    id: 'passport-foreign',
    type: 'passport',
    title: 'Закордонний паспорт',
    number: 'FU5432394',
    tickerText: "Документ оновлено о 11:24 | 25.04.2026 • Документ оновлено о 11:24 | 25.04.2026 •",
  },
  {
    id: 'driver-license',
    type: 'license',
    title: 'Посвідчення водія',
    category: 'B',
    number: 'ВАА322792',
    tickerText: "Документ оновлено о 11:24 | 25.04.2026 • Дійсне до 15.08.2031 •",
    qr: seQr,
  },
];
