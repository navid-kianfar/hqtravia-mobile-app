import {StyleSheet} from 'react-native';
import Metrics from '../../../../../themes/metrics';
import Colors from '../../../../../themes/colors';
import Fonts from '../../../../../themes/fonts';

const styles = StyleSheet.create({
  gameLayer: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.68,
  },
  gameBox: {
    flex: 1,
    marginTop: Metrics.statusBar + Metrics.marginVertical,
    paddingVertical: Metrics.WIDTH * 0.01,
    marginHorizontal: Metrics.WIDTH * 0.03,
    paddingHorizontal: Metrics.WIDTH * 0.05,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userCountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userCount: {
    fontSize: Fonts.size.medium,
    color: Colors.snow,
  },
  userCountGBO: {
    color: Colors.lighttxt,
  },
  logoWrapper: {
    width: Metrics.icons.large,
    height: Metrics.icons.large,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  gameBoxBody: {
    flex: 1,
    justifyContent: 'space-between',
  },
  gameBoxStatus: {
    alignItems: 'center',
  },
  timerWrapper: {
    marginTop: -(Metrics.WIDTH * 0.025 + 20),
    width: Metrics.WIDTH * 0.25,
    height: Metrics.WIDTH * 0.25,
  },
  gameBoxQuestion: {
    alignItems: 'center',
  },
  questionTxt: {
    textAlign: 'center',
    fontSize: Fonts.size.h5,
  },
  gameBoxOptions: {
    paddingBottom: Metrics.marginVertical,
  },
  questionOption: {
    borderWidth: 2,
    borderColor: Colors.gray,
    height: Metrics.doubleSection,
    width: '100%',
    borderRadius: Metrics.section,
    justifyContent: 'center',
    paddingHorizontal: Metrics.section,
    marginBottom: Metrics.marginVertical * 0.5,
  },
  questionOptionTxt: {
    color: Colors.blacktxt,
    fontSize: Fonts.size.h5,
  },
  questionOptionLocked: {
    backgroundColor: Colors.gray,
  },
  questionOptionLockedTxt: {
    color: Colors.lighttxt,
  },
});

export default styles;
