import React, {Component} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import Fonts from '../../../../themes/fonts';
import PropTypes from 'prop-types';
import i18n from '../../../../services/i18n';
import styles from './styles';

export default class GameBoxSpecial extends Component {
  static propTypes = {
    targetPage: PropTypes.func,
    currentLevel: PropTypes.number,
    currentPoints: PropTypes.number,
    details: PropTypes.shape({
      backgroundImg: PropTypes.node,
      textColor: PropTypes.string,
      prize: PropTypes.string,
      // startTime: PropTypes.string,
      title: PropTypes.string,
      pointsRequired: PropTypes.number,
    }),
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.props.targetPage}
          activeOpacity={1}
          style={styles.touchable}>
          <ImageBackground
            source={this.props.details.backgroundImg}
            style={styles.background}>
            <Text style={[styles.prize, Fonts.family.normal]}>
              {this.props.details.prize}
            </Text>
            <View style={styles.details}>
              <Text
                style={[
                  styles.title,
                  Fonts.family.normal,
                  {color: this.props.details.textColor},
                ]}>
                {this.props.details.title}
              </Text>
              <Text
                style={[
                  styles.timeCountDown,
                  Fonts.family.normal,
                  {color: this.props.details.textColor},
                ]}>
                {/*
                             now - {this.props.details.startTime}

                            */}
                {15} {i18n.t('DAYS')}, {17} {i18n.t('HOURS')}, {5}{' '}
                {i18n.t('MINUTES')}, {48} {i18n.t('SECONDS')}
              </Text>
            </View>
            <View style={[styles.footer, Fonts.direction.row]}>
              <View>
                <Text
                  style={[
                    styles.level,
                    {color: this.props.details.textColor},
                    Fonts.family.normal,
                    Fonts.direction.textStart,
                  ]}>
                  {i18n.t('LEVEL')}: {this.props.currentLevel}
                </Text>
                <Text
                  style={[
                    styles.point,
                    {color: this.props.details.textColor},
                    Fonts.family.normal,
                    Fonts.direction.textStart,
                  ]}>
                  {this.props.currentPoints} /{' '}
                  {this.props.details.pointsRequired}
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.button,
                  {borderColor: this.props.details.textColor},
                ]}>
                <Text
                  style={[
                    styles.buttonTxt,
                    Fonts.family.normal,
                    {color: this.props.details.textColor},
                  ]}>
                  {i18n.t('GET_POINTS')}
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}
