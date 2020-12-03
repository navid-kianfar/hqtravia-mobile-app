import {StyleSheet} from 'react-native';
import Fonts from '../../../../themes/fonts';
import Colors from '../../../../themes/colors';
import Metrics from '../../../../themes/metrics';

const styles = StyleSheet.create({
  card: {
    marginBottom: Metrics.marginVertical,
    borderWidth: 2,
    borderColor: Colors.gray,
    borderRadius: 10,
  },
  cardHeader: {
    paddingHorizontal: Metrics.WIDTH * 0.05,
    paddingVertical: Metrics.WIDTH * 0.03,
    borderBottomWidth: 2,
    borderColor: Colors.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIconWrapper: {
    width: Metrics.icons.large,
    height: Metrics.icons.large,
    borderRadius: Metrics.icons.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardIcon: {
    fontSize: Fonts.size.h4,
    color: Colors.snow,
  },
  cardTitle: {
    fontSize: Fonts.size.h5,
    marginHorizontal: Metrics.WIDTH * 0.03,
  },
  count: {
    paddingHorizontal: Metrics.WIDTH * 0.03,
    paddingVertical: Metrics.WIDTH * 0.005,
    borderRadius: Metrics.icons.medium,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.gray,
  },
  countTxt: {
    color: Colors.snow,
  },
  cardBody: {
    paddingHorizontal: Metrics.WIDTH * 0.05,
    paddingVertical: Metrics.WIDTH * 0.06,
    alignItems: 'center',
  },
  cardMainTitle: {
    marginBottom: Metrics.marginVertical * 2,
    color: Colors.blacktxt,
    fontSize: Fonts.size.regular,
    textAlign: 'center',
  },
  label: {
    marginBottom: Metrics.marginVertical,
    color: Colors.lighttxt,
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    width: '49%',
  },
  marginBottom: {
    marginBottom: Metrics.marginVertical,
  },
  colorPurple: {
    color: Colors.purple,
  },
});

export default styles;
