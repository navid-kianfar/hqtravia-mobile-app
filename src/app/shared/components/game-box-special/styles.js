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
    backgroundColor: '#fff',
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
    justifyContent: 'space-between',
    paddingTop: Metrics.marginVertical * 2,
  },
  prize: {
    fontSize: Fonts.size.h1,
    color: Colors.yellow,
    textAlign: 'center',
  },
  details: {
    alignItems: 'center',
  },
  title: {
    fontSize: Fonts.size.h4,
  },
  timeCountDown: {
    fontSize: Fonts.size.medium,
    opacity: 0.8,
  },
  footer: {
    backgroundColor: '#fff3',
    height: Metrics.section * 2.4,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.marginHorizontal,
    justifyContent: 'space-between',
  },
  level: {
    fontSize: Fonts.size.h5,
  },
  point: {
    fontSize: Fonts.size.medium,
  },
  button: {
    borderRadius: Metrics.section,
    height: Metrics.section * 1.5,
    justifyContent: 'center',
    paddingHorizontal: Metrics.marginHorizontal,
    borderWidth: 2,
  },
  buttonTxt: {
    fontSize: Fonts.size.medium,
  },
});

export default styles;
