import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '../../../../../../themes/fonts';
import i18n from '../../../../../../services/i18n';
import Modal from '../../../../../shared/components/modal';
import Button from '../../../../../shared/components/button';
import styles from './styles';
import PropTypes from 'prop-types';

export default class ExtraLifeModal extends Component {
  static propTypes = {
    style: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return (
      <Modal style={this.props.style}>
        <View style={[Fonts.direction.row, styles.body]}>
          <View style={styles.bodyIconWrapper}>
            <MatIcons name="heart" style={styles.bodyIcon} />
            <View style={styles.bodyIconTxtWrp}>
              <Text style={[Fonts.family.normal, styles.bodyIconTxt]}>{1}</Text>
            </View>
          </View>
          <View style={styles.bodyDescWrapper}>
            <Text style={[Fonts.family.normal, styles.bodyDesc]}>
              {i18n.t('GAME_EXTRA_LIFE_MODAL_DESC')}
            </Text>
          </View>
        </View>
        <View style={[Fonts.direction.row, styles.buttonContainer]}>
          <Button
            label={'2000'}
            iconCount={{
              text: '1',
              icon: 'heart',
            }}
            width={'49%'}
          />
          <Button
            label={'3000'}
            iconCount={{
              text: '3',
              icon: 'heart',
            }}
            width={'49%'}
          />
        </View>
      </Modal>
    );
  }
}
