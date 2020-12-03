import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Fonts from '../../../../../../themes/fonts';
import Metrics from '../../../../../../themes/metrics';
import Images from '../../../../../../themes/images';
import i18n from '../../../../../../services/i18n';
import Modal from '../../../../../shared/components/modal';
import Button from '../../../../../shared/components/button';
import styles from './styles';
import PropTypes from 'prop-types';
import ProgressBar from '../../../../../shared/components/progress-bar';
import Colors from '../../../../../../themes/colors';

export default class EliminatedModal extends Component {
  static propTypes = {
    style: PropTypes.object,
    onPress: PropTypes.func,
    question: PropTypes.string,
    wrongAnswer: PropTypes.string,
    closeButton: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return (
      <Modal
        closeButton={() => this.props.closeButton()}
        style={this.props.style}
        shadow={'#0005'}
        background={'#fff'}
        fullScreen
        large>
        <View style={styles.modalInner}>
          <View style={styles.header}>
            <Text style={[Fonts.family.normal, styles.headerTxt]}>
              {i18n.t('YOU_ARE_ELIMINATED')}
            </Text>
          </View>
          <View style={styles.body}>
            <View style={styles.bodyHeader}>
              <Image
                style={styles.statusIcon}
                source={Images.icon.eliminated}
              />
            </View>
            <View style={styles.questionWrapper}>
              <Text style={styles.question}>{this.props.question}</Text>
            </View>
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
                {this.props.wrongAnswer}
              </Text>
              <Text style={[Fonts.direction.textEnd, Fonts.family.normal]}>
                {'3,200'}
              </Text>
            </ProgressBar>
            <View style={styles.buttonWrapper}>
              <Button
                label={'Share'}
                width={Metrics.WIDTH * 0.4}
                onPress={this.share}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity activeOpacity={0.6} onPress={this.continue}>
              <Text style={styles.footerTxt}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  continue = () => {
    this.props.closeButton();
  };
  share = () => {
    alert('share');
  };
}
