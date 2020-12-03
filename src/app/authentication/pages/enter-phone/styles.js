import {StyleSheet} from 'react-native';
import Metrics from '../../../../themes/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    backgroundColor: '#36389c',
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.WIDTH * 0.05,
  },
  logoWrapper: {
    width: Metrics.WIDTH * 0.4,
    height: Metrics.WIDTH * 0.2,
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 25,
    marginBottom: 30,
  },
  description: {
    marginTop: 30,
  },
  descriptionText: {
    color: '#fffc',
    textAlign: 'center',
    fontSize: 14,
  },
});
export default styles;
