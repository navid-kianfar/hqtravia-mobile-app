import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CircleTimer from '../../../../shared/components/circle-timer';
import Images from '../../../../../themes/images';
import Metrics from '../../../../../themes/metrics';
import Colors from '../../../../../themes/colors';
import Fonts from '../../../../../themes/fonts';
import styles from './styles';
import PropTypes from 'prop-types';

export default class GameLayer extends Component {
  static propTypes = {
    //has to be removed
    firstOptionAction: PropTypes.func,
    //****
    onlineUsers: PropTypes.string,
    questionInfo: PropTypes.shape({
      question: PropTypes.string,
      first: PropTypes.string,
      second: PropTypes.string,
      third: PropTypes.string,
    }),
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return (
      <View style={styles.gameLayer}>
        <View style={styles.gameBox}>
          <View style={styles.header}>
            <View style={styles.userCountWrapper}>
              <MatIcons
                style={[styles.userCount, styles.userCountGBO]}
                name="account"
              />
              <Text
                style={[
                  Fonts.family.normal,
                  styles.userCount,
                  styles.userCountGBO,
                ]}>
                {this.props.onlineUsers}
              </Text>
            </View>
            <View style={styles.logoWrapper}>
              <Image style={styles.logo} source={Images.logo.gray} />
            </View>
          </View>
          <View style={styles.gameBoxBody}>
            <View style={styles.gameBoxStatus}>
              <View style={styles.timerWrapper}>
                <CircleTimer
                  radius={Metrics.WIDTH * 0.125}
                  color={Colors.buttonColorTwo}
                  borderWidth={5}
                  shadowColor="#eee"
                  bgColor="#fff"
                  timer={4000}
                  resetTimer={1000}
                  ref="timer"
                />
              </View>
            </View>
            <View style={styles.gameBoxQuestion}>
              <Text style={[styles.questionTxt, Fonts.family.normal]}>
                {this.props.questionInfo.question}
              </Text>
            </View>
            <View style={styles.gameBoxOptions}>
              <TouchableOpacity
                onPress={() => this.props.firstOptionAction()}
                activeOpacity={0.7}
                style={styles.questionOption}>
                <Text
                  style={[
                    styles.questionOptionTxt,
                    Fonts.family.normal,
                    Fonts.direction.textStart,
                  ]}>
                  {this.props.questionInfo.first}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.refs.timer.start()}
                activeOpacity={0.7}
                style={styles.questionOption}>
                <Text
                  style={[
                    styles.questionOptionTxt,
                    Fonts.family.normal,
                    Fonts.direction.textStart,
                  ]}>
                  {this.props.questionInfo.second}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.refs.timer.reset()}
                activeOpacity={0.7}
                style={styles.questionOption}>
                <Text
                  style={[
                    styles.questionOptionTxt,
                    Fonts.family.normal,
                    Fonts.direction.textStart,
                  ]}>
                  {this.props.questionInfo.third}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
