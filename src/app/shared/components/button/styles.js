import {StyleSheet} from 'react-native';
import Metrics from '../../../../themes/metrics';
import Colors from '../../../../themes/colors';
import Fonts from '../../../../themes/fonts';

const styles = StyleSheet.create({
  buttonIcon: {
    color: Colors.heart,
    fontSize: Fonts.size.h1,
  },
  textInIconTxt: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    lineHeight: Fonts.size.h1,
    fontSize: Fonts.size.regular,
    color: Colors.snow,
  },
  price: {
    marginHorizontal: Metrics.marginHorizontal,
    color: Colors.blacktxt,
    fontSize: Fonts.size.regular,
  },
  buttonText: {
    color: Colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonLarge: {
    borderRadius: Metrics.buttonHeight.xxl * 0.5,
    height: Metrics.buttonHeight.xxl,
  },
  waitingWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#0002',
    justifyContent: 'center',
    alignItems: 'center',
  },
  waitingIconWrapper: {},
  waitingIcon: {
    fontSize: Fonts.size.h3,
  },
});

export default styles;
