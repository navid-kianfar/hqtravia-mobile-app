import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {Body, Button, Container, Left, Right, Radio} from 'native-base';
import i18n from '../../../../services/i18n';
import Images from '../../../../themes/images';
import Colors from '../../../../themes/colors';
import Fonts from '../../../../themes/fonts';
import formStyles from '../../../../themes/form-elements-style';
import DeviceInfo from '../../../lib/device-info';
import Config from '../../../../services/config';
import styles from './styles';

type props = {};
export default class LanguagePage extends Component<props> {
  constructor(props) {
    super(props);
    const lang = DeviceInfo.lang || Config.DefaultLanguage;
    this.state = {
      language: lang,
    };
    i18n.forceLanguage(lang);
  }

  render() {
    return (
      <Container>
        <View style={styles.background}>
          <View style={styles.logoWrapper}>
            <Image style={styles.logo} source={Images.logo.main} />
          </View>
          <View style={styles.listContainer}>
            <TouchableWithoutFeedback onPress={() => this.changeLanguage('fa')}>
              <View style={styles.listItem} icon>
                <Left>
                  <Image style={styles.flag} source={Images.lang.fa} />
                </Left>
                <Body>
                  <Text style={[styles.name, styles.fa]}>فارسی</Text>
                </Body>
                <Right>
                  <Radio
                    color={Colors.gray}
                    selectedColor={Colors.snow}
                    onPress={() => this.changeLanguage('fa')}
                    selected={this.state.language === 'fa'}
                  />
                </Right>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.changeLanguage('en')}>
              <View style={styles.listItem} icon>
                <Left>
                  <Image style={styles.flag} source={Images.lang.en} />
                </Left>
                <Body style={styles.listBody}>
                  <Text style={[styles.name, styles.en]}>English</Text>
                </Body>
                <Right>
                  <Radio
                    color={Colors.gray}
                    selectedColor={Colors.snow}
                    onPress={() => this.changeLanguage('en')}
                    selected={this.state.language === 'en'}
                  />
                </Right>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.changeLanguage('ar')}>
              <View style={styles.listItem} icon>
                <Left>
                  <Image style={styles.flag} source={Images.lang.ar} />
                </Left>
                <Body style={styles.listBody}>
                  <Text style={[styles.name, styles.ar]}>العربية</Text>
                </Body>
                <Right>
                  <Radio
                    color={Colors.gray}
                    selectedColor={Colors.snow}
                    onPress={() => this.changeLanguage('ar')}
                    selected={this.state.language === 'ar'}
                  />
                </Right>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => this.changeLanguage('hi')}>
              <View style={styles.listItem} icon>
                <Left>
                  <Image style={styles.flag} source={Images.lang.hi} />
                </Left>
                <Body style={styles.listBody}>
                  <Text style={[styles.name, styles.hi]}>हिन्दी</Text>
                </Body>
                <Right>
                  <Radio
                    color={Colors.gray}
                    selectedColor={Colors.snow}
                    onPress={() => this.changeLanguage('hi')}
                    selected={this.state.language === 'hi'}
                  />
                </Right>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <Button
            rounded
            style={formStyles.button}
            onPress={() => this.onNext()}>
            <Text style={[formStyles.buttonText, Fonts.family.normal]}>
              {i18n.t('LANG_ACCEPT_AND_CONTINUE')}
            </Text>
          </Button>
        </View>
      </Container>
    );
  }

  async onNext() {
    await this.props.navigation.navigate('Main', {
      language: this.state.language,
    });
  }

  changeLanguage(language) {
    i18n.forceLanguage(language);
    this.setState({language});
  }
}
