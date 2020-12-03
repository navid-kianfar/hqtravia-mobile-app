import React, {Component} from 'react';
import {
  ImageBackground,
  Image,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Content} from 'native-base';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Images from '../../../../themes/images';
import Fonts from '../../../../themes/fonts';
import Colors from '../../../../themes/colors';
import i18n from '../../../../services/i18n';
import Share from 'react-native-share';
import ProgressBar from '../../../shared/components/progress-bar';
import PowerUpIcon from '../../../shared/components/power-up-icons';
import formStyles from '../../../../themes/form-elements-style';
import styles from './styles';

export default class GameInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userBadges: 0,
      gameDate: 'TODAY 5:30 AM',
      gamePrize: '$75,000',
      lives: 100,
      erasers: 10,

      subscriber: false,
    };
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      StatusBar.setTranslucent(true);
    }
    return (
      <ImageBackground
        style={styles.container}
        source={Images.background.animation1}>
        <View style={styles.fixedContainer}>
          <View style={styles.logoWrapper}>
            <Image style={styles.logo} source={Images.logo.gameOne} />
          </View>
          <View style={styles.gameDetails}>
            <Text style={[styles.date, Fonts.family.normal]}>
              {this.state.gameDate}
            </Text>
            <Text style={[styles.prize, Fonts.family.normal]}>
              {this.state.gamePrize}
            </Text>
          </View>
        </View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.close()} style={styles.iconBtn}>
            <MatIcons style={styles.iconBtnIcon} name="chevron-left" />
          </TouchableOpacity>
        </View>
        <Content style={styles.overlayContentWrapper}>
          <View style={styles.overlayContent}>
            {this.state.subscriber ? (
              <View>
                <View style={styles.section}>
                  <View style={styles.actionButtons}>
                    <TouchableOpacity
                      onPress={() => this.share()}
                      style={formStyles.buttonBordered}>
                      <Text
                        style={[
                          formStyles.buttonBorderedTxt,
                          Fonts.family.normal,
                        ]}>
                        {i18n.t('SHARE')}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => this.share()}
                      style={formStyles.buttonBordered}>
                      <Text
                        style={[
                          formStyles.buttonBorderedTxt,
                          Fonts.family.normal,
                        ]}>
                        {i18n.t('REMIND_ME')}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={[
                      styles.sectionHeader,
                      Fonts.family.normal,
                      Fonts.direction.textStart,
                    ]}>
                    {i18n.t('INFO_POWER_UPS')}
                  </Text>
                  <Text
                    style={[
                      styles.sectionSub,
                      Fonts.family.normal,
                      Fonts.direction.textStart,
                    ]}>
                    {i18n.t('INFO_POWER_UPS_BENEFIT')}
                  </Text>
                  <View style={styles.bordered}>
                    <View style={styles.powerItemWrapper}>
                      <PowerUpIcon count={this.state.lives} icon="heart" />
                      <PowerUpIcon count={this.state.erasers} icon="eraser" />
                    </View>
                    <TouchableOpacity
                      onPress={() => this.powerUp()}
                      style={formStyles.buttonBordered}>
                      <Text
                        style={[
                          formStyles.buttonBorderedTxt,
                          Fonts.family.normal,
                        ]}>
                        {i18n.t('INFO_POWER_UPS_GET_MORE')}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.section}>
                  <Text
                    style={[
                      styles.sectionHeader,
                      Fonts.family.normal,
                      Fonts.direction.textStart,
                    ]}>
                    {this.state.userBadges} {i18n.t('BADGES')}
                  </Text>
                  <Text
                    style={[
                      styles.sectionSub,
                      Fonts.family.normal,
                      Fonts.direction.textStart,
                    ]}>
                    {i18n.t('INFO_BADGES_BENEFIT')}
                  </Text>
                  <View style={styles.bordered}>
                    <View style={styles.badgeItem}>
                      <Image
                        style={styles.badgeImg}
                        source={Images.badge.bronze}
                      />
                      <Text style={[styles.badgeTitle, Fonts.family.normal]}>
                        {i18n.t('GAME_TOPIC_1')}
                      </Text>
                      <ProgressBar fill={80} thin />
                    </View>
                    <View style={styles.badgeItem}>
                      <Image
                        style={styles.badgeImg}
                        source={Images.badge.silverDisabled}
                      />
                      <Text style={[styles.badgeTitle, Fonts.family.normal]}>
                        {i18n.t('GAME_TOPIC_2')}
                      </Text>
                      <ProgressBar fill={30} thin />
                    </View>
                    <View style={styles.badgeItem}>
                      <Image
                        style={styles.badgeImg}
                        source={Images.badge.goldDisabled}
                      />
                      <Text
                        style={[
                          styles.badgeTitle,
                          Fonts.family.normal,
                          Fonts.style.tiny,
                        ]}>
                        {i18n.t('GAME_TOPIC_3')}
                      </Text>
                      <ProgressBar fill={20} thin />
                    </View>
                  </View>
                </View>
              </View>
            ) : (
              <View>
                <View style={styles.section}>
                  <Text style={[styles.description, Fonts.family.normal]}>
                    {i18n.t('GAME_ONE_DESCRIPTION')}
                  </Text>
                </View>
                <View style={styles.section}>
                  <TouchableOpacity
                    onPress={() => this.setState({subscriber: true})}
                    style={styles.subscribeBtn}>
                    <Text style={[styles.subscribeBtnTxt, Fonts.family.normal]}>
                      {i18n.t('SUBSCRIBE')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <View style={[styles.section, styles.social]}>
              <TouchableOpacity style={styles.socialBtn}>
                <MatIcons
                  color={Colors.facebook}
                  style={styles.socialIcon}
                  name="facebook"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn}>
                <MatIcons
                  color={Colors.instagram}
                  style={styles.socialIcon}
                  name="instagram"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn}>
                <MatIcons
                  color={Colors.twitter}
                  style={styles.socialIcon}
                  name="twitter"
                />
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </ImageBackground>
    );
  }

  async powerUp() {
    await this.props.navigation.navigate('PowerUp', {
      backTo: 'GameInfo',
    });
  }

  async close() {
    await this.props.navigation.navigate('Main');
  }
  async share() {
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
  }
}
