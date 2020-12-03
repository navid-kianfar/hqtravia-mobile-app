import {StyleSheet} from 'react-native';
import Metrics from '../../../../themes/metrics';
import Fonts from '../../../../themes/fonts';
import Colors from '../../../../themes/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1000,
  },
  full: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  large: {
    width: Metrics.WIDTH * 0.85,
    height: Metrics.HEIGHT * 0.85,
    borderRadius: 20,
  },
  closeButton: {
    position: 'absolute',
    top: Metrics.marginVertical,
    left: Metrics.marginHorizontal,
    zIndex: 10,
  },
  closeModalIcon: {
    fontSize: Fonts.size.h3,
    color: Colors.lighttxt,
  },
});

export default styles;
