import {StyleSheet} from 'react-native';
import Metrics from '../../../../../../themes/metrics';
import Fonts from '../../../../../../themes/fonts';
import Colors from '../../../../../../themes/colors';

const styles = StyleSheet.create({
  body: {
    marginBottom: Metrics.marginVertical,
    alignItems: 'center',
  },
  bodyIconWrapper: {},
  bodyIcon: {
    fontSize: 70,
    color: Colors.gray,
  },
  bodyIconTxtWrp: {
    width: '100%',
    height: '80%',
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyIconTxt: {
    color: Colors.snow,
    fontSize: Fonts.h3,
  },
  bodyDescWrapper: {
    padding: Metrics.marginVertical,
    flex: 1,
  },
  bodyDesc: {},
  buttonContainer: {
    justifyContent: 'space-between',
  },
});

export default styles;
