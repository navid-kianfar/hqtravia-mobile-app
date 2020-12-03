import {StyleSheet} from 'react-native';
import Fonts from '../../../../../themes/fonts';
import Colors from '../../../../../themes/colors';
import Metrics from '../../../../../themes/metrics';

const styles = StyleSheet.create({
  contactItem: {
    flexDirection: 'row',
    paddingVertical: Metrics.marginVertical * 0.5,
    alignItems: 'center',
  },
  contactImgWrapper: {
    width: Metrics.section * 1.6,
    height: Metrics.section * 1.6,
    borderRadius: Metrics.section * 0.8,
    overflow: 'hidden',
  },
  contactImg: {
    width: '100%',
    height: '100%',
  },
  playerName: {
    marginHorizontal: Metrics.marginHorizontal,
    flex: 1,
  },
  playerNameTxt: {
    fontSize: Fonts.size.h5,
    color: Colors.blacktxt,
  },
  actionBtn: {
    borderRadius: Metrics.buttonHeight.small * 0.5,
    height: Metrics.buttonHeight.small,
    paddingHorizontal: Metrics.marginHorizontal,
    backgroundColor: Colors.buttonColorTwo,
    justifyContent: 'center',
  },
  actionBtnTxt: {
    color: Colors.snow,
    fontSize: Fonts.size.medium,
  },
});

export default styles;
