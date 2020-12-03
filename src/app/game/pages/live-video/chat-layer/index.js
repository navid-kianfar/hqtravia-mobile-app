import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Platform,
  TextInput,
  Keyboard,
} from 'react-native';
import {Item} from 'native-base';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Images from '../../../../../themes/images';
import Fonts from '../../../../../themes/fonts';
import ChatItem from './chat-item';
import i18n from '../../../../../services/i18n';
import formStyles from '../../../../../themes/form-elements-style';
import styles from './styles';

export default class ChatLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMessage: '',
      livesTooltipOpen: false,
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
      typing: false,
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow.bind(this),
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide.bind(this),
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    this.refs.chatBoxScrollView.scrollToEnd({animated: false});
  }

  _keyboardDidHide() {}

  render() {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent', true);
      StatusBar.setTranslucent(true);
    }
    return (
      <View style={styles.chatLayer}>
        <View style={styles.chatBox}>
          <ScrollView
            ref="chatBoxScrollView"
            onContentSizeChange={(contentWidth, contentHeight) => {
              setTimeout(() => {
                if (
                  !this.refs.chatBoxScrollView ||
                  !this.refs.chatBoxScrollView.scrollToEnd
                ) {
                  alert('no func');
                  return;
                }
                this.refs.chatBoxScrollView.scrollToEnd({animated: true});
              }, 500);
            }}>
            <View
              style={[styles.chatList, this.state.typing && styles.chatListUT]}>
              {this.state.messages.map((data, index) => {
                return <ChatItem key={index} data={data} />;
              })}
            </View>
          </ScrollView>
        </View>
        {this.state.typing ? (
          <View style={styles.inputContainer}>
            <Item style={formStyles.inputWrapper}>
              <TextInput
                autoFocus={true}
                style={[
                  formStyles.input,
                  Fonts.family.normal,
                  Fonts.direction.textStart,
                ]}
                value={this.state.userMessage}
                editable={true}
                onChangeText={message => this.updateMessage(message)}
              />
              <TouchableOpacity onPress={this.sendChat} style={styles.sendBtn}>
                <MatIcons style={styles.sendBtnIcon} name="send" />
              </TouchableOpacity>
            </Item>
          </View>
        ) : (
          <View style={styles.chatOptions}>
            <TouchableOpacity
              style={styles.chatOption}
              activeOpacity={0.6}
              onPress={() => this.props.navigation()}>
              <MatIcons style={styles.chatOptionIcon} name="chevron-left" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.chatOption}
              activeOpacity={0.6}
              onPress={this.openEraserPopup}>
              <MatIcons style={styles.chatOptionIcon} name="eraser" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.chatOption}
              activeOpacity={0.6}
              onPress={this.openLivesPopup}>
              <MatIcons style={styles.chatOptionIcon} name="heart" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.chatOption, {backgroundColor: 'transparent'}]}
              activeOpacity={0.6}
              onPress={this.openChatInput}>
              <MatIcon style={styles.chatOptionIcon} name="chat-bubble" />
            </TouchableOpacity>
          </View>
        )}
        {this.state.livesTooltipOpen && (
          <View style={[styles.tooltip, Fonts.direction.row]}>
            <View style={styles.tooltipDesc}>
              <Text
                style={[
                  styles.tooltipHeader,
                  Fonts.family.normal,
                  Fonts.direction.textStart,
                ]}>
                {i18n.t('LIVES_TOOLTIP_HEADER')}
              </Text>
              <Text
                style={[
                  styles.tooltipText,
                  Fonts.family.normal,
                  Fonts.direction.textStart,
                ]}>
                {i18n.t('LIVES_TOOLTIP_TEXT')}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => this.setState({livesTooltipOpen: false})}
              style={styles.tooltipBtn}>
              <Text style={styles.tooltipBtnTxt}>{i18n.t('BUY')}</Text>
            </TouchableOpacity>
            <View style={styles.tooltipCaret} />
          </View>
        )}
      </View>
    );
  }

  sendChat = () => {
    if (this.state.userMessage) {
      this.setState({
        typing: false,
        messages: [
          ...this.state.messages,
          {
            image: Images.profile.noProfile,
            name: 'KNFR',
            message: this.state.userMessage,
          },
        ],
        userMessage: '',
      });
    } else {
      this.setState({
        typing: false,
      });
    }
  };

  updateMessage(message) {
    this.setState({
      userMessage: message,
    });
  }

  openEraserPopup = () => {
    alert('Eraser popup');
  };

  openLivesPopup = () => {
    this.setState({livesTooltipOpen: !this.state.livesTooltipOpen});
  };

  openChatInput = () => {
    this.setState({typing: true});
  };
}
