import React, {Component} from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Modal extends Component {
  static propTypes = {
    background: PropTypes.string,
    shadow: PropTypes.string,
    children: PropTypes.any,
    large: PropTypes.bool,
    fullScreen: PropTypes.bool,
    fade: PropTypes.bool,
    style: PropTypes.object,
    closeButton: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {
      animationValue: new Animated.Value(0),
    };
  }
  componentDidMount() {
    this.start();
  }

  render() {
    if (this.props.fullScreen) {
      return (
        <Animated.View
          style={[
            styles.container,
            styles.full,
            {
              backgroundColor: this.state.animationValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['transparent', this.props.shadow],
              }),
            },
            this.props.style,
          ]}>
          <Animated.View
            style={[
              this.props.large && styles.large,
              this.props.background && {
                backgroundColor: this.props.background,
              },
              this.props.fade
                ? {
                    opacity: this.state.animationValue,
                  }
                : {
                    transform: [
                      {
                        scaleY: this.state.animationValue,
                      },
                      {
                        scaleX: this.state.animationValue,
                      },
                    ],
                  },
            ]}>
            {this.props.closeButton && (
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => this.closeModal()}>
                <MatIcons name="close" style={styles.closeModalIcon} />
              </TouchableOpacity>
            )}
            {this.props.children}
          </Animated.View>
        </Animated.View>
      );
    } else {
      return (
        <Animated.View
          style={[
            styles.container,
            this.props.large && styles.large,
            this.props.background && {backgroundColor: this.props.background},
            this.props.fade
              ? {
                  opacity: this.state.animationValue,
                }
              : {
                  transform: [
                    {
                      scaleY: this.state.animationValue,
                    },
                    {
                      scaleX: this.state.animationValue,
                    },
                  ],
                },
            this.props.style,
          ]}>
          {this.props.children}
        </Animated.View>
      );
    }
  }
  start = () => {
    Animated.timing(this.state.animationValue, {
      toValue: 1,
      duration: 500,
    }).start();
  };
  closeModal = () => {
    Animated.timing(this.state.animationValue, {
      toValue: 0,
      duration: 500,
    }).start();
    setTimeout(() => this.props.closeButton(), 500);
  };
}
