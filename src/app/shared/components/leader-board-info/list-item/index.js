import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import Fonts from '../../../../../themes/fonts';

export default class ListItem extends Component {
  static PlayerDTO = {
    name: PropTypes.string,
    image: PropTypes.node,
    score: PropTypes.string,
    rank: PropTypes.number,
  };
  static propTypes = {
    topPlayer: PropTypes.bool,
    championPlayer: PropTypes.bool,
    rankColor: PropTypes.string,
    player: PropTypes.shape(this.PlayerDTO),
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.topPlayer || this.props.championPlayer ? (
      <View style={styles.topPlayerItem}>
        <View
          style={[
            this.props.championPlayer
              ? styles.championImgWrapper
              : styles.topPlayerImgWrapper,
          ]}>
          <Image
            style={[
              this.props.championPlayer
                ? styles.championImg
                : styles.topPlayerImg,
            ]}
            source={this.props.player.image}
          />
          <View
            style={[
              styles.topPlayerRank,
              {backgroundColor: this.props.rankColor},
            ]}>
            <Text style={[styles.topPlayerRankTxt, Fonts.family.normal]}>
              {this.props.player.rank}
            </Text>
          </View>
        </View>
        <View style={styles.topPlayerName}>
          <Text
            numberOfLines={2}
            style={[styles.topPlayerNameTxt, Fonts.family.normal]}>
            {this.props.player.name}
          </Text>
        </View>
        <View style={styles.playerScoreWrapper}>
          <Text style={[styles.playerScore, Fonts.family.normal]}>
            {this.props.player.score}
          </Text>
        </View>
      </View>
    ) : (
      <View
        style={[
          styles.listItem,
          Fonts.direction.row,
          this.props.noBorder && {borderTopWidth: 0},
        ]}>
        <View style={styles.playerRank}>
          <Text style={[styles.playerRankTxt, Fonts.family.normal]}>
            {this.props.player.rank}
          </Text>
        </View>
        <View style={styles.playerImgWrapper}>
          <Image style={styles.playerImg} source={this.props.player.image} />
        </View>
        <View style={styles.playerName}>
          <Text
            numberOfLines={1}
            style={[
              styles.playerNameTxt,
              Fonts.direction.textStart,
              Fonts.family.normal,
            ]}>
            {this.props.player.name}
          </Text>
        </View>
        <View style={styles.playerScoreWrapper}>
          <Text style={[styles.playerScore, Fonts.family.normal]}>
            {this.props.player.score}
          </Text>
        </View>
      </View>
    );
  }
}
