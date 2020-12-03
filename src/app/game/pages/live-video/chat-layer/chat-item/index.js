import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

export default class ChatItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={this.props.data.image} />
        </View>
        <Text style={styles.text}>
          <Text style={styles.name}>{this.props.data.name} </Text>
          <Text style={styles.message}> {this.props.data.message}</Text>
        </Text>
      </View>
    );
  }
}
