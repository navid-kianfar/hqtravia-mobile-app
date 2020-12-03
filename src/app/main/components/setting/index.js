import React, {Component} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Dialog from 'react-native-dialog';
import ImagePicker from 'react-native-image-picker';
import {Content, Label, Switch} from 'native-base';
import Images from '../../../../themes/images';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import formStyles from '../../../../themes/form-elements-style';
import Fonts from '../../../../themes/fonts';
import i18n from '../../../../services/i18n';
import styles from './styles';

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'نوید کیانفر',
      avatar: '',
      game1: true,
      game2: false,
      game3: true,
      changeUsername: false,
    };
  }

  render() {
    return (
      <Content style={styles.main}>
        <View style={{flexDirection: 'column'}}>
          <View style={styles.profileView}>
            <View style={styles.profileImgWrapper}>
              <TouchableOpacity
                style={[styles.editBtn, styles.profileEditBtn]}
                onPress={this.onChangeProfile}>
                <FontAwesome name="pencil" />
              </TouchableOpacity>
              <Image
                style={styles.profileImg}
                source={
                  this.state.avatar
                    ? {uri: this.state.avatar}
                    : Images.profile.noProfile
                }
              />
            </View>
            <View style={styles.nameWrapper}>
              <Text style={[styles.nameTxt, Fonts.family.normal]}>
                {this.state.userName}
              </Text>
              <TouchableOpacity
                style={[styles.editBtn]}
                onPress={this.onChangeName}>
                <FontAwesome name="pencil" />
              </TouchableOpacity>
            </View>
            <Label style={[styles.designtaionTxt, Fonts.family.normal]}>
              {i18n.t('MAIN_SETTING_REFERRAL_TITLE')}
            </Label>
            <View style={[formStyles.inputWrapper, {width: '80%'}]}>
              <TextInput
                style={[formStyles.input, Fonts.family.normal]}
                placeholder={i18n.t('MAIN_SETTING_REFERRAL_CODE')}
              />
            </View>
          </View>
        </View>

        <View style={styles.overlayContentBg}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text
                style={[
                  styles.textB18,
                  Fonts.family.normal,
                  Fonts.direction.textStart,
                ]}>
                {i18n.t('MAIN_SETTING_NOTIFICATIONS')}
              </Text>
              <Text
                style={[
                  styles.text14,
                  Fonts.family.normal,
                  Fonts.direction.textStart,
                ]}>
                {i18n.t('MAIN_SETTING_NOTIFICATIONS_DESC')}
              </Text>
            </View>
            <View style={styles.cardBody}>
              <View style={[styles.listItem, Fonts.direction.row]}>
                <Text style={[styles.textB18, Fonts.family.normal]}>
                  {i18n.t('MAIN_SETTING_FIRST_GAME_TYPE')}
                </Text>
                <Switch
                  onValueChange={game1 => this.setState({game1})}
                  value={this.state.game1}
                />
              </View>
              <View style={[styles.listItem, Fonts.direction.row]}>
                <Text style={[styles.textB18, Fonts.family.normal]}>
                  {i18n.t('MAIN_SETTING_SECOND_GAME_TYPE')}
                </Text>
                <Switch
                  onValueChange={game2 => this.setState({game2})}
                  value={this.state.game2}
                />
              </View>
              <View style={[styles.listItem, Fonts.direction.row]}>
                <Text style={[styles.textB18, Fonts.family.normal]}>
                  {i18n.t('MAIN_SETTING_THIRD_GAME_TYPE')}
                </Text>
                <Switch
                  onValueChange={game3 => this.setState({game3})}
                  value={this.state.game3}
                />
              </View>
            </View>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={formStyles.buttonBordered}
              onPress={this.onPressLogOut}
              activeOpacity={0.6}>
              <Text style={[formStyles.buttonBorderedTxt, Fonts.family.normal]}>
                {i18n.t('LOG_OUT')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Dialog.Container visible={this.state.changeUsername}>
          <Dialog.Title>{i18n.t('MAIN_SETTING_CHANGE_USERNAME')}</Dialog.Title>
          <Dialog.Input wrapperStyle={formStyles.dialogInput} />
          <Dialog.Button
            disabled={false}
            label={i18n.t('DONE')}
            onPress={this.onUsernameChangeDone}
          />
        </Dialog.Container>
      </Content>
    );
  }

  onChangeProfile = () => {
    // const options = {};
    //
    // ImagePicker.launchCamera(options, (response) => {
    //     // Same code as in above section!
    // });

    // ImagePicker.launchImageLibrary(options, (response) => {
    //     // Same code as in above section!
    // });

    const options = {
      title: i18n.t('MAIN_SETTING_CHANGE_AVATAR'),
      customButtons: [
        {
          name: 'remove',
          title: i18n.t('MAIN_SETTING_REMOVE_AVATAR'),
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // const source = { uri: response.uri };
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // this.setState({
        //     avatarSource: source,
        // });
      }
    });
  };

  onUsernameChangeDone = () => {
    this.setState({
      changeUsername: false,
    });
  };
  onChangeName = () => {
    this.setState({
      changeUsername: true,
    });
  };
  onPressLogOut = () => {
    alert('logout');
  };
}
