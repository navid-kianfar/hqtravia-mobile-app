import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Animated} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import formStyles from '../../../../themes/form-elements-style';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fonts from '../../../../themes/fonts';
import Colors from '../../../../themes/colors';

export default class Button extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    background: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    width: PropTypes.any,
    styles: PropTypes.object,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    waiting: PropTypes.bool,
    waitingStyle: PropTypes.object,
    disabledStyle: PropTypes.shape({
      background: PropTypes.string,
      color: PropTypes.string,
      styles: PropTypes.object,
    }),
    bordered: PropTypes.shape({
      width: PropTypes.number,
      color: PropTypes.string,
    }),
    iconCount: PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.string,
      iconColor: PropTypes.string,
      textColor: PropTypes.string,
    }),
  };
  constructor(props) {
    super(props);
    this.state = {
      spin: new Animated.Value(0),
      loading: new Animated.Value(0),
    };
  }
  componentDidMount() {
    if (this.props.waiting === true || this.props.waiting === false) {
      this.spin();
    }
    if (this.props.waiting) {
      this.startLoading();
    }
  }
  componentDidUpdate() {
    if (this.props.waiting) {
      this.startLoading();
    } else {
      this.stopLoading();
    }
  }

  render() {
    if (this.props.iconCount)
      return (
        <TouchableOpacity
          onPress={!this.props.disabled ? this.props.onPress : null}
          activeOpacity={!this.props.disabled ? 0.8 : 1}
          style={[
            formStyles.buttonBlock,
            this.props.background
              ? {backgroundColor: this.props.background}
              : {backgroundColor: Colors.yellow},
            this.props.width && {width: this.props.width},
          ]}>
          <View style={[formStyles.buttonText, styles.buttonText]}>
            <View>
              <MatIcons
                name={this.props.iconCount.icon}
                color={this.props.iconCount.iconColor}
                style={styles.buttonIcon}
              />
              <Text
                style={[
                  styles.textInIconTxt,
                  Fonts.family.normal,
                  this.props.iconCount.textColor && {
                    color: this.props.iconCount.textColor,
                  },
                ]}>
                {this.props.iconCount.text}
              </Text>
            </View>
            <Text
              style={[
                styles.price,
                Fonts.family.normal,
                this.props.color && {color: this.props.color},
              ]}>
              {this.props.label}
            </Text>
          </View>
        </TouchableOpacity>
      );
    else
      return (
        <TouchableOpacity
          onPress={!this.props.disabled ? this.props.onPress : null}
          activeOpacity={!this.props.disabled ? 0.8 : 1}
          style={[
            formStyles.buttonBlock,
            this.props.background
              ? {backgroundColor: this.props.background}
              : {backgroundColor: Colors.buttonColorOne},

            this.props.disabled &&
              this.props.disabledStyle.background && {
                backgroundColor: this.props.disabledStyle.background,
              },

            this.props.width && {width: this.props.width},
            this.props.bordered && {
              borderWidth: this.props.bordered.width,
              borderColor: this.props.bordered.color,
            },
            this.props.large && styles.buttonLarge,

            this.props.styles,

            this.props.disabled && this.props.disabledStyle.styles,
          ]}>
          <Animated.Text
            style={[
              formStyles.buttonText,
              Fonts.family.normal,
              styles.buttonText,
              this.props.color && {color: this.props.color},
              this.props.disabled &&
                this.props.disabledStyle.color && {
                  color: this.props.disabledStyle.color,
                },
              {
                opacity: this.state.loading.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0],
                }),
                transform: [
                  {
                    scaleY: this.state.loading.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0],
                    }),
                  },
                  {
                    scaleX: this.state.loading.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0],
                    }),
                  },
                ],
              },
            ]}>
            {this.props.label}
          </Animated.Text>
          {(this.props.waiting === true || this.props.waiting === false) && (
            <Animated.View
              style={[styles.waitingWrapper, {opacity: this.state.loading}]}>
              <Animated.View
                style={[
                  styles.waitingIconWrapper,
                  {
                    transform: [
                      {
                        scaleY: this.state.loading,
                      },
                      {
                        scaleX: this.state.loading,
                      },
                      {
                        rotate: this.state.spin.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['0deg', '1800deg'],
                        }),
                      },
                    ],
                  },
                ]}>
                <EvilIcons
                  style={[styles.waitingIcon, this.props.waitingStyle]}
                  name="spinner-3"
                />
              </Animated.View>
            </Animated.View>
          )}
        </TouchableOpacity>
      );
  }

  spin = () => {
    Animated.loop(
      Animated.timing(this.state.spin, {
        toValue: 1,
        duration: 2500,
      }),
    ).start();
  };
  startLoading = () => {
    Animated.timing(this.state.loading, {
      toValue: 1,
      duration: 500,
    }).start();
  };
  stopLoading = () => {
    Animated.timing(this.state.loading, {
      toValue: 0,
      duration: 500,
    }).start();
  };
}
