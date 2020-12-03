import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Container, Content, Header} from 'native-base';
import i18n from '../../../../services/i18n';
import LeaderBoardInfo from '../../../shared/components/leader-board-info';
import Button from '../../../shared/components/button';
import Images from '../../../../themes/images';
import styles from './styles';
import Fonts from '../../../../themes/fonts';
import Colors from '../../../../themes/colors';

export default class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAllTime: false,
      currentPlayer: {
        name: 'kianfar',
        image: Images.profile.noProfile,
        score: '$15',
        rank: 25,
      },
      allTimeTopPlayers: [
        {
          name: 'moonoi',
          image: Images.profile.profileImgOne,
          score: '$15',
          rank: 1,
        },
        {
          name: 'sbhsja',
          image: Images.profile.profileImgTwo,
          score: '$10',
          rank: 2,
        },
        {
          name: 'RequiemCube',
          image: Images.profile.profileImgThree,
          score: '$8',
          rank: 3,
        },
        {
          name: 'The BMF',
          image: Images.profile.profileImgFour,
          score: '$7',
          rank: 4,
        },
        {
          name: 'oneAUaway',
          image: Images.profile.noProfile,
          score: '$5',
          rank: 5,
        },
        {
          name: 'Farid',
          image: Images.profile.profileImgSix,
          score: '$2',
          rank: 6,
        },
      ],
      thisWeekTopPlayers: [
        {
          name: 'RequiemCube',
          image: Images.profile.profileImgThree,
          score: '$28',
          rank: 1,
        },
        {
          name: 'The BMF',
          image: Images.profile.profileImgFour,
          score: '$18',
          rank: 2,
        },
        {
          name: 'moonoi',
          image: Images.profile.profileImgOne,
          score: '$15',
          rank: 3,
        },
        {
          name: 'sbhsja',
          image: Images.profile.profileImgTwo,
          score: '$10',
          rank: 4,
        },
        {
          name: 'oneAUaway',
          image: Images.profile.noProfile,
          score: '$5',
          rank: 5,
        },
        {
          name: 'Farid',
          image: Images.profile.profileImgSix,
          score: '$2',
          rank: 6,
        },
      ],
    };
  }
  render() {
    return (
      <Container>
        <Header transparent>
          <Text style={[styles.headerTitle, Fonts.family.normal]}>
            {i18n.t('LEADER_BOARD_PAGE_TITLE')}
          </Text>
        </Header>
        <Content style={styles.content}>
          <View style={styles.btnContainer}>
            <Button
              label={i18n.t('THIS_WEEK')}
              onPress={() => this.setState({isAllTime: false})}
              width={'49%'}
              background={'transparent'}
              color={Colors.gray}
              bordered={{
                width: 2,
                color: Colors.gray,
              }}
              disabled={!this.state.isAllTime}
              disabledStyle={{
                color: Colors.snow,
                styles: styles.activeBtn,
              }}
            />
            <Button
              label={i18n.t('ALL_TIME')}
              onPress={() => this.setState({isAllTime: true})}
              width={'49%'}
              background={'transparent'}
              color={Colors.gray}
              bordered={{
                width: 2,
                color: Colors.gray,
              }}
              disabled={this.state.isAllTime}
              disabledStyle={{
                color: Colors.snow,
                styles: styles.activeBtn,
              }}
            />
          </View>
          <LeaderBoardInfo
            player={this.state.currentPlayer}
            list={
              this.state.isAllTime
                ? this.state.allTimeTopPlayers
                : this.state.thisWeekTopPlayers
            }
          />
        </Content>
      </Container>
    );
  }
}
