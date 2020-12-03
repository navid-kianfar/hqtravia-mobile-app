import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback, Linking} from 'react-native';
import Share from 'react-native-share';
import Button from '../../../shared/components/button';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import i18n from '../../../../services/i18n';
import ProgressBar from '../progress-bar';
import PropTypes from 'prop-types';
import styles from './styles';
import Fonts from '../../../../themes/fonts';

export default class PowerUpBox extends Component {
  static propTypes = {
    userName: PropTypes.string,
    userAsset: PropTypes.number,
    daysPlayed: PropTypes.number,
    details: PropTypes.shape({
      name: PropTypes.string,
      progressbarLabel: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string,
      daysToEarn: PropTypes.number,
      buyOnePrice: PropTypes.number,
      buyThreePrice: PropTypes.number,
      themeColor: PropTypes.string,
      // share:
    }),
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.card}>
        <View style={[styles.cardHeader, Fonts.direction.row]}>
          <View style={[styles.cardName, Fonts.direction.row]}>
            <View
              style={[
                styles.cardIconWrapper,
                {backgroundColor: this.props.details.themeColor},
              ]}>
              <MatIcons
                name={this.props.details.icon}
                style={styles.cardIcon}
              />
            </View>
            <Text
              style={[
                styles.cardTitle,
                Fonts.family.normal,
                {color: this.props.details.themeColor},
              ]}>
              {this.props.details.name}
            </Text>
          </View>
          <View style={styles.count}>
            <Text style={[styles.countTxt, Fonts.family.normal]}>
              {this.props.userAsset}
            </Text>
          </View>
        </View>
        <View style={styles.cardBody}>
          <Text style={[styles.cardMainTitle, Fonts.family.normal]}>
            {this.props.details.description}
            <TouchableWithoutFeedback>
              <Text style={[styles.colorPurple, Fonts.family.normal]}>
                {' ' + i18n.t('MAIN_POWER_UPS_EXTRA_LEARN_MORE') + ' '}
              </Text>
            </TouchableWithoutFeedback>
          </Text>
          <Text style={[styles.label, Fonts.family.normal]}>
            {this.props.details.progressbarLabel}
          </Text>
          <ProgressBar
            fill={Math.round(
              (this.props.daysPlayed / this.props.details.daysToEarn) * 100,
            )}>
            {i18n
              .t('MAIN_POWER_UPS_PLAY_FOR_X')
              .replace(
                '0',
                this.props.details.daysToEarn - this.props.daysPlayed,
              )}
          </ProgressBar>
          <Button
            label={
              i18n.t('MAIN_POWER_UPS_SHARE_CODE') + ' ' + this.props.userName
            }
            onPress={this.onPressShareCode}
            background={this.props.details.themeColor}
            styles={styles.marginBottom}
          />
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <Button
                label={this.props.details.buyOnePrice}
                onPress={() => this.onPressBuy(1)}
                iconCount={{
                  text: '1',
                  icon: this.props.details.icon,
                }}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                label={this.props.details.buyThreePrice}
                onPress={() => this.onPressBuy(3)}
                iconCount={{
                  text: '3',
                  icon: this.props.details.icon,
                }}
              />
            </View>
          </View>
        </View>
      </View>
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
}
