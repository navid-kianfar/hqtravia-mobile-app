import {Platform, StyleSheet} from 'react-native';
import Fonts from './fonts';
import Metrics from './metrics';
import Colors from './colors';

const formStyles = StyleSheet.create({
  inputPhone: {
    fontSize: 25,
    height: 70,
    flex: 1,
    textAlign: 'left',
  },
  countryPickerWrapper: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    zIndex: 1,
  },
  countryPicker: {
    paddingHorizontal: Metrics.WIDTH * 0.05,
    justifyContent: 'center',
    height: '100%',
    borderRightWidth: 1,
    borderColor: Colors.gray,
  },
  callingCode: {
    fontSize: 25,
    paddingHorizontal: Metrics.marginHorizontal,
  },
  inputWrapper: {
    backgroundColor: Colors.lightBackground,
    borderColor: 'transparent',
    marginBottom: Metrics.marginVertical,
    borderRadius: 50,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  inputWrapperLarge: {
    backgroundColor: Colors.lightBackground,
    marginBottom: Metrics.marginVertical,
    borderRadius: 50,
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    textAlign: 'center',
    fontSize: Fonts.size.regular,
    height: Metrics.inputHeight.xl,
    flex: 1,
  },
  inputLarge: {
    textAlign: 'center',
    fontSize: 25,
    height: 70,
    width: '100%',
  },
  buttonBordered: {
    borderRadius: 50,
    height: 50,
    paddingHorizontal: Metrics.marginHorizontal * 2,
    borderWidth: 2,
    borderColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBorderedTxt: {
    color: Colors.lighttxt,
    fontSize: Fonts.moderateScale(18),
  },
  button: {
    backgroundColor: Colors.buttonColorOne,
    alignSelf: 'center',
  },
  buttonBlock: {
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: Colors.buttonColorOne,
    alignItems: 'center',
    justifyContent: 'center',
    height: Metrics.buttonHeight.xl,
    borderRadius: Metrics.buttonHeight.xl * 0.5,
    width: '100%',
  },
  buttonBlockLarge: {
    backgroundColor: Colors.buttonColorOne,
    alignItems: 'center',
    justifyContent: 'center',
    height: Metrics.buttonHeight.xxl,
    borderRadius: Metrics.buttonHeight.xxl * 0.5,
    width: '100%',
  },
  buttonText: {
    fontSize: Fonts.size.regular,
    paddingHorizontal: Metrics.marginHorizontal * 2,
    color: '#fffa',
  },
  colorTwo: {
    backgroundColor: Colors.buttonColorTwo,
  },
  whiteTxt: {
    color: Colors.snow,
  },
  dialogInput: {
    borderBottomWidth: 1,
    borderColor: Colors.gray,
  },
  datePicker: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center' + '',
  },
});
export default formStyles;
