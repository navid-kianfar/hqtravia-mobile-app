import React, {Component} from 'react';
import {Text, View} from 'react-native';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import styles from './styles';
import Fonts from '../../../../themes/fonts';

export default class PowerUpIcon extends Component {
  static propTypes = {
    icon: PropTypes.string,
    count: PropTypes.number,
    small: PropTypes.bool,
  };
  render() {
    return (
      <View style={this.props.small ? styles.powerItemSmall : styles.powerItem}>
        <MatIcons
          style={
            this.props.small ? styles.powerItemSmallIcon : styles.powerItemIcon
          }
          name={this.props.icon}
        />
        <View style={this.props.count < 999 ? styles.countSm : styles.countLg}>
          <Text
            numberOfLines={1}
            style={[styles.countTxt, Fonts.family.normal]}>
            {this.props.count}
          </Text>
        </View>
      </View>
    );
  }
}
