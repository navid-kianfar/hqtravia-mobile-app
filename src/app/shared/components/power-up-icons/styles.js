import {StyleSheet} from 'react-native';

// Screen Styles
import Fonts from '../../../../themes/fonts';
import Metrics from '../../../../themes/metrics';
import Colors from '../../../../themes/colors';

const styles = StyleSheet.create({
  powerItem: {
    marginRight: Metrics.WIDTH * 0.06,
    width: Metrics.icons.large,
    height: Metrics.icons.large,
    backgroundColor: Colors.lighttxt,
    borderRadius: Fonts.size.h1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  powerItemIcon: {
    fontSize: Fonts.size.h3,
    color: Colors.snow,
  },
  powerItemSmall: {
    marginRight: Metrics.WIDTH * 0.06,
    width: Metrics.icons.large * 0.8,
    height: Metrics.icons.large * 0.8,
    backgroundColor: Colors.lighttxt,
    borderRadius: Fonts.size.h1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  powerItemSmallIcon: {
    fontSize: Fonts.size.h5,
    color: Colors.snow,
  },

  countSm: {
    position: 'absolute',
    backgroundColor: Colors.lighttxt,
    paddingHorizontal: Metrics.WIDTH * 0.02,
    minWidth: Metrics.icons.medium,
    paddingVertical: Metrics.WIDTH * 0.005,
    borderRadius: Metrics.icons.medium,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.snow,
    bottom: '65%',
    left: '65%',
  },
  countLg: {
    position: 'absolute',
    backgroundColor: Colors.lighttxt,
    paddingHorizontal: Metrics.WIDTH * 0.02,
    minWidth: Metrics.icons.medium,
    paddingVertical: Metrics.WIDTH * 0.005,
    borderRadius: Metrics.icons.medium,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.snow,
    width: Metrics.icons.large + Metrics.WIDTH * 0.06,
    top: '100%',
    right: -Metrics.WIDTH * 0.03,
  },
  countTxt: {
    color: Colors.snow,
    fontSize: Fonts.size.small,
  },
});

export default styles;
