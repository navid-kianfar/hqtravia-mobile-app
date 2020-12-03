import React, {Component} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Images from '../../../../../../themes/images';
import Fonts from '../../../../../../themes/fonts';
import Colors from '../../../../../../themes/colors';
import i18n from '../../../../../../services/i18n';
import PropTypes from 'prop-types';
import Button from '../../../../../shared/components/button';
import ProgressBar from '../../../../../shared/components/progress-bar';
import styles from './styles';

export default class ResultModal extends Component {
  static propTypes = {
    questionInfo: PropTypes.shape({
      question: PropTypes.string,
      first: PropTypes.string,
      second: PropTypes.string,
      third: PropTypes.string,
    }),
    backgroundImg: PropTypes.node,
    level: PropTypes.number,
    answerStatus: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return (
      <ImageBackground
        style={styles.resultModal}
        source={this.props.backgroundImg}>
        <View style={styles.gameLayer}>
          <View style={styles.gameBox}>
            <View style={[Fonts.direction.row, styles.header]}>
              <View style={[Fonts.direction.row, styles.levelWrapper]}>
                <View style={styles.levelIconWrapper}>
                  <MatIcons style={styles.levelIcon} name="star" />
                </View>
                <Text style={[Fonts.family.normal, styles.levelNum]}>
                  {i18n.t('LEVEL')} {this.props.level}
                </Text>
              </View>
              <View style={styles.logoWrapper}>
                <Image style={styles.logo} source={Images.logo.gray} />
              </View>
            </View>
            <View style={styles.gameBoxBody}>
              <View style={styles.gameBoxStatus}>
                <View style={styles.statusWrapper}>
                  <View
                    style={[
                      Fonts.direction.row,
                      styles.status,
                      this.props.answerStatus && styles.correctAns,
                    ]}>
                    <MatIcons
                      style={styles.statusTxt}
                      name={this.props.answerStatus ? 'check' : 'close'}
                    />
                    <Text style={[Fonts.family.normal, styles.statusTxt]}>
                      {i18n.t(
                        this.props.answerStatus ? 'CORRECT' : 'INCORRECT',
                      )}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.gameBoxQuestion}>
                <Text style={[styles.questionTxt, Fonts.family.normal]}>
                  {this.props.questionInfo.question}
                </Text>
              </View>
              <View style={styles.gameBoxOptions}>
                <ProgressBar
                  fill={20}
                  style={styles.questionOption}
                  color={Colors.progressBarWrong}>
                  <Text
                    style={[
                      Fonts.direction.textStart,
                      Fonts.family.normal,
                      Fonts.style.normal,
                    ]}>
                    {this.props.questionInfo.first}
                  </Text>
                  <Text style={[Fonts.direction.textEnd, Fonts.family.normal]}>
                    {'3,200'}
                  </Text>
                </ProgressBar>
                <ProgressBar
                  fill={90}
                  style={styles.questionOption}
                  color={Colors.progressBarCorrect}>
                  <Text
                    style={[
                      Fonts.direction.textStart,
                      Fonts.family.normal,
                      Fonts.style.normal,
                    ]}>
                    {this.props.questionInfo.second}
                  </Text>
                  <Text style={[Fonts.direction.textEnd, Fonts.family.normal]}>
                    {'3,200'}
                  </Text>
                </ProgressBar>
                <ProgressBar fill={20} style={styles.questionOption}>
                  <Text
                    style={[
                      Fonts.direction.textStart,
                      Fonts.family.normal,
                      Fonts.style.normal,
                    ]}>
                    {this.props.questionInfo.third}
                  </Text>
                  <Text style={[Fonts.direction.textEnd, Fonts.family.normal]}>
                    {'3,200'}
                  </Text>
                </ProgressBar>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.suggestion}>
          {!this.props.answerStatus && (
            <View style={styles.incorrectBox}>
              <Text style={[Fonts.family.normal, styles.boxTitle]}>
                {i18n.t('YOU_ARE_INCORRECT')}
              </Text>
              <Text style={[Fonts.family.normal, styles.boxSub]}>
                {i18n.t('STAY_IN_THE_GAME')}
              </Text>
              <View style={styles.buttonWrapper}>
                <Button
                  label={'3000'}
                  iconCount={{
                    text: '1',
                    icon: 'heart',
                  }}
                />
              </View>
            </View>
          )}
        </View>
      </ImageBackground>
    );
  }
}
