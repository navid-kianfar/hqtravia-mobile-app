import React, {Component} from 'react';
import {StatusBar, Platform, Image, View} from 'react-native';
import {Button, Container, Footer, FooterTab} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Friends from '../../components/friends';
import LeaderBoard from '../../components/leader-board';
import PowerUp from '../../components/power-up';
import GameBoard from '../../components/game-board';
import Setting from '../../components/setting';
import styles from './styles';
import Images from '../../../../themes/images';
import Colors from '../../../../themes/colors';

export default class MainPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'GameBoard',
    };
  }

  renderSelectedTab() {
    switch (this.state.selectedTab) {
      case 'Friends':
        return <Friends {...this.props} />;
      case 'LeaderBoard':
        return <LeaderBoard {...this.props} />;
      case 'PowerUp':
        return <PowerUp {...this.props} />;
      case 'GameBoard':
        return <GameBoard {...this.props} />;
      case 'Setting':
        return <Setting {...this.props} />;
      default:
    }
  }

  render() {
    StatusBar.setBarStyle('dark-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      StatusBar.setTranslucent(true);
    }
    return (
      <Container style={styles.main}>
        {this.renderSelectedTab()}
        <Footer style={styles.footer}>
          <FooterTab style={styles.footerTabBg}>
            <Button
              vertical
              onPress={() => this.setState({selectedTab: 'PowerUp'})}>
              <Ionicons
                name="md-heart"
                size={24}
                color={
                  this.state.selectedTab === 'PowerUp'
                    ? Colors.black
                    : Colors.gray
                }
                style={{justifyContent: 'center'}}
              />
            </Button>

            <Button
              vertical
              onPress={() => this.setState({selectedTab: 'Friends'})}>
              <Ionicons
                name="md-person"
                size={24}
                color={
                  this.state.selectedTab === 'Friends'
                    ? Colors.black
                    : Colors.gray
                }
                style={{justifyContent: 'center'}}
              />
            </Button>

            <Button
              vertical
              onPress={() => this.setState({selectedTab: 'GameBoard'})}>
              <View
                style={
                  this.state.selectedTab === 'GameBoard'
                    ? styles.profileIconWrapperActive
                    : styles.profileIconWrapper
                }>
                <Image style={styles.profileIcon} source={Images.logo.white} />
              </View>
            </Button>

            <Button
              vertical
              onPress={() => this.setState({selectedTab: 'LeaderBoard'})}>
              <Ionicons
                name="ios-trophy"
                size={24}
                color={
                  this.state.selectedTab === 'LeaderBoard'
                    ? Colors.black
                    : Colors.gray
                }
                style={{justifyContent: 'center'}}
              />
            </Button>

            <Button
              vertical
              onPress={() => this.setState({selectedTab: 'Setting'})}>
              <View
                style={
                  this.state.selectedTab === 'Setting'
                    ? styles.settingIconWrapperActive
                    : styles.settingIconWrapper
                }>
                <Image
                  style={styles.settingIcon}
                  source={Images.profile.noProfile}
                />
              </View>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
