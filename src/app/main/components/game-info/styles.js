import {Platform, StyleSheet} from 'react-native';

// Screen Styles
import Fonts from '../../../../themes/fonts';
import Metrics from '../../../../themes/metrics';
import Colors from '../../../../themes/colors';

const styles = StyleSheet.create({
  container: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
  },
  header: {
    height: Metrics.header,
    width: Metrics.WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Metrics.statusBar,
    paddingHorizontal: Metrics.section,
  },
  fixedContainer: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    position: 'absolute',
    bottom: 0,
    left: 0,
    alignItems: 'center',
    paddingTop: Metrics.header,
  },
  iconBtnWrapper: {
    width: Metrics.WIDTH * 0.9,
    paddingTop: Metrics.WIDTH * 0.1,
  },
  iconBtn: {
    width: Metrics.icons.medium,
    height: Metrics.icons.medium,
    backgroundColor: Colors.snow,
    borderRadius: Metrics.icons.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBtnIcon: {
    fontSize: Fonts.size.h4,
    color: Colors.lighttxt,
  },
  logoWrapper: {
    width: Metrics.WIDTH * 0.5,
    height: Metrics.WIDTH * 0.4,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  gameDetails: {
    alignItems: 'center',
    color: Colors.snow,
  },
  date: {
    color: Colors.snow,
    fontSize: Fonts.size.regular,
  },
  prize: {
    color: Colors.snow,
    fontSize: Fonts.size.h2,
  },
  shareBtn: {
    backgroundColor: Colors.snow,
    paddingHorizontal: Metrics.section,
    paddingVertical: Metrics.section * 0.4,
    borderRadius: 40,
  },
  shareBtnTxt: {
    color: Colors.purple,
  },

  overlayContentWrapper: {
    width: Metrics.WIDTH,
  },
  overlayContent: {
    marginTop: Metrics.HEIGHT * 0.55 - Metrics.header,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: Metrics.WIDTH * 0.06,
    backgroundColor: Colors.snow,

    ...Platform.select({
      ios: {
        minHeight: Metrics.HEIGHT * 2.45,
        paddingBottom: Metrics.HEIGHT * 2,
        marginBottom: -Metrics.HEIGHT * 2,
      },
      android: {
        minHeight: Metrics.HEIGHT * 0.45,
      },
    }),
  },
  section: {
    marginBottom: Metrics.WIDTH * 0.06,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: Metrics.marginVertical * 1.5,
    marginBottom: Metrics.marginVertical * 1.5,
    borderBottomWidth: 1,
    borderColor: Colors.gray,
  },
  sectionHeader: {
    paddingHorizontal: Metrics.WIDTH * 0.02,
    fontSize: Fonts.size.h4,
    color: Colors.blacktxt,
  },
  sectionSub: {
    paddingHorizontal: Metrics.WIDTH * 0.02,
    fontSize: Fonts.size.medium,
    color: Colors.lighttxt,
  },
  bordered: {
    borderWidth: 2,
    borderColor: Colors.gray,
    marginVertical: Metrics.marginVertical,
    padding: Metrics.WIDTH * 0.06,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  powerItemWrapper: {
    flexDirection: 'row',
  },
  badgeItem: {
    flex: 1,
    paddingHorizontal: Metrics.marginHorizontal,
    alignItems: 'center',
  },
  badgeImg: {
    width: Metrics.WIDTH * 0.21,
    height: Metrics.WIDTH * 0.177,
  },
  badgeTitle: {
    textAlign: 'center',
    fontSize: Fonts.size.medium,
    lineHeight: Fonts.size.medium * 1.5,
    height: Fonts.size.medium * 3,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 180,
    alignSelf: 'center',
  },
  socialBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.section * 2,
    height: Metrics.section * 2,
    borderColor: Colors.gray,
    borderWidth: 2,
    borderRadius: Metrics.section,
  },
  socialIcon: {
    fontSize: Fonts.size.h4,
  },
  description: {
    fontSize: Fonts.size.h5,
    textAlign: 'center',
    color: Colors.navyBlue,
  },
  subscribeBtn: {
    backgroundColor: Colors.navyBlue,
    width: Metrics.section * 8,
    height: Metrics.section * 2,
    borderRadius: Metrics.section,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  subscribeBtnTxt: {
    fontSize: Fonts.size.h5,
    color: Colors.snow,
  },
});

export default styles;
