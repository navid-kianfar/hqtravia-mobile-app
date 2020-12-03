import {StyleSheet} from 'react-native';
import Fonts from '../../../../themes/fonts';
import Metrics from '../../../../themes/metrics';
import Colors from '../../../../themes/colors';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#36389c',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Metrics.HEIGHT * 0.03,
  },
  logoWrapper: {
    width: Metrics.HEIGHT * 0.3,
    height: Metrics.HEIGHT * 0.15,
    marginVertical: Metrics.HEIGHT * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    maxWidth: Metrics.WIDTH * 0.4,
    maxHeight: Metrics.WIDTH * 0.2,
    height: '100%',
    width: '100%',
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: Metrics.WIDTH * 0.02,
  },
  listItem: {
    height: Metrics.HEIGHT * 0.1,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: Colors.gray,
    flexDirection: 'row',
    paddingHorizontal: Metrics.WIDTH * 0.06,
  },
  flag: {
    width: Metrics.HEIGHT * 0.07,
    height: Metrics.HEIGHT * 0.07,
  },
  listBody: {},
  name: {
    fontSize: Fonts.size.regular,
    color: Colors.snow,
  },
  fa: {
    fontFamily: 'IRANSansWeb(FaNum)',
  },
  en: {
    fontFamily: 'Nunito-Regular',
  },
  ar: {},
  hi: {},
});

export default styles;
