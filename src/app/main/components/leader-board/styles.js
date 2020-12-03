import {StyleSheet} from 'react-native';
import Fonts from '../../../../themes/fonts';
import Metrics from '../../../../themes/metrics';
import Colors from '../../../../themes/colors';

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: Fonts.size.h4,
  },
  content: {},
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.WIDTH * 0.04,
    marginTop: Metrics.marginVertical * 2,
  },
  btn: {
    width: '49%',
    height: Metrics.section * 1.8,
    borderRadius: Metrics.section,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.gray,
  },
  btnTxt: {
    fontSize: Fonts.size.regular,
    color: Colors.blacktxt,
  },
  activeBtn: {
    borderColor: Colors.buttonColorOne,
    backgroundColor: Colors.buttonColorOne,
  },
  activeBtnTxt: {
    color: Colors.snow,
  },
});

export default styles;
