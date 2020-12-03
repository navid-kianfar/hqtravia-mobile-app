import {StyleSheet} from 'react-native';
import Colors from '../../../../themes/colors';
import Metrics from '../../../../themes/metrics';

const styles = StyleSheet.create({
  footer: {
    height: Metrics.footer,
  },
  footerTabBg: {
    backgroundColor: Colors.snow,
  },
  profileIconWrapper: {
    backgroundColor: Colors.gray,
    width: 40,
    height: 40,
    padding: 8,
    borderRadius: 40,
  },
  profileIconWrapperActive: {
    backgroundColor: Colors.black,
    width: 40,
    height: 40,
    padding: 8,
    borderRadius: 20,
  },
  profileIcon: {
    width: '100%',
    height: '100%',
  },
  settingIconWrapper: {
    borderColor: Colors.snow,
  },
  settingIconWrapperActive: {
    borderColor: Colors.black,
    padding: 2,
    borderWidth: 2,
    borderRadius: 20,
  },
  settingIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default styles;
