import React, {Component} from 'react';
import {
  ImageBackground,
  View,
  TextInput,
  StatusBar,
  Platform,
} from 'react-native';
import {Text, Button, Item, Title} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import images from '../../../../themes/images';
import Fonts from '../../../../themes/fonts';
import formStyles from '../../../../themes/form-elements-style';
import styles from './styles';
import i18n from '../../../../services/i18n';
import Colors from '../../../../themes/colors';

type VerifyPhonePageProps = {
  phoneNumber: string,
};
export default class VerifyPhonePageComponent extends Component<VerifyPhonePageProps> {
  componentWillMount() {}

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: this.props.navigation.getParam('phoneNumber'),
      code: '',
    };
  }

  render() {
    StatusBar.setBarStyle('light-content', true);

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      StatusBar.setTranslucent(true);
    }

    return (
      <View style={styles.container}>
        <ImageBackground
          source={images.background.authentication}
          style={styles.background}>
          <View style={styles.header}>
            <View style={[styles.headerButtonWrapper, styles.left]}>
              <Button onPress={this.onPressBack} transparent>
                <Icon
                  style={styles.headerLeftButtonText}
                  name={'chevron-thin-left'}
                />
              </Button>
            </View>
            <View style={styles.headerTitleWrapper}>
              <Title style={[styles.headerTitle, Fonts.family.normal]}>
                {i18n.t('AUTH_VERIFY_PRIVACY_PAGE_TITLE')}
              </Title>
            </View>
            <View style={[styles.headerButtonWrapper, styles.right]}>
              <Button
                style={styles.headerRightButton}
                onPress={this._onPressNext}
                block
                bordered
                rounded
                small>
                <Text
                  style={[styles.headerRightButtonText, Fonts.family.normal]}
                  uppercase={false}>
                  {i18n.t('NEXT')}
                </Text>
              </Button>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={[styles.description, Fonts.family.normal]}>
              {i18n.t('WE_SENT_SMS').replace(0, this.state.phoneNumber)}
            </Text>
            <Item style={formStyles.inputWrapperLarge}>
              <TextInput
                style={[formStyles.inputLarge, Fonts.family.normal]}
                value={this.state.code}
                editable={true}
                keyboardType="numeric"
                placeholderTextColor={Colors.placeholder}
                placeholder="- - - - -"
                maxLength={5}
                textAlign={'center'}
                onChangeText={code => this.updateCode(code)}
              />
            </Item>

            <Text
              style={[styles.textLight, Fonts.family.normal]}
              onPress={this._resendAction}>
              {i18n.t('RESEND')}
            </Text>
          </View>
          <View style={styles.footer}>
            <Text
              style={[
                styles.footerText,
                styles.textLight,
                Fonts.family.normal,
              ]}>
              {i18n.t('AUTH_VERIFY_PRIVACY_DESC')}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  _resendAction = () => {
    alert('Resend');
  };

  _onPressNext = () => {
    this.props.navigation.navigate('UpdateProfile');
  };

  onPressBack = () => {
    this.props.navigation.navigate('EnterPhone');
  };

  updateCode(code) {
    this.setState({code: code.replace(/[^0-9]/g, '')});
  }
}
