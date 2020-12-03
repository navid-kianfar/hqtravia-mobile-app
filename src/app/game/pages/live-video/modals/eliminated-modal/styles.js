import {StyleSheet} from 'react-native';
import Metrics from '../../../../../../themes/metrics';
import Fonts from '../../../../../../themes/fonts';
import Colors from '../../../../../../themes/colors';

const styles = StyleSheet.create({
  modalInner: {
    paddingHorizontal: Metrics.WIDTH * 0.04,
    paddingBottom: Metrics.WIDTH * 0.06,
    justifyContent: 'space-between',
    height: '100%',
  },
  header: {
    marginTop: Metrics.marginVertical,
    alignItems: 'center',
    paddingVertical: Metrics.marginVertical * 2,
  },
  headerTxt: {
    fontSize: Fonts.size.h2,
  },
  body: {
    borderWidth: 2,
    borderColor: Colors.gray,
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: Metrics.WIDTH * 0.06,
    paddingTop: Metrics.screenWidth * 0.01,
    paddingBottom: Metrics.screenWidth * 0.04,
  },
  bodyHeader: {},
  statusIcon: {
    width: Metrics.WIDTH * 0.3,
    height: Metrics.WIDTH * 0.3,
  },
  questionWrapper: {
    marginBottom: Metrics.marginVertical,
  },
  question: {
    fontSize: Fonts.size.h5,
    textAlign: 'center',
  },
  questionOption: {},
  buttonWrapper: {},
  footer: {
    alignItems: 'center',
  },
  footerTxt: {
    fontSize: Fonts.size.regular,
  },
});

export default styles;
