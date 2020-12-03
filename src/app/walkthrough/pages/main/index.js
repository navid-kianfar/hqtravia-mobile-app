import React, {Component} from 'react';
import {Image, Platform, StatusBar, Text, View} from 'react-native';
import {Button, Container} from 'native-base';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../../../../themes/fonts';
import i18n from '../../../../services/i18n';
import styles from './styles';

export default class WalkThroughMainPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: [
      {
        id: 1,
        image: {
          uri:
            'http://antiqueruby.aliansoftware.net/Images/walkthrough/light_wt14.png',
        },
        title: i18n.t('WALK_THROUGH_PLAY_TITLE'),
        description: i18n.t('WALK_THROUGH_PLAY_DESCRIPTION'),
      },
      {
        id: 2,
        image: {
          uri:
            'http://antiqueruby.aliansoftware.net/Images/walkthrough/light_wt14.png',
        },
        title: i18n.t('WALK_THROUGH_WIN_TITLE'),
        description: i18n.t('WALK_THROUGH_WIN_DESCRIPTION'),
      },
      {
        id: 3,
        image: {
          uri:
            'http://antiqueruby.aliansoftware.net/Images/walkthrough/light_wt14.png',
        },
        title: i18n.t('WALK_THROUGH_NETWORK_TITLE'),
        description: i18n.t('WALK_THROUGH_NETWORK_DESCRIPTION'),
      },
    ],
    index: 0,
  };

  render() {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('rgba(0,0,0,0.3)', true);
      StatusBar.setTranslucent(true);
    }

    return (
      <Container>
        <LinearGradient
          locations={[0.15, 1]}
          colors={['#ff895b', '#ff4863']}
          style={styles.shadowBg}>
          <Swiper
            showsButtons={false}
            autoplay={false}
            loop={false}
            ref="swiper"
            index={this.state.index}
            activeDot={<View style={styles.activeDot} />}
            dot={<View style={styles.dot} />}
            onIndexChanged={idx => this.onIndexChanged(idx)}>
            {(this.state.data || []).map((item, index) => {
              return (
                <View style={styles.slide} key={index}>
                  <Text style={[styles.headertext, Fonts.family.normal]}>
                    {item.title}
                  </Text>
                  <Text style={[styles.desctext, Fonts.family.normal]}>
                    {item.description}
                  </Text>
                  <Image source={item.image} style={styles.sliderImage} />
                </View>
              );
            })}
          </Swiper>

          <View style={styles.btnsec}>
            <Button
              rounded
              onPress={() => this.onSkip()}
              style={styles.nextBotton}>
              <Text style={[styles.nextText, Fonts.family.normal]}>
                {i18n.t('SKIP')}
              </Text>
            </Button>
          </View>
        </LinearGradient>
      </Container>
    );
  }

  onIndexChanged(index) {
    this.setState({index});
  }

  async onSkip() {
    // SyncStorage.set('SkipTutorial', true);
    await this.props.navigation.navigate('AuthStack');
  }
}
