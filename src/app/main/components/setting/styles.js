import {StyleSheet} from 'react-native';

// Screen Styles
import Fonts from '../../../../themes/fonts';
import Metrics from '../../../../themes/metrics';
import Colors from '../../../../themes/colors';

const styles = StyleSheet.create({
  main: {
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow,
  },

  profileView: {
    width: Metrics.WIDTH,
    paddingTop: Metrics.HEIGHT * 0.07,
    alignItems: 'center',
  },

  profileImgWrapper: {
    width: Metrics.WIDTH * 0.26,
    height: Metrics.WIDTH * 0.26,
    alignSelf: 'center',
  },

  profileImg: {
    width: '100%',
    height: '100%',
    borderRadius: Metrics.WIDTH * 0.13,
  },
  editBtn: {
    width: 30,
    height: 30,
    borderRadius: Metrics.WIDTH * 0.13,
    borderWidth: 2,
    borderColor: Colors.lighttxt,
    backgroundColor: Colors.snow,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  profileEditBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  nameWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Metrics.HEIGHT * 0.025,
    marginBottom: Metrics.HEIGHT * 0.05,
  },
  nameTxt: {
    color: Colors.darktext,
    fontSize: Fonts.moderateScale(18),
    textAlign: 'center',
    marginHorizontal: Metrics.marginHorizontal,
  },

  designtaionTxt: {
    color: Colors.lighttxt,
    fontSize: Fonts.moderateScale(14),
    textAlign: 'center',
  },

  overlayContentBg: {
    flexDirection: 'column',
    width: Metrics.WIDTH * 0.94,
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  card: {
    width: Metrics.WIDTH * 0.9,
    alignSelf: 'center',
  },
  cardHeader: {
    width: '100%',
    padding: 15,
  },
  textB18: {
    fontSize: Fonts.moderateScale(18),
    color: Colors.blacktxt,
  },
  text14: {
    fontSize: Fonts.moderateScale(14),
    color: Colors.lighttxt,
  },
  cardBody: {
    width: '100%',
    backgroundColor: Colors.lightBackground,
    borderRadius: 10,
    marginBottom: Metrics.HEIGHT * 0.03,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  buttonWrapper: {
    width: Metrics.WIDTH * 0.4,
  },
});

export default styles;
