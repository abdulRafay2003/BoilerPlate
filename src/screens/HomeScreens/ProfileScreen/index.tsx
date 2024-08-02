import {
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {
  BackHeader,
  CustomText,
  MainContainer,
  NormalCardComponent,
  PrimaryButton,
  RoundImageContainer,
  SecondaryButton,
} from '../../../components';
import {ProfileScreenProps} from '../../propTypes';
import {useDispatch, useSelector} from 'react-redux';
import {Colors, Images, Metrix, Utills} from '../../../config';
import {t} from 'i18next';
import {RootState} from '../../../redux/reducers';
import {useNavigation} from '@react-navigation/native';
import {AuthActions} from '../../../redux/actions';

export const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const token = useSelector((state: RootState) => state.user.authorize);
  console.log('Access token', token);

  // const darkMode = useSelector((state: RootState) => state?.home?.darkMode);
  // const toggleDrakMode = () => {
  //   dispatch(HomeActions.setDarkMode()); // Dispatch the toggleTheme action
  //   setTimeout(() => RNRestart.restart(), 300);
  // };

  const CardData = [
    {
      id: '1',
      image: Images.Profile,
      text: 'Profile',
      // navigateTo: 'Login',
      condition: token,
    },
    {
      id: '2',
      image: Images.MyWallet,
      text: 'My Wallet',
      navigateTo: 'AboutUs',
      condition: token,
    },
    {
      id: '3',
      image: Images.MyWishlist,
      text: 'My Wishlist',
      // navigateTo: 'Login',
      condition: token,
    },
    {
      id: '4',
      image: Images.MyProgress,
      text: 'My Progress',
      onPress: () => {},
      condition: false,
    },
    {
      id: '5',
      image: Images.Referral,
      text: 'Share Referral',
      onPress: () => {},
      // accessToken: Acctoken,
      condition: token,
    },
    {
      id: '6',
      image: Images.Blogs,
      text: 'Blogs',
      onPress: () => {
        Linking.openURL('https://www.mobilezmarket.com/blogs');
      },
    },
    {
      id: '7',
      image: Images.Videos,
      text: 'Videos',
      // navigateTo: 'Login',
    },
    {
      id: '8',
      image: Images.ContactUs,
      text: 'Contact Us',
      // navigateTo: 'Login',
    },
    {
      id: '9',
      image: Images.AboutUs,
      text: 'About Us',
      onPress: () => {
        Linking.openURL('https://www.mobilezmarket.com/about');
      },
    },
    {
      id: '10',
      image: Images.PrivacyPolicy,
      text: 'Privacy Policy',
      onPress: () => {
        Linking.openURL('https://www.mobilezmarket.com/privacy-policy');
      },
    },
    {
      id: '11',
      image: Images.AccountManagement,
      text: 'Account Management',
      // navigateTo: 'Login',
      condition: token,
    },
    {
      id: '12',
      image: Images.TermsConditions,
      text: 'Terms & Conditions',
      onPress: () => {
        Linking.openURL('https://www.mobilezmarket.com/terms-conditions');
      },
    },
    {
      id: '9',
      image: Images.AboutUs,
      text: 'About Us',
      onPress: () => {
        Linking.openURL('https://www.mobilezmarket.com/about');
      },
    },
    {
      id: '10',
      image: Images.PrivacyPolicy,
      text: 'Privacy Policy',
      onPress: () => {
        Linking.openURL('https://www.mobilezmarket.com/privacy-policy');
      },
    },
    {
      id: '11',
      image: Images.AccountManagement,
      text: 'Account Management',
      // navigateTo: 'Login',
      condition: token,
    },
    {
      id: '12',
      image: Images.TermsConditions,
      text: 'Terms & Conditions',
      onPress: () => {
        Linking.openURL('https://www.mobilezmarket.com/terms-conditions');
      },
    },

    // {
    //   id: '13',
    //   image: Images.LogOut,
    //   text: 'Log Out',
    //   onPress: () => {},
    //   condition: token,
    // },
  ];

  const handleMenuItemPress = (item: any) => {
    if (item.onPress) {
      item.onPress();
    } else if (item.navigateTo) {
      navigation.navigate(item?.navigateTo);
    }
  };

  const renderSeetingsItem = ({item}: any) => {
    if (item.condition !== undefined && !item.condition) return null;
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => handleMenuItemPress(item)}
        key={item?.id}
        style={styles.renderContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RoundImageContainer circleWidth={28} source={item?.image} />
          <CustomText.RegularText customStyle={styles.itemText}>
            {item?.text}
          </CustomText.RegularText>
        </View>
        <View>
          <RoundImageContainer circleWidth={22} source={Images.CircularArrow} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <MainContainer
      customeStyle={{
        paddingHorizontal: 0,
        flex: 1,
      }}>
      <CustomText.ExtraLargeBoldText
        customStyle={{paddingHorizontal: Metrix.HorizontalSize(20)}}>
        {t('Settings')}
      </CustomText.ExtraLargeBoldText>
      <View style={{flex: 1}}>
        <View style={{flex: 0.25}}>
          <View style={styles.profileCard}>
            <View style={styles.cardLeftContainer}>
              <View style={styles.avatarContainer}>
                <RoundImageContainer circleWidth={70} source={Images.user2} />
              </View>
              <View style={styles.detailsContainer}>
                <CustomText.MediumText
                  customStyle={{
                    color: Utills.selectedThemeColors().Primary,
                    fontWeight: '700',
                  }}>
                  Abdul Rafay
                </CustomText.MediumText>
                <CustomText.SmallText>
                  abdulrafay118@gmail.com
                </CustomText.SmallText>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.editProfileButton}>
                  <CustomText.ExtraSmallText
                    customStyle={{color: Utills.selectedThemeColors().Base}}>
                    Edit Profile
                  </CustomText.ExtraSmallText>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => dispatch(AuthActions.loginSuccess(false))}
              style={styles.logoutContainer}>
              <Image
                source={Images.LogOut}
                resizeMode="contain"
                style={styles.logoutImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <FlatList
            data={CardData}
            renderItem={renderSeetingsItem}
            contentContainerStyle={styles.flatlistContentContainer}
            keyExtractor={item => item?.id}
          />
        </View>
      </View>
    </MainContainer>
  );
};

