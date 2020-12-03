import en from '../translations/en.json';
import fa from '../translations/fa.json';
import ar from '../translations/ar.json';
import hi from '../translations/hi.json';
import i18n from 'i18n-js';
import {I18nManager} from 'react-native';
import AppState from './app-state';
import Config from './config';
//import SyncStorage from 'sync-storage';
//import DeviceInfo from "react-native-device-info";
i18n.fallbacks = true;
// i18n.translations = {fa, en, ar, hi};
i18n.translations = {fa};

Object.defineProperty(i18n, 'isRTL', {
  get() {
    switch (i18n.locale) {
      case 'fa':
      case 'ar':
        return true;
      default:
        return false;
    }
  },
});
i18n.forceDirection = () => {
  I18nManager.forceRTL(i18n.isRTL);
};
i18n.forceRTL = () => {
  I18nManager.forceRTL(true);
};
i18n.forceLTR = () => {
  I18nManager.forceRTL(false);
};
i18n.forceLanguage = lang => {
  AppState.Language = Config.DefaultLanguage;
  i18n.locale = lang;
  i18n.forceLTR();
};
i18n.forceLanguage(Config.DefaultLanguage);
export default i18n;
