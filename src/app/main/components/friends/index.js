import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Container, Content, Item, Button} from 'native-base';
import Contacts from 'react-native-contacts';
import i18n from '../../../../services/i18n';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Images from '../../../../themes/images';
import Fonts from '../../../../themes/fonts';
import ContactItem from './contact-item';
import formStyles from '../../../../themes/form-elements-style';
import styles from './styles';
import Colors from '../../../../themes/colors';

export default class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      connectedContact: false,
      contacts: [],
    };
  }

  render() {
    return (
      <Container>
        <View style={styles.header}>
          <View style={styles.headerTitleWrapper}>
            <Text style={[styles.headerTitle, Fonts.family.normal]}>
              {i18n.t('FRIENDS_PAGE_TITLE')}
            </Text>
          </View>
          <Item style={[formStyles.inputWrapper, Fonts.direction.row]}>
            <FontAwesome name="search" style={styles.searchIcon} />
            <TextInput
              style={[formStyles.input, Fonts.family.normal]}
              value={this.state.searchInput}
              editable={true}
              placeholderTextColor="#B7B6B9"
              placeholder={i18n.t('FRIENDS_SEARCH_PLACEHOLDER')}
              textAlign={i18n.isRTL ? 'right' : 'left'}
              onChangeText={search => this.updateSearch(search)}
            />
          </Item>
        </View>
        <Content>
          {this.state.connectedContact ? (
            <View style={styles.content}>
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Text
                    style={[
                      styles.sectionHeaderTitle,
                      Fonts.family.normal,
                      Fonts.direction.textStart,
                      {color: Colors.loginGreen},
                    ]}>
                    {i18n.t('FRIENDS')}
                  </Text>
                </View>
                <View style={styles.contactList} />
              </View>
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Text
                    style={[
                      styles.sectionHeaderTitle,
                      Fonts.family.normal,
                      Fonts.direction.textStart,
                    ]}>
                    {i18n.t('SUGGESTED_FRIENDS')}
                  </Text>
                </View>
                <View style={styles.contactList} />
              </View>
              <View style={[styles.section, styles.noBorder]}>
                <View style={styles.sectionHeader}>
                  <Text
                    style={[
                      styles.sectionHeaderTitle,
                      Fonts.family.normal,
                      Fonts.direction.textStart,
                    ]}>
                    {i18n.t('INVITE_CONTACTS')}
                  </Text>
                </View>
                <View style={styles.contactList}>
                  {this.state.contacts.map((contact, index) => {
                    return (
                      <ContactItem
                        key={index}
                        contact={contact}
                        buttonAction={() => alert('add')}
                        buttonLabel={i18n.t('ADD')}
                      />
                    );
                  })}
                </View>
                <View style={styles.actionBtnWrapper}>
                  <TouchableOpacity
                    onPress={() => alert('show more')}
                    style={styles.actionBtn}
                    activeOpacity={0.8}>
                    <Text style={[styles.actionBtnTxt, Fonts.family.normal]}>
                      {i18n.t('FRIENDS_VIEW_ALL_CONTACTS')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <View style={styles.noContactContent}>
              <View style={styles.banner}>
                <View style={styles.userIconWrapper}>
                  <Image
                    style={styles.userIcon}
                    source={Images.profile.userIcon}
                  />
                </View>
                <View style={styles.userIconWrapper}>
                  <Image
                    style={styles.userIcon}
                    source={Images.profile.userIcon}
                  />
                </View>
                <View style={styles.userImageWrapper}>
                  <View style={styles.friendsImgWrapper}>
                    <Image
                      style={styles.friendsImg}
                      source={Images.logo.friends}
                    />
                  </View>
                  <Image
                    style={styles.userImage}
                    source={Images.profile.noProfile}
                  />
                </View>
                <View style={styles.userIconWrapper}>
                  <Image
                    style={styles.userIcon}
                    source={Images.profile.userIcon}
                  />
                </View>
                <View style={styles.userIconWrapper}>
                  <Image
                    style={styles.userIcon}
                    source={Images.profile.userIcon}
                  />
                </View>
              </View>
              <Text style={[styles.noContactDesc, Fonts.family.normal]}>
                {i18n.t('FRIENDS_NO_CONTACT_DESCRIPTION')}
              </Text>
              <Button
                onPress={() => this.readContact()}
                style={[formStyles.button, formStyles.colorTwo]}
                rounded>
                <Text
                  style={[
                    formStyles.buttonText,
                    formStyles.whiteTxt,
                    Fonts.family.normal,
                    Fonts.family.normal,
                  ]}>
                  {i18n.t('CONNECT_ADDRESS_BOOK')}
                </Text>
              </Button>
            </View>
          )}
        </Content>
      </Container>
    );
  }

  readContact() {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      }).then(() => {
        Contacts.getAll((err, contacts) => this.loadContacts(err, contacts));
      });
      return;
    }
    Contacts.getAll((err, contacts) => this.loadContacts(err, contacts));
  }

  loadContacts(err, contacts) {
    if (err) {
      if (err === 'denied') {
        return;
      } else {
        throw err;
      }
    }

    const list = contacts
      .filter(i => i.phoneNumbers.length > 0)
      .map(i => {
        let number = i.phoneNumbers.filter(i => i.label === 'mobile').pop();
        if (!number) number = i.phoneNumbers[0];
        return {
          name: `${i.givenName || ''} ${i.familyName || ''}`.trim(),
          id: i.recordID,
          number: number,
          hasThumbnail: i.hasThumbnail,
          image: i.hasThumbnail ? i.thumbnailPath : '',
        };
      });
    this.setState({
      connectedContact: true,
      userContacts: list,
      contacts: list,
    });
  }

  updateSearch(search) {
    this.setState({
      searchInput: search,
    });
  }
}
