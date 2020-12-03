import React, {Component} from 'react';
import {
  TouchableWithoutFeedback,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PowerUpIcon from '../../../shared/components/power-up-icons';
import GameBoxSpecial from '../../../shared/components/game-box-special';
import GameBox from '../../../shared/components/game-box';
import {Content} from 'native-base';
import Images from '../../../../themes/images';
import i18n from '../../../../services/i18n';
import Fonts from '../../../../themes/fonts';
import styles from './styles';

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        credit: '50K',
        lives: 20,
        erasers: 10,
        currentLevel: 0,
        currentPoints: 20,
      },
      gameSpecial: {
        backgroundImg: Images.background.gameSpecial,
        startTime: {},
        title: 'title',
        prize: '18' + i18n.t('MILLION_TOMANS'),
        pointsRequired: 499,
        textColor: '#fff',
      },
      gameOne: {
        backgroundImg: Images.background.animation1,
        logoImg: Images.logo.gameOne,
        description: i18n.t('MAIN_GAME_BOARD_GAME_ONE_CARD_DESCRIPTION'),
        textColor: '#fff',
        date: i18n.t('TOMORROW'),
        time: '18:30',
        prize: '1' + i18n.t('MILLION_TOMANS'),
        subscriber: false,
      },
      gameTwo: {
        backgroundImg: Images.background.animation2,
        logoImg: Images.logo.gameOne,
        description: i18n.t('MAIN_GAME_BOARD_GAME_ONE_CARD_DESCRIPTION'),
        textColor: '#fff',
        date: i18n.t('TOMORROW'),
        time: '18:30',
        prize: '1' + i18n.t('MILLION_TOMANS'),
        subscriber: true,
      },
    };
  }

  render() {
    StatusBar.setBarStyle('dark-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#fff', true);
      StatusBar.setTranslucent(true);
    }
    return (
      <Content style={styles.container}>
        <View style={styles.roundedBox}>
          <Text style={[styles.credit, Fonts.family.normal]}>
            {this.state.user.credit}
          </Text>
          <View style={styles.powerItemWrapper}>
            <PowerUpIcon small count={this.state.user.lives} icon="heart" />
            <PowerUpIcon small count={this.state.user.erasers} icon="eraser" />
          </View>
          <TouchableOpacity
            onPress={() => this.invite()}
            style={styles.inviteButton}>
            <Text style={[styles.inviteButtonTxt, Fonts.family.normal]}>
              {i18n.t('INVITE')}
            </Text>
          </TouchableOpacity>
        </View>
        <GameBoxSpecial
          targetPage={() => this.showInfo()}
          details={this.state.gameSpecial}
          currentLevel={this.state.user.currentLevel}
          currentPoints={this.state.user.currentPoints}
        />
        <GameBox
          targetPage={() => this.showInfo()}
          details={this.state.gameOne}
        />
        <GameBox
          targetPage={() => this.showInfo()}
          details={this.state.gameTwo}
        />
        <View style={styles.footer}>
          <TouchableWithoutFeedback onPress={() => this.openUrl('url1')}>
            <Text style={[styles.footerLink, Fonts.family.normal]}>
              {i18n.t('GET_HELP')}
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.openUrl('url2')}>
            <Text style={[styles.footerLink, Fonts.family.normal]}>
              {i18n.t('LEGAL')}
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.openUrl('url3')}>
            <Text style={[styles.footerLink, Fonts.family.normal]}>
              {i18n.t('REVIEW_US')}
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </Content>
    );
  }

  async showInfo() {
    await this.props.navigation.navigate('GameInfo');
  }
  async invite() {
    await this.props.navigation.navigate('LiveVideo');
  }
  openUrl = url => {
    alert('open ' + url);
  };
}
