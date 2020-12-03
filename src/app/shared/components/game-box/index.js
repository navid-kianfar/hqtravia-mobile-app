import React, {Component} from 'react';
import {
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Fonts from '../../../../themes/fonts';
import i18n from '../../../../services/i18n';
import PropTypes from 'prop-types';
import styles from './styles';

export default class GameBox extends Component {
  static propTypes = {
    targetPage: PropTypes.func,
    details: PropTypes.shape({
      backgroundImg: PropTypes.node,
      logoImg: PropTypes.node,
      subscriber: PropTypes.bool,
      textColor: PropTypes.string,
      description: PropTypes.string,
      date: PropTypes.string,
      time: PropTypes.string,
      prize: PropTypes.string,
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
            <Image source={this.props.details.logoImg} style={styles.logo} />

            {!this.props.details.subscriber && (
              <Text
                style={[
                  styles.desc,
                  Fonts.family.normal,
                  {color: this.props.details.textColor},
                ]}>
                {this.props.details.description.replace(
                  0,
                  this.props.details.date +
                    ' ' +
                    this.props.details.time +
                    ' ' +
                    this.props.details.prize,
                )}
              </Text>
            )}

            {!this.props.details.subscriber && (
              <TouchableOpacity style={styles.button}>
                <Text style={[styles.buttonTxt, Fonts.family.normal]}>
                  {i18n.t('SUBSCRIBE')}
                </Text>
              </TouchableOpacity>
            )}
          </ImageBackground>
          {this.props.details.subscriber && (
            <View style={styles.footer}>
              <TouchableOpacity style={styles.shareBtn}>
                <Text style={[styles.shareTxt, Fonts.family.normal]}>
                  {i18n.t('SHARE')}
                </Text>
              </TouchableOpacity>
              <Text style={[styles.footerDate, Fonts.family.normal]}>
                {this.props.details.date} {this.props.details.time}
              </Text>
              <Text style={[styles.footerPrize, Fonts.family.normal]}>
                {this.props.details.prize}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
