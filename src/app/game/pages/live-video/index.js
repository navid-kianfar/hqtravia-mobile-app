import React, {Component} from 'react';
import {
  NativeModules,
  NativeEventEmitter,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
  ImageBackground,
  Animated,
} from 'react-native';
import {RtmpView} from 'react-native-rtmpview';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Images from '../../../../themes/images';
import Metrics from '../../../../themes/metrics';
import Fonts from '../../../../themes/fonts';
import ChatLayer from './chat-layer';
import GameLayer from './game-layer';
import ResultModal from './modals/result-modal';
import ExtraLifeModal from './modals/extra-life-modal';
import EliminatedModal from './modals/eliminated-modal';
import styles from './styles';
import PropTypes from 'prop-types';

const RTMP = 'rtmp://184.72.239.149/vod/BigBuckBunny_115k.mov';
const url = 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';

export default class LiveVideoComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      animations: {
        videoSizeAnim: new Animated.Value(0),
        questionTimer: new Animated.Value(0),
      },
      onlineUsers: '52.3K',
      userMessage: '',
      userLevel: 0,
      questionInfo: {
        question: 'عمر کدامیک از پرندگان زیر از همه بیشتر است؟',
        first: 'طوطی',
        second: 'کلاغ',
        third: 'جغد',
      },
      messages: [
        {
          name: 'Alireza',
          image: Images.profile.galleryImagOne,
          message: 'salam dostan',
        },
        {
          name: 'sina',
          image: Images.profile.galleryImgTwo,
          message: 'سلام بر شما همراهان جان',
        },
        {
          name: 'siavash',
          image: Images.profile.galleryImgThree,
          message: 'هر انسان بدون آب چه مدت میتواند زنده بماند',
        },
        {
          name: 'Abbas',
          image: Images.profile.profileImgFive,
          message: 'تنها حیوانی که اصلا نمیتواند شنا کند حتی با آموزش کدام است',
        },
        {
          name: 'ahmad',
          image: Images.profile.noProfile,
          message:
            'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود',
        },
      ],
      livesTooltipOpen: false,
      gameSectionOpen: false,
      typing: false,
      resultModalOpen: false, //to open result modal
      answerStatus: true, //check if the answer is correct
      extraLifeModalOpen: false,
      eliminatedModalOpen: true,
    };
    this.player = null;

    const RNRtmpEventManager = NativeModules.RNRtmpEventManager;

    if (!(typeof RNRtmpEventManager === 'undefined')) {
      const RNRtmpEventManager = new NativeEventEmitter(
        NativeModules.RNRtmpEventManager,
      );

      RNRtmpEventManager.addListener('RNRtmpEvent', data =>
        this.handleRNRtmpEvent(data),
      );

      console.log('React Native Received: Just finished adding listeners');
    }
  }

  componentDidMount() {
    this.player.initialize();
  }

  componentWillUnmount() {}
  render() {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      StatusBar.setTranslucent(true);
    }
    return (
      <ImageBackground
        style={styles.container}
        source={Images.background.gameBackground}>
        <GameLayer
          onlineUsers={this.state.onlineUsers}
          questionInfo={this.state.questionInfo}
          firstOptionAction={() => this.growVideo()}
        />
        <Animated.View
          style={[
            styles.playerLayer,
            {
              top: this.state.animations.videoSizeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  0,
                  Metrics.statusBar -
                    Metrics.marginVertical +
                    Metrics.icons.large +
                    Metrics.WIDTH * 0.01,
                ],
              }),
              left: this.state.animations.videoSizeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, Metrics.WIDTH * 0.4],
              }),
              width: this.state.animations.videoSizeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [Metrics.WIDTH, Metrics.WIDTH * 0.2],
              }),
              height: this.state.animations.videoSizeAnim.interpolate({
                inputRange: [0, 0.2, 1],
                outputRange: [
                  Metrics.HEIGHT,
                  Metrics.WIDTH * 0.84,
                  Metrics.WIDTH * 0.2,
                ],
              }),
              borderRadius: this.state.animations.videoSizeAnim.interpolate({
                inputRange: [0, 0.2, 1],
                outputRange: [0, Metrics.WIDTH * 0.42, Metrics.WIDTH * 0.1],
              }),
            },
          ]}>
          <RtmpView
            style={styles.player}
            shouldMute={false}
            ref={e => {
              this.player = e;
            }}
            onPlaybackState={data => {
              this.handlePlaybackState(data);
            }}
            onLoadState={data => {
              this.handleLoadState(data);
            }}
            onFirstVideoFrameRendered={data => {
              this.handleFirstVideoFrameRendered(data);
            }}
            onBitrateRecalculated={data => {
              this.handleBitrateRecalculated(data);
            }}
            url={RTMP}
          />
          {!this.state.gameSectionOpen && (
            <View style={styles.playerHeader}>
              <View style={styles.header}>
                <View style={styles.userCountWrapper}>
                  <MatIcons style={styles.userCount} name="account" />
                  <Text style={[styles.userCount, Fonts.family.normal]}>
                    {this.state.onlineUsers}
                  </Text>
                </View>
                <View style={styles.logoWrapper}>
                  <Image style={styles.logo} source={Images.logo.white} />
                </View>
              </View>
            </View>
          )}
          {/*THIS PART SHOULD BE REMOVED*/}
          {!this.state.gameSectionOpen && (
            <TouchableOpacity
              onPress={() => this.shrinkVideo()}
              style={{
                alignSelf: 'center',
                paddingHorizontal: 40,
                paddingVertical: 10,
                borderRadius: 30,
                marginTop: 100,
                backgroundColor: '#fff8',
              }}>
              <Text>START</Text>
            </TouchableOpacity>
          )}
          {/*****************************/}
        </Animated.View>
        <ChatLayer
          navigation={() => this.props.navigation.navigate('MainStack')}
        />
        {this.state.resultModalOpen && (
          <ResultModal
            level={this.state.userLevel}
            questionInfo={this.state.questionInfo}
            answerStatus={this.state.answerStatus}
            backgroundImg={Images.background.gameBackground}
          />
        )}
        {this.state.extraLifeModalOpen && (
          <ExtraLifeModal style={styles.extraLifeModal} />
        )}
        {this.state.eliminatedModalOpen && (
          <EliminatedModal
            closeButton={() => this.setState({eliminatedModalOpen: false})}
            question={this.state.questionInfo.question}
            wrongAnswer={this.state.questionInfo.first}
          />
        )}
      </ImageBackground>
    );
  }
  shrinkVideo = () => {
    this.setState({gameSectionOpen: true});
    Animated.timing(this.state.animations.videoSizeAnim, {
      toValue: 1,
      duration: 500,
    }).start();
  };
  growVideo = () => {
    this.setState({gameSectionOpen: false});
    Animated.timing(this.state.animations.videoSizeAnim, {
      toValue: 0,
      duration: 500,
    }).start();
  };
  startTimer = () => {
    this.setState({animations: {questionTimer: 0}});
    Animated.timing(this.state.animations.questionTimer, {
      toValue: 100,
      duration: 5,
    }).start();
  };

  handlePlaybackState(data) {
    console.log(
      'React Native Received PlaybackState ' + data.nativeEvent['state'],
    );
  }

  handleLoadState(data) {
    console.log('React Native Received LoadState ' + data.nativeEvent['state']);
    console.log(
      'React Native Received LoadState Qos ' +
        JSON.stringify(data.nativeEvent['qos']),
    );
  }

  handleFirstVideoFrameRendered(data) {
    console.log('React Native Received FirstVideoFrameRendered');

    this.player.unmute();
  }

  handleBitrateRecalculated(data) {
    console.log(
      'React Native BitrateRecalculated ' +
        JSON.stringify(data.nativeEvent['bitrate']),
    );
  }

  handleRNRtmpEvent(data) {
    console.log(
      'React Native Received RNRtmpEventManager ' + JSON.stringify(data),
    );
  }
}
