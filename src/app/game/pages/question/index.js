import React, {Component} from 'react';
import {Text, StatusBar, Platform, View} from 'react-native';

export default class QuestionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      StatusBar.setTranslucent(true);
    }
    return (
      <View>
        <Text>question</Text>
      </View>
    );
  }
}
