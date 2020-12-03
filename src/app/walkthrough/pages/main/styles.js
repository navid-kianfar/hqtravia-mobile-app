import {Platform, StyleSheet} from 'react-native';
import Fonts from '../../../../themes/fonts';
import Metrics from '../../../../themes/metrics';
import Colors from '../../../../themes/colors';

const styles = StyleSheet.create({
  shadowBg: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
  },

  backArrow: {
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  header: {
    backgroundColor: Colors.transparent,
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    paddingTop: Metrics.HEIGHT * 0.05,
    elevation: 0,
    paddingLeft: Metrics.WIDTH * 0.05,
    paddingRight: Metrics.WIDTH * 0.05,
  },

  left: {
    flex: 0.5,
  },

  body: {
    flex: 3,
    alignSelf: 'center',
  },

  right: {
    flex: 0.5,
  },

  btnsec: {
    height: Metrics.HEIGHT * 0.1,
    justifyContent: 'center',
    bottom: Metrics.HEIGHT * 0.02,
    flexDirection: 'row',
    width: Metrics.WIDTH * 0.85,
    alignSelf: 'center',
  },

  slide: {
    marginTop: Metrics.HEIGHT * 0.1,
    height: Metrics.HEIGHT * 0.8,
  },

  sliderImage: {
    resizeMode: 'contain',
    height: Metrics.HEIGHT * 0.3,
    width: Metrics.WIDTH * 0.5,
    alignSelf: 'center',
    marginTop: Metrics.HEIGHT * 0.06,
  },

  headertext: {
    backgroundColor: Colors.transparent,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: Fonts.moderateScale(24),
    width: Metrics.WIDTH * 0.85,
    color: Colors.snow,
    marginTop: Metrics.HEIGHT * 0.032,
  },

  desctext: {
    backgroundColor: Colors.transparent,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: Fonts.moderateScale(12),
    width: Metrics.WIDTH * 0.7,
    color: Colors.snow,
    marginTop: Metrics.HEIGHT * 0.03,
  },

  steptext: {
    backgroundColor: Colors.transparent,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: Fonts.moderateScale(15),
    width: Metrics.WIDTH * 0.7,
    color: Colors.snow,
    marginTop: Metrics.HEIGHT * 0.04,
  },

  dot: {
    backgroundColor: '#fff4',
    width: Metrics.WIDTH * 0.018,
    height: Metrics.WIDTH * 0.018,
    borderRadius: Metrics.WIDTH * 0.009,
    marginLeft: Metrics.WIDTH * 0.004,
    marginRight: Metrics.WIDTH * 0.004,
    ...Platform.select({
      ios: {
        marginBottom: Metrics.HEIGHT * 0.08,
      },
      android: {
        marginBottom: Metrics.HEIGHT * 0.06,
      },
    }),
  },

  activeDot: {
    backgroundColor: Colors.snow,
    width: Metrics.WIDTH * 0.018,
    height: Metrics.WIDTH * 0.018,
    borderRadius: Metrics.WIDTH * 0.009,
    marginLeft: Metrics.WIDTH * 0.004,
    marginRight: Metrics.WIDTH * 0.004,
    ...Platform.select({
      ios: {
        marginBottom: Metrics.HEIGHT * 0.08,
      },
      android: {
        marginBottom: Metrics.HEIGHT * 0.06,
      },
    }),
  },

  nextBotton: {
    backgroundColor: Colors.snow,
    width: Metrics.WIDTH * 0.35,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.05,
      },
      android: {
        height: Metrics.HEIGHT * 0.06,
      },
    }),
    alignSelf: 'center',
    justifyContent: 'center',
  },

  nextText: {
    fontSize: Fonts.moderateScale(13),
    color: '#ff4763',
  },

  skipText: {
    backgroundColor: Colors.transparent,
    color: Colors.snow,
    fontSize: Fonts.moderateScale(15),
    textAlign: 'right',
  },
});

export default styles;
