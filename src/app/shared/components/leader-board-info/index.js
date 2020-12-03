import React, {Component} from 'react';
import {View} from 'react-native';
import Colors from '../../../../themes/colors';
import PropTypes from 'prop-types';
import ListItem from './list-item';
import styles from './styles';

export default class LeaderBoardInfo extends Component {
  static propTypes = {
    player: PropTypes.shape(ListItem.PlayerDTO),
    list: PropTypes.arrayOf(PropTypes.shape(ListItem.PlayerDTO)),
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topPlayers}>
          <ListItem
            topPlayer
            player={this.props.list[1]}
            rankColor={Colors.bloodOrange}
          />
          <ListItem
            championPlayer
            player={this.props.list[0]}
            rankColor={Colors.yellow}
          />
          <ListItem
            topPlayer
            player={this.props.list[2]}
            rankColor={Colors.skyblue}
          />
        </View>
        <View style={styles.currentPlayer}>
          <ListItem noBorder player={this.props.player} />
        </View>
        <View style={styles.rankingList}>
          {/*TODO: do this loop*/}
          <ListItem player={this.props.list[3]} />
          <ListItem player={this.props.list[4]} />
          <ListItem player={this.props.list[5]} />
        </View>
      </View>
    );
  }
}
