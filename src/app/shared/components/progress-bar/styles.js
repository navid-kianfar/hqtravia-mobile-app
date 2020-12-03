import {StyleSheet} from 'react-native';
import Metrics from '../../../../themes/metrics';
import Colors from '../../../../themes/colors';
import Fonts from '../../../../themes/fonts';

const styles = StyleSheet.create({
  progressBar: {
    marginBottom: Metrics.marginVertical,
    width: '100%',
    borderRadius: Metrics.section,
    height: Metrics.doubleSection,
    borderColor: Colors.gray,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  progressBarThin: {
    marginBottom: Metrics.marginVertical,
    width: '100%',
    borderRadius: 2,
    height: 4,
    backgroundColor: Colors.gray,
    overflow: 'hidden',
  },
  progressBarFill: {
    position: 'absolute',
    top: -2,
    bottom: -2,
    backgroundColor: Colors.gray,
  },
  progressBarThinFill: {
    position: 'absolute',
    top: 0,
    backgroundColor: Colors.skyblue,
    height: '100%',
  },
  progressBarTitle: {
    zIndex: 1,
    fontSize: Fonts.size.regular,
    color: Colors.blacktxt,
    width: '100%',
    textAlign: 'center',
    padding: Metrics.section,
    justifyContent: 'space-between',
  },
});
export default styles;
