import photo from '../icons/photo.jpg';
import seQr from '../icons/docs_page/se_qr_d_1.png';

export const USER = {
  firstName: 'Сергій',
  lastName: 'Разумний',
  patronymic: 'Андрійович',
  birthDate: '30.06.1994',
  rnokpp: '3451406853',
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
