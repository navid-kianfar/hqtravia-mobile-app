import {StyleSheet} from 'react-native';
import Fonts from '../../../../themes/fonts';
import Colors from '../../../../themes/colors';
import Metrics from '../../../../themes/metrics';

const styles = StyleSheet.create({
  container: {},
  header: {
    paddingHorizontal: 30,
    alignItems: 'center',
    backgroundColor: Colors.snow,
  },
  backBtn: {
    position: 'absolute',
    left: 0,
    height: '100%',
    paddingHorizontal: Metrics.marginHorizontal,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  backBtnIcon: {
    fontSize: Fonts.size.h2,
  },
  headerTitle: {
    fontSize: Fonts.size.h4,
  },
  content: {
    paddingHorizontal: Metrics.WIDTH * 0.03,
  },
  backRed: {
    backgroundColor: Colors.heart,
  },
  colorRed: {
    color: Colors.heart,
  },
  backBlue: {
    backgroundColor: Colors.skyblue,
  },
  colorBlue: {
    color: Colors.skyblue,
  },
  colorSnow: {
    color: Colors.snow,
  },
  colorBlack: {
    color: Colors.black,
  },
});

export default styles;
