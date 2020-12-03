import React, {Component} from 'react';
import {
  Text,
  Linking,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Share from 'react-native-share';
import {Container, Header, Content} from 'native-base';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import i18n from '../../../../services/i18n';
import PowerUpBox from '../../../shared/components/power-up-box';
import Colors from '../../../../themes/colors';
import Fonts from '../../../../themes/fonts';
import styles from './styles';

export default class PowerUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'KNFR',
        daysPlayed: 2,
        extraLivesDays: 4,
        extraEraserDays: 3,
        erasers: 5,
        lives: 3,
      },
      lives: {
        name: i18n.t('MAIN_POWER_UPS_EXTRA_LIVES'),
        progressbarLabel: i18n.t('MAIN_POWER_UPS_GET_EXTRA_LIVES'),
        description: i18n.t('MAIN_POWER_UPS_EXTRA_LIVES_BENEFIT'),
        icon: 'heart',
        daysToEarn: 6,
        share: '',
        buyOnePrice: 1500,
        buyThreePrice: 4000,
        themeColor: Colors.heart,
      },
      eraser: {
        name: i18n.t('MAIN_POWER_UPS_ERASER'),
        progressbarLabel: i18n.t('MAIN_POWER_UPS_GET_ERASERS'),
        description: i18n.t('MAIN_POWER_UPS_ERASER_LEARN_MORE'),
        icon: 'eraser',
        daysToEarn: 5,
        share: '',
        buyOnePrice: 2000,
        buyThreePrice: 5000,
        themeColor: Colors.skyblue,
      },
    };
  }
  render() {
    StatusBar.setBarStyle('dark-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      StatusBar.setTranslucent(true);
    }
    return (
      <Container style={styles.container}>
        <Header transparent style={styles.header}>
          {this.showBackButton()}
          <Text style={[styles.headerTitle, Fonts.family.bold]}>
            {i18n.t('MAIN_POWER_UPS_TITLE')}
          </Text>
        </Header>
        <Content style={styles.content}>
          <PowerUpBox
            details={this.state.lives}
            userName={this.state.user.name}
            userAsset={this.state.user.lives}
            daysPlayed={this.state.user.daysPlayed}
          />
          <PowerUpBox
            details={this.state.eraser}
            userName={this.state.user.name}
            userAsset={this.state.user.erasers}
            daysPlayed={this.state.user.daysPlayed}
          />
        </Content>
      </Container>
    );
  }
  onPressShareCode = () => {
    const options = {
      title: 'Share via',
      message: 'some message',
      url: 'some share url',
      social: Share.Social.WHATSAPP,
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };
  onPressBuy = count => {
    Linking.openURL('http://takhfif.network').catch(err =>
      console.error('An error occurred', err),
    );
  };

  showBackButton() {
    const backTo = this.props.navigation.getParam('backTo');
    if (backTo) {
      return (
        <TouchableOpacity
          style={styles.backBtn}
          onPress={async () => {
            if (backTo) {
              await this.props.navigation.navigate(backTo);
            }
          }}>
          <MatIcons style={styles.backBtnIcon} name="chevron-left" />
        </TouchableOpacity>
      );
    }
  }
}
