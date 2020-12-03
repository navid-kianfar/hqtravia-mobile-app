import {StyleSheet} from 'react-native';
import Metrics from '../../../../../../themes/metrics';
import Colors from '../../../../../../themes/colors';
import Fonts from '../../../../../../themes/fonts';

const styles = StyleSheet.create({
  resultModal: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
  },
  gameLayer: {
    width: '100%',
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  levelWrapper: {
    alignItems: 'center',
  },
  levelIconWrapper: {
    width: Metrics.icons.medium,
    height: Metrics.icons.medium,
    borderRadius: Metrics.icons.medium * 0.5,
    borderWidth: 2,
    borderColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelIcon: {
    color: Colors.yellow,
    fontSize: Fonts.size.h5,
  },
  levelNum: {
    marginHorizontal: Metrics.marginHorizontal,
    fontSize: Fonts.size.regular,
    color: Colors.blacktxt,
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
  statusWrapper: {
    marginTop: -(Metrics.WIDTH * 0.025 + 20),
    width: Metrics.WIDTH * 0.25,
    height: Metrics.WIDTH * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.marginHorizontal * 2,
    height: Metrics.buttonHeight.medium,
    borderRadius: Metrics.buttonHeight.medium * 0.5,
    backgroundColor: Colors.heart,
  },
  correctAns: {
    backgroundColor: Colors.loginGreen,
  },
  statusTxt: {
    fontSize: Fonts.size.regular,
    color: Colors.snow,
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
  questionOption: {},
  questionOptionTxt: {},

  suggestion: {
    flex: 1,
  },
  incorrectBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    width: 150,
    marginTop: Metrics.marginHorizontal * 2,
  },

  boxTitle: {
    color: Colors.snow,
    fontSize: Fonts.size.h4,
  },
  boxSub: {
    color: Colors.snow,
    opacity: 0.7,
    fontSize: Fonts.size.regular,
  },
});

export default styles;
