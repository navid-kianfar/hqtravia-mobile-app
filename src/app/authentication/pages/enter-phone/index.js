import React, {Component} from 'react';
import {
  ImageBackground,
  View,
  StatusBar,
  Platform,
  TextInput,
  Image,
} from 'react-native';
import {Text, Item} from 'native-base';
import Button from '../../../shared/components/button';
import Fonts from '../../../../themes/fonts';
import Images from '../../../../themes/images';
import formStyles from '../../../../themes/form-elements-style';
import styles from './styles';
import Enums from '../../../../library/enums';
import i18n from '../../../../services/i18n';
// import AppState from '../../../../services/app-state';
import HttpService from '../../../../services/http';
import Config from '../../../../services/config';
// import CountryPicker, {
//   getAllCountries,
// } from 'react-native-country-picker-modal';

type EnterPhonePageProps = {};
export default class EnterPhonePageComponent extends Component<EnterPhonePageProps> {
  waiting = false;
  state = {
    phoneNumber: '',
    cca2: '',
    callingCode: '',
  };
  componentWillMount() {}
  constructor(props) {
    super(props);
    // const userCountry = getAllCountries()
    //   .filter(country => country.cca2 === AppState.Country)
    //   .pop();
    this.state = {
      phoneNumber: '9122399413',
      cca2: '', //userCountry.cca2,
      callingCode: '', //userCountry.callingCode,
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
          style={styles.background}
          source={Images.background.authentication}>
          <View style={styles.logoWrapper}>
            <Image style={styles.logo} source={Images.logo.main} />
          </View>
          <View>
            <Text style={[styles.title, Fonts.family.normal]}>
              {i18n.t('AUTH_ENTER_PHONE_TITLE')}
            </Text>
          </View>
          <Item style={formStyles.inputWrapperLarge}>
            {this.renderCountryPicker()}
            <TextInput
              style={[formStyles.inputPhone, Fonts.family.normal]}
              value={this.state.phoneNumber}
              editable={!this.waiting}
              keyboardType="numeric"
              placeholder={i18n.t('PHONE_NUMBER')}
              maxLength={11}
              onChangeText={phoneNumber => this.updatePhoneNumber(phoneNumber)}
              placeholderTextColor="#B7B6B9"
            />
          </Item>
          <Button
            large
            disabled={this.waiting}
            waiting={this.waiting}
            onPress={this._onPressSignUp}
            label={i18n.t('AUTH_ENTER_PHONE_SUBMIT')}
          />
          <View style={styles.description}>
            <Text style={[styles.descriptionText, Fonts.family.normal]}>
              {i18n.t('SMS_NOTE')}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
  updatePhoneNumber(phoneNumber) {
    this.setState({
      phoneNumber: phoneNumber.replace(/[^0-9]/g, ''),
    });
  }
  renderCountryPicker() {
    if (Config.ShowCountries) {
      return (
        <View style={formStyles.countryPickerWrapper}>
          <View style={formStyles.countryPicker}>
            {/*<CountryPicker*/}
            {/*  disabled={!Config.AllowPickCountry || this.waiting}*/}
            {/*  onChange={value => {*/}
            {/*    this.setState({*/}
            {/*      cca2: value.cca2,*/}
            {/*      callingCode: value.callingCode,*/}
            {/*    });*/}
            {/*  }}*/}
            {/*  cca2={this.state.cca2}*/}
            {/*  translation="eng"*/}
            {/*/>*/}
          </View>
          <Text style={[formStyles.callingCode, Fonts.family.normal]}>
            +{this.state.callingCode}
          </Text>
        </View>
      );
    }
  }

  _onPressSignUp = async () => {
    await this.props.navigation.navigate('VerifyPhone', {
      phoneNumber: '989122399413',
      data: '123456',
    });

    // this.waiting = true;
    // if (this.state.phoneNumber.startsWith('0'))
    //   this.state.phoneNumber = this.state.phoneNumber.substring(1);
    // const model = {
    //   country: +this.state.callingCode,
    //   number: this.state.phoneNumber,
    // };
    // const op = await HttpService.post('account/phone-login', model);
    // if (op.status === Enums.OperationResultStatues.Success) {
    //   const number = `${this.state.callingCode}${this.state.phoneNumber}`;
    //   await this.props.navigation.navigate('VerifyPhone', {
    //     phoneNumber: number,
    //     data: op.data,
    //   });
    //   return;
    // }
    // this.waiting = false;
    // // TODO: handle error
    // alert('some thing is wrong');
  };
}
