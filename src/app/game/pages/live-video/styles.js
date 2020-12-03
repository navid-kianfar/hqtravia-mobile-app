import {StyleSheet} from 'react-native';
import Metrics from '../../../../themes/metrics';
import Colors from '../../../../themes/colors';
import Fonts from '../../../../themes/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
  },
  playerLayer: {
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: Colors.black,
  },
  player: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  playerHeader: {
    marginTop: Metrics.statusBar + Metrics.marginVertical,
    marginHorizontal: Metrics.WIDTH * 0.03,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userCountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userCount: {
    fontSize: Fonts.size.medium,
    color: Colors.snow,
  },
  logoWrapper: {
    width: Metrics.icons.large,
    height: Metrics.icons.large,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  extraLifeModal: {
    bottom: Metrics.HEIGHT * 0.32,
    left: Metrics.WIDTH * 0.1,
    right: Metrics.WIDTH * 0.1,
    backgroundColor: Colors.snow,
    borderRadius: 10,
    padding: Metrics.WIDTH * 0.05,
  },
});

export default styles;
