import React, {Component} from 'react';
import {View, Animated} from 'react-native';
import PropTypes from 'prop-types';

export default class CircleTimer extends Component {
  static propTypes = {
    radius: PropTypes.number,
    shadowColor: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    borderWidth: PropTypes.number,

    percent: PropTypes.number,

    timer: PropTypes.number,
    resetTimer: PropTypes.number,
  };
  constructor(props) {
    super(props);
    this.state = {
      percentAnim: new Animated.Value(0),
      firstHalf: true,
    };
  }
  render() {
    if (this.props.percent)
      return (
        <View
          style={{
            overflow: 'hidden',
            width: this.props.radius * 2,
            height: this.props.radius * 2,
            backgroundColor:
              this.props.percent < 50
                ? this.props.shadowColor
                : this.props.color,
            borderRadius: this.props.radius,
          }}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: this.props.radius * 2,
              height: this.props.radius * 2,
              borderRadius: this.props.radius,
              transform: [
                {
                  rotate:
                    this.props.percent < 50
                      ? '90deg'
                      : `${this.props.percent * 3.6 - 90}deg`,
                },
              ],
              zIndex: this.props.percent < 50 ? 1 : 2,
            }}>
            <View
              style={{
                width: this.props.radius * 2,
                height: this.props.radius,
                backgroundColor: this.props.color,
              }}
            />
          </View>

          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: this.props.radius * 2,
              height: this.props.radius * 2,
              borderRadius: this.props.radius,
              transform: [
                {
                  rotate:
                    this.props.percent < 50
                      ? `${this.props.percent * 3.6 + 90}deg`
                      : '270deg',
                },
              ],
              zIndex: this.props.percent < 50 ? 2 : 1,
            }}>
            <View
              style={{
                backgroundColor: this.props.shadowColor,
                width: this.props.radius * 2,
                height: this.props.radius,
              }}
            />
          </View>

          <View
            style={{
              position: 'absolute',
              left: this.props.borderWidth,
              right: this.props.borderWidth,
              top: this.props.borderWidth,
              bottom: this.props.borderWidth,
              borderRadius: this.props.radius,
              backgroundColor: this.props.bgColor,
              zIndex: 3,
            }}
          />
        </View>
      );
    else if (this.props.timer)
      return (
        <View
          style={{
            overflow: 'hidden',
            width: this.props.radius * 2,
            height: this.props.radius * 2,
            borderRadius: this.props.radius,
            backgroundColor: this.state.firstHalf
              ? this.props.shadowColor
              : this.props.color,
          }}>
          <Animated.View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: this.props.radius * 2,
              height: this.props.radius * 2,
              zIndex: this.state.firstHalf ? 1 : 2,
              transform: [
                {
                  rotate: this.state.percentAnim.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: ['90deg', '90deg', '270deg'],
                  }),
                },
              ],
            }}>
            <View
              style={{
                width: this.props.radius * 2,
                height: this.props.radius,
                backgroundColor: this.props.color,
              }}
            />
          </Animated.View>

          <Animated.View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: this.props.radius * 2,
              height: this.props.radius * 2,
              borderRadius: this.props.radius,
              zIndex: this.state.firstHalf ? 2 : 1,
              transform: [
                {
                  rotate: this.state.percentAnim.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: ['90deg', '270deg', '270deg'],
                  }),
                },
              ],
            }}>
            <View
              style={{
                backgroundColor: this.props.shadowColor,
                width: this.props.radius * 2,
                height: this.props.radius,
              }}
            />
          </Animated.View>

          <View
            style={{
              position: 'absolute',
              left: this.props.borderWidth,
              right: this.props.borderWidth,
              top: this.props.borderWidth,
              bottom: this.props.borderWidth,
              borderRadius: this.props.radius,
              backgroundColor: this.props.bgColor,
              zIndex: 3,
            }}
          />
        </View>
      );
  }

  start = () => {
    Animated.timing(this.state.percentAnim, {
      toValue: 1,
      duration: this.props.timer,
    }).start();

    setTimeout(() => this.setState({firstHalf: false}), this.props.timer / 2);
  };
  reset = () => {
    Animated.timing(this.state.percentAnim, {
      toValue: 0,
      duration: this.props.resetTimer,
    }).start();

    setTimeout(
      () => this.setState({firstHalf: true}),
      this.props.resetTimer / 2,
    );
  };
}
