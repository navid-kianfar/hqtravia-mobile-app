import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Images from '../../../../../themes/images';
import Fonts from '../../../../../themes/fonts';
import PropTypes from 'prop-types';
import styles from './styles';

export default class ContactItem extends Component {
  static propTypes = {
    contact: PropTypes.shape({
      hasThumbnail: PropTypes.bool,
      image: PropTypes.node,
      name: PropTypes.string,
    }),
    buttonAction: PropTypes.func,
    buttonLabel: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={[styles.contactItem, Fonts.direction.row]}>
        <View style={styles.contactImgWrapper}>
          <Image
            style={styles.contactImg}
            source={
              this.props.contact.hasThumbnail
                ? {uri: this.props.contact.image}
                : Images.profile.noProfile
            }
          />
        </View>
        <View style={styles.playerName}>
          <Text
            numberOfLines={1}
            style={[
              styles.playerNameTxt,
              Fonts.family.normal,
              Fonts.direction.textStart,
            ]}>
            {this.props.contact.name}
          </Text>
        </View>
        <TouchableOpacity
          onPress={this.props.buttonAction}
          style={styles.actionBtn}>
          <Text style={[styles.actionBtnTxt, Fonts.family.normal]}>
            {this.props.buttonLabel}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
