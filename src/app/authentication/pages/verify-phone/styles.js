import {StyleSheet} from 'react-native';
import Metrics from '../../../../themes/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    backgroundColor: '#36389c',
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  headerButtonWrapper: {
    width: 70,
    justifyContent: 'center',
  },
  right: {
    alignItems: 'flex-end',
  },
  left: {
    alignItems: 'flex-end',
  },
  headerTitleWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 25,
    color: '#fff',
  },
  headerRightButton: {
    backgroundColor: '#fff2',
    height: 40,
  },
  headerRightButtonText: {
    color: '#fff',
    fontSize: 15,
  },
  headerLeftButtonText: {
    color: '#fff',
    fontSize: 30,
  },
  content: {
    flex: 1,
    paddingHorizontal: Metrics.WIDTH * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Metrics.HEIGHT * 0.1,
  },
  description: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputWrapper: {
    backgroundColor: '#efefef',
    marginBottom: 10,
    padding: 5,
    borderRadius: 50,
  },
  textLight: {
    color: '#fffc',
    fontSize: 14,
  },
  footer: {
    padding: 15,
    alignItems: 'center',
  },
  footerText: {
    width: Metrics.WIDTH * 0.5,
    textAlign: 'center',
  },
});
export default styles;
