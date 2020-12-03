import {StyleSheet, Platform} from 'react-native';
import Fonts from '../../../../themes/fonts';
import Metrics from '../../../../themes/metrics';
import Colors from '../../../../themes/colors';

const styles = StyleSheet.create({
  container: {
    paddingVertical: Metrics.marginVertical,
    paddingHorizontal: Metrics.WIDTH * 0.05,
  },
  touchable: {
    flex: 1,
    width: Metrics.WIDTH * 0.9,
    minHeight: Metrics.WIDTH * 0.6,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#0000',
    zIndex: 100,
    borderWidth: 1,
    borderColor: Colors.shadowBorder,
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  background: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: '10%',
  },
  logo: {
    width: 150,
    height: 85,
  },
  desc: {
    fontSize: Fonts.size.regular,
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.snow,
    borderRadius: Metrics.doubleSection,
    height: Metrics.section * 1.8,
    justifyContent: 'center',
    paddingHorizontal: Metrics.marginHorizontal * 5,
  },
  buttonTxt: {
    color: Colors.blacktxt,
    fontSize: Fonts.size.h5,
  },
  footer: {
    backgroundColor: Colors.snow,
    height: Metrics.section * 2.4,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.marginHorizontal,
    justifyContent: 'space-between',
  },
  shareBtn: {
    backgroundColor: Colors.snow,
    borderRadius: Metrics.section,
    height: Metrics.section * 1.5,
    justifyContent: 'center',
    paddingHorizontal: Metrics.marginHorizontal,
    borderWidth: 2,
    borderColor: Colors.gray,
  },
  shareTxt: {
    color: Colors.blacktxt,
    fontSize: Fonts.size.medium,
  },
  footerDate: {
    color: Colors.blacktxt,
    fontSize: Fonts.size.regular,
  },
  footerPrize: {
    color: Colors.blacktxt,
    fontSize: Fonts.size.h5,
  },
});

export default styles;
