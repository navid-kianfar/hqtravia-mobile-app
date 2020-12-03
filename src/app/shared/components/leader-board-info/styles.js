import {StyleSheet} from 'react-native';
import Metrics from '../../../../themes/metrics';
import Colors from '../../../../themes/colors';

const styles = StyleSheet.create({
  container: {},
  topPlayers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Metrics.marginVertical * 2,
  },
  currentPlayer: {
    height: Metrics.section * 3.6,
    borderRadius: Metrics.section * 1.8,
    borderWidth: 2,
    borderColor: Colors.gray,
    marginHorizontal: Metrics.WIDTH * 0.04,
    justifyContent: 'center',
  },
  rankingList: {
    marginVertical: Metrics.marginVertical * 2,
  },
});

export default styles;
