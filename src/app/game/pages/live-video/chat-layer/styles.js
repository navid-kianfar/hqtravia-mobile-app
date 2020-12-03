import {StyleSheet} from 'react-native';
import Metrics from '../../../../../themes/metrics';
import Colors from '../../../../../themes/colors';
import Fonts from '../../../../../themes/fonts';

const styles = StyleSheet.create({
  chatLayer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingHorizontal: Metrics.WIDTH * 0.03,
    flexDirection: 'row',
    width: '100%',
    height: Metrics.HEIGHT * 0.32,
    justifyContent: 'space-between',
  },
  chatBox: {
    width: Metrics.WIDTH * 0.8,
    justifyContent: 'flex-end',
    paddingTop: Metrics.marginVertical,
  },
  chatList: {
    paddingRight: Metrics.marginHorizontal,
    paddingVertical: Metrics.marginVertical,
  },
  chatListUT: {
    paddingRight: Metrics.marginHorizontal,
    paddingBottom: Metrics.inputHeight.xl + Metrics.marginVertical * 2,
  },
  chatOptions: {
    justifyContent: 'flex-end',
    paddingVertical: Metrics.marginVertical,
  },
  chatOption: {
    borderRadius: Metrics.WIDTH * 0.05,
    width: Metrics.WIDTH * 0.1,
    height: Metrics.WIDTH * 0.1,
    marginVertical: Metrics.marginVertical * 0.5,
    backgroundColor: '#fff6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatOptionIcon: {
    fontSize: Fonts.size.h5,
    color: Colors.snow,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  sendBtn: {
    marginRight: -Metrics.marginHorizontal * 2,
    height: '100%',
    justifyContent: 'center',
    width: 40,
  },
  sendBtnIcon: {
    fontSize: Fonts.size.h4,
    color: Colors.purple,
  },
  tooltip: {
    position: 'absolute',
    backgroundColor: Colors.snow,
    bottom: Metrics.WIDTH * 0.2 + Metrics.marginHorizontal * 4.5,
    width: Metrics.WIDTH - Metrics.marginHorizontal,
    right: Metrics.marginHorizontal * 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  tooltipCaret: {
    position: 'absolute',
    left: Metrics.WIDTH * 0.05 - 8,
    bottom: -15,
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderTopWidth: 15,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: Colors.snow,
  },
  tooltipDesc: {
    flex: 1,
  },
  tooltipHeader: {
    fontSize: Fonts.size.regular,
    color: Colors.blacktxt,
  },
  tooltipText: {
    fontSize: Fonts.size.medium,
    color: Colors.lighttxt,
  },
  tooltipBtn: {
    backgroundColor: Colors.yellow,
    borderRadius: Metrics.buttonHeight.small * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.marginHorizontal,
    height: Metrics.buttonHeight.small,
  },
  tooltipBtnTxt: {
    fontSize: Fonts.size.regular,
    color: Colors.blacktxt,
  },
});

export default styles;
