import React, {Component} from 'react';
import {Text, View} from 'react-native';
import i18n from '../../../../services/i18n';
import Fonts from '../../../../themes/fonts';
import Metrics from '../../../../themes/metrics';
import styles from './styles';
import PropTypes from 'prop-types';

export default class ProgressBar extends Component {
  static propTypes = {
    fill: PropTypes.number,
    children: PropTypes.any,
    thin: PropTypes.bool,
    textStart: PropTypes.bool,
    color: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
        style={this.props.thin ? styles.progressBarThin : styles.progressBar}>
        {typeof this.props.children === 'string' ? (
          <Text
            style={[
              styles.progressBarTitle,
              Fonts.family.normal,
              this.props.textStart && Fonts.direction.textStart,
            ]}>
            {this.props.children}
          </Text>
        ) : (
          <View style={[styles.progressBarTitle, Fonts.direction.row]}>
            {this.props.children}
          </View>
        )}
        <View
          style={[
            this.props.thin
              ? styles.progressBarThinFill
              : styles.progressBarFill,
            {width: this.props.fill + '%'},
            this.props.color && {backgroundColor: this.props.color},
            this.props.fill >= 90 && {borderRadius: Metrics.section},
            i18n.isRTL ? {right: 0} : {left: 0},
          ]}
        />
      </View>
    );
  }
}
