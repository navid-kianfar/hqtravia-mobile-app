import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
const {screenWidth, screenHeight} = Dimensions.get('screen');

// Used via Metrics.baseMargin
const metrics = {
  WIDTH: width,
  HEIGHT: height,
  Width: screenWidth,
  Height: screenHeight,
  footer: 55,
  header: 80,
  statusBar: 25,
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
  inputHeight: {
    tiny: 20,
    small: 30,
    medium: 40,
    large: 45,
    xl: 50,
    xxl: 60,
  },
  buttonHeight: {
    tiny: 20,
    small: 30,
    medium: 40,
    large: 45,
    xl: 50,
    xxl: 60,
  },
};

export default metrics;
