import {StyleSheet} from 'react-native';
import Metrics from '../../../../../../themes/metrics';
import Colors from '../../../../../../themes/colors';
import Fonts from '../../../../../../themes/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 2,
  },
  imageWrapper: {
    width: Fonts.size.h5,
    height: Fonts.size.h5,
    borderRadius: Fonts.size.h4 * 0.5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: Fonts.size.medium,
    textAlign: 'left',
    marginHorizontal: Metrics.marginHorizontal,
  },
  name: {
    color: Colors.purple,
  },
  message: {
    color: Colors.snow,
  },
});

export default styles;
