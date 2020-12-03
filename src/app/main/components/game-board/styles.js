import {StyleSheet} from 'react-native';
import Fonts from '../../../../themes/fonts';
import Metrics from '../../../../themes/metrics';
import Colors from '../../../../themes/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  roundedBox: {
    width: Metrics.WIDTH * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Metrics.WIDTH * 0.04,
    height: Metrics.section * 3,
    borderWidth: 2,
    borderColor: Colors.gray,
    marginVertical: Metrics.marginVertical * 1.5,
    borderRadius: 50,
  },
  credit: {
    fontSize: Fonts.size.h5,
    color: Colors.blacktxt,
  },
  powerItemWrapper: {
    flexDirection: 'row',
    marginBottom: -10,
  },
  inviteButton: {
    borderRadius: Metrics.section,
    height: Metrics.section * 1.8,
    justifyContent: 'center',
    paddingHorizontal: Metrics.marginHorizontal * 2,
    borderWidth: 2,
    borderColor: Colors.gray,
  },
  inviteButtonTxt: {
    color: Colors.blacktxt,
    fontSize: Fonts.size.regular,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: Metrics.marginVertical * 2,
  },
  footerLink: {
    fontSize: Fonts.size.medium,
    color: Colors.lighttxt,
  },
});

export default styles;
