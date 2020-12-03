import React, {Component} from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import SyncStorage from 'sync-storage';
import Config from '../../../../services/config';
import i18n from '../../../../services/i18n';
import styles from './styles';
import AppState from '../../../../services/app-state';
import DeviceInfo from '../../../lib/device-info';

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    SyncStorage.init().then(() => {
      AppState.AuthToken = SyncStorage.get('AuthToken') || '';
      AppState.SkipTutorial = SyncStorage.get('SkipTutorial') || false;
      AppState.Country =
        SyncStorage.get('Country') ||
        Config.DefaultCountry ||
        DeviceInfo.country;
      if (AppState.AuthToken) {
        this.props.navigation.navigate('MainStack');
        return;
      }
      if (Config.ShowLanguages === 'true') {
        this.props.navigation.navigate('Language');
        return;
      }
      i18n.forceLanguage(Config.DefaultLanguage);
      this.props.navigation.navigate('Main');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