interface ProfileScreenStyles {}
const styles = StyleSheet.create({
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.VerticalSize(10),
    // marginVertical: Metrix.VerticalSize(10),
    borderRadius: Metrix.HorizontalSize(8),
    marginHorizontal: Metrix.HorizontalSize(20),
    backgroundColor: Utills.selectedThemeColors().Base,
    marginTop: Metrix.VerticalSize(20),
    marginBottom: Metrix.VerticalSize(10),
    ...Metrix.cardShadow,
  },
  cardLeftContainer: {
    width: '80%',
    flexDirection: 'row',
    borderRightWidth: 1,
    borderColor: Utills.selectedThemeColors().TextInputBorderColor,
  },
  avatarContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    width: '70%',
    justifyContent: 'center',
    paddingLeft: Metrix.HorizontalSize(8),
  },
  editProfileButton: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrix.HorizontalSize(10),
    paddingVertical: Metrix.HorizontalSize(4),
    borderRadius: Metrix.HorizontalSize(4),
    backgroundColor: Utills.selectedThemeColors().Primary,
    marginTop: Metrix.VerticalSize(5),
  },
  logoutContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutImage: {
    width: Metrix.HorizontalSize(25),
    height: Metrix.VerticalSize(25),
  },
  flatlistContentContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Utills.selectedThemeColors().Base,
    marginTop: Metrix.VerticalSize(10),
    borderRadius: Metrix.HorizontalSize(8),
    paddingBottom: Metrix.VerticalSize(20),
    // ...Metrix.cardShadow,
  },
  renderContainer: {
    borderBottomWidth: 1,
    borderColor: Utills.selectedThemeColors().TextInputBorderColor,
    paddingHorizontal: Metrix.HorizontalSize(12),
    paddingVertical: Metrix.VerticalSize(7),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: Metrix.VerticalSize(5),
    borderRadius: Metrix.HorizontalSize(80),
    width: '100%',
    backgroundColor: Utills.selectedThemeColors().Base,
    ...Metrix.cardShadow,
  },
  itemText: {
    marginLeft: Metrix.HorizontalSize(10),
    fontWeight: '500',
  },
});
