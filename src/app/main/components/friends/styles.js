import {StyleSheet} from 'react-native';
import Fonts from '../../../../themes/fonts';
import Colors from '../../../../themes/colors';
import Metrics from '../../../../themes/metrics';

const styles = StyleSheet.create({
  header: {
    marginHorizontal: Metrics.WIDTH * 0.06,
    paddingTop: Metrics.statusBar,
    paddingBottom: Metrics.marginVertical,
    borderBottomWidth: 2,
    borderBottomColor: Colors.lightBackground,
  },
  headerTitleWrapper: {
    paddingVertical: Metrics.marginVertical,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: Fonts.size.h4,
  },
  searchIcon: {
    fontSize: Fonts.size.h5,
    color: Colors.lighttxt,
    marginHorizontal: Metrics.marginHorizontal,
  },
  noContactContent: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: Metrics.WIDTH * 1,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Metrics.WIDTH * 0.05,
  },
  userIconWrapper: {
    width: Metrics.WIDTH * 0.165,
    height: Metrics.WIDTH * 0.165,
    marginHorizontal: Metrics.WIDTH * 0.009,
    overflow: 'hidden',
    borderRadius: Metrics.WIDTH * 0.2,
  },
  userIcon: {
    width: '100%',
    height: '100%',
  },
  friendsImgWrapper: {
    zIndex: 1,
    position: 'absolute',
    width: Metrics.WIDTH * 0.12,
    height: Metrics.WIDTH * 0.12,
    right: -Metrics.WIDTH * 0.06,
    top: -Metrics.WIDTH * 0.05,
  },
  friendsImg: {
    width: '100%',
    height: '100%',
  },
  userImageWrapper: {
    width: Metrics.WIDTH * 0.23,
    height: Metrics.WIDTH * 0.23,
    marginHorizontal: Metrics.WIDTH * 0.019,
  },
  userImage: {
    width: '100%',
    height: '100%',
    borderRadius: Metrics.WIDTH * 0.115,
  },
  noContactDesc: {
    padding: Metrics.WIDTH * 0.06,
    fontSize: Fonts.size.h5,
    textAlign: 'center',
    color: Colors.blacktxt,
  },
  content: {
    paddingHorizontal: Metrics.WIDTH * 0.06,
  },
  section: {
    borderBottomWidth: 2,
    borderColor: Colors.lightBackground,
    paddingVertical: Metrics.marginVertical,
  },
  noBorder: {
    borderColor: 'transparent',
  },
  sectionHeader: {
    marginBottom: Metrics.marginVertical,
  },
  sectionHeaderTitle: {
    color: Colors.buttonColorTwo,
    fontSize: Fonts.size.h5,
  },
  contactList: {},
  actionBtnWrapper: {
    alignItems: 'center',
    marginVertical: Metrics.marginVertical,
  },
  actionBtn: {
    borderRadius: Metrics.buttonHeight.small * 0.5,
    height: Metrics.buttonHeight.small,
    paddingHorizontal: Metrics.marginHorizontal * 2,
    backgroundColor: Colors.gray,
    justifyContent: 'center',
  },
  actionBtnTxt: {
    color: Colors.darktext,
    fontSize: Fonts.size.medium,
  },
});

export default styles;
