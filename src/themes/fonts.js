import {Dimensions} from 'react-native';
import i18n from '../services/i18n';
const {width, height} = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

let type;
switch (i18n.locale) {
  case 'fa':
    type = {
      base: 'IRANSansWeb(FaNum)',
      bold: 'IRANSansWeb(FaNum)',
      emphasis: 'IRANSansWeb(FaNum)',
      main: 'IRANSansWeb(FaNum)',
    };
    break;
  case 'ar':
    type = {
      base: 'IRANSansWeb(FaNum)',
      bold: 'IRANSansWeb(FaNum)',
      emphasis: 'IRANSansWeb(FaNum)',
      main: 'IRANSansWeb(FaNum)',
    };
    break;
  default:
    type = {
      base: 'Nunito-Regular',
      bold: 'Nunito-Bold',
      emphasis: 'Nunito-Regular',
      main: 'Nunito-Regular',
    };
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 10,
};

const style = {
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  h4: {
    fontSize: size.h4,
  },
  h5: {
    fontSize: size.h5,
  },
  h6: {
    fontSize: size.h6,
  },
  normal: {
    fontSize: size.regular,
  },
  description: {
    fontSize: size.medium,
  },
  small: {
    fontSize: size.small,
  },
  tiny: {
    fontSize: size.tiny,
  },
};

let fonts = {
  type,
  size,
  style,
  scale,
  verticalScale,
  moderateScale,
};
Object.defineProperty(fonts, 'family', {
  get() {
    const styles = {
      normal: {
        fontFamily: '',
        fontWeight: '',
      },
      bold: {
        fontFamily: '',
        fontWeight: '',
      },
      italic: {
        fontFamily: '',
        fontWeight: '',
      },
      light: {
        fontFamily: '',
        fontWeight: '',
      },
    };
    switch (i18n.locale) {
      case 'fa':
        styles.normal.fontFamily = 'IRANSansWeb(FaNum)';
        styles.normal.fontWeight = 'normal';
        styles.bold.fontFamily = 'IRANSansWeb(FaNum)';
        styles.bold.fontWeight = 'normal';
        styles.italic.fontFamily = 'IRANSansWeb(FaNum)';
        styles.italic.fontWeight = 'normal';
        styles.light.fontFamily = 'IRANSansWeb(FaNum)';
        styles.light.fontWeight = 'normal';
        break;
      case 'ar':
        styles.normal.fontFamily = 'IRANSansWeb(FaNum)';
        styles.normal.fontWeight = 'normal';
        styles.bold.fontFamily = 'IRANSansWeb(FaNum)';
        styles.bold.fontWeight = 'normal';
        styles.italic.fontFamily = 'IRANSansWeb(FaNum)';
        styles.italic.fontWeight = 'normal';
        styles.light.fontFamily = 'IRANSansWeb(FaNum)';
        styles.light.fontWeight = 'normal';
        break;
      default:
        styles.normal.fontFamily = 'Nunito-Regular';
        styles.normal.fontWeight = 'normal';
        styles.bold.fontFamily = 'Nunito-Regular';
        styles.bold.fontWeight = 'normal';
        styles.italic.fontFamily = 'Nunito-Regular';
        styles.italic.fontWeight = 'normal';
        styles.light.fontFamily = 'Nunito-Regular';
        styles.light.fontWeight = 'normal';
    }
    return styles;
  },
});

Object.defineProperty(fonts, 'direction', {
  get() {
    return {
      textStart: {
        textAlign: i18n.isRTL ? 'right' : 'left',
      },
      textEnd: {
        textAlign: i18n.isRTL ? 'left' : 'right',
      },
      row: {
        flexDirection: i18n.isRTL ? 'row-reverse' : 'row',
      },
      rowReverse: {
        flexDirection: i18n.isRTL ? 'row' : 'row-reverse',
      },
    };
  },
});
export default fonts;
