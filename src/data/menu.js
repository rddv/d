import newMessage from '../icons/menu_page/new_message.svg';
import message from '../icons/menu_page/message.svg';
import history from '../icons/menu_page/menu_history.svg';
import settings from '../icons/menu_page/settings.svg';
import docRefresh from '../icons/menu_page/doc_refresh.svg';
import device from '../icons/menu_page/device.svg';
import copyWhite from '../icons/menu_page/copy_white.svg';
import faqSettings from '../icons/menu_page/faq_settings.svg';

export const APP_VERSION = '4.32.1.2628';

export const MENU_GROUPS = [
  [
    { id: 'notifications', icon: newMessage, label: 'Повідомлення' },
  ],
  [
    { id: 'diia-sign', icon: message, label: 'Дія.Підпис' },
    { id: 'sign-history', icon: history, label: 'Історія підписань' },
  ],
  [
    { id: 'settings', icon: settings, label: 'Налаштування' },
    { id: 'update', icon: docRefresh, label: 'Оновити застосунок' },
    { id: 'devices', icon: device, label: 'Підключені пристрої' },
  ],
  [
    { id: 'support', icon: message, label: 'Служба підтримки' },
    { id: 'copy-device', icon: copyWhite, label: 'Копіювати номер пристрою', invert: true },
    { id: 'faq', icon: faqSettings, label: 'Питання та відповіді' },
  ],
];
