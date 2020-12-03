import React, {Component} from 'react';
import {View, Text, ImageBackground, TextInput} from 'react-native';
import {Button, Item, Title} from 'native-base';
import i18n from '../../../../services/i18n';
import images from '../../../../themes/images';
import Fonts from '../../../../themes/fonts';
import Colors from '../../../../themes/colors';
import formStyles from '../../../../themes/form-elements-style';
import DatePicker from '../../../shared/components/date-picker';
import styles from './styles';

export default class UpdateProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    birthDay: undefined,
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={images.background.authentication}
          style={styles.background}>
          <View style={styles.header}>
            <View style={[styles.headerButtonWrapper, styles.left]} />
            <View style={styles.headerTitleWrapper}>
              <Title style={[styles.headerTitle, Fonts.family.normal]}>
                {i18n.t('AUTH_UPDATE_PROFILE_PAGE_TITLE')}
              </Title>
            </View>
            <View style={[styles.headerButtonWrapper, styles.right]}>
              <Button
                style={styles.headerRightButton}
                onPress={this._onPressNext}
                block
                bordered
                rounded
                small>
                <Text
                  style={[styles.headerRightButtonText, Fonts.family.normal]}
                  uppercase={false}>
                  {i18n.t('NEXT')}
                </Text>
              </Button>
            </View>
          </View>
          <View style={styles.content}>
            <Item style={formStyles.inputWrapperLarge}>
              <TextInput
                style={[formStyles.inputLarge, Fonts.family.normal]}
                value={this.state.userName}
                placeholder={i18n.t('FULL_NAME')}
                editable={true}
                placeholderTextColor={Colors.placeholder}
                textAlign={'center'}
                onChangeText={userName => {}}
              />
            </Item>
            <Item style={formStyles.inputWrapperLarge}>
              <DatePicker
                placeholder={i18n.t('BIRTHDAY')}
                placeholderTextColor={Colors.placeholder}
                style={[formStyles.inputLarge, Fonts.family.normal]}
                wrapperStyle={formStyles.datePicker}
                activeOpacity={0.8}
                onConfirm={date => this.setState({birthDay: date})}
                value={this.state.birthDay}
              />
            </Item>
            <Item style={formStyles.inputWrapperLarge}>
              <TextInput
                style={[formStyles.inputLarge, Fonts.family.normal]}
                value={this.state.referral}
                placeholder={i18n.t('REFERRAL')}
                editable={true}
                placeholderTextColor={Colors.placeholder}
                textAlign={'center'}
                onChangeText={referral => {}}
              />
            </Item>
          </View>
          <View style={styles.footer}>
            <Text
              style={[
                styles.footerText,
                styles.textLight,
                Fonts.family.normal,
              ]}>
              {i18n.t('AUTH_VERIFY_PRIVACY_DESC')}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  _onPressNext = () => {
    this.props.navigation.navigate('MainStack');
  };
}
