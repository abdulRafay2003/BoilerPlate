import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {CustomText, MainContainer, NormalCardComponent, PrimaryButton} from '../../../components';
import {ProfileScreenProps} from '../../propTypes';
import {useDispatch, } from 'react-redux';
import {Colors, Images, Metrix, Utills} from '../../../config';
import {t} from 'i18next';

export const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  const dispatch = useDispatch();
  // const darkMode = useSelector((state: RootState) => state?.home?.darkMode);
  // const toggleDrakMode = () => {
  //   dispatch(HomeActions.setDarkMode()); // Dispatch the toggleTheme action
  //   setTimeout(() => RNRestart.restart(), 300);
  // };

  const CardData = [
    {
      image: Images.Placeholder,
      text: 'Point and amount',
      icon: Images.ArrowChevron,
    },
    {
      image: Images.Placeholder,
      text: 'Transactions history',
      icon: Images.ArrowChevron,
    },
    {
      image: Images.Placeholder,
      text: 'My notifications',
      icon: Images.ArrowChevron,
    },
    {
      image: Images.Placeholder,
      text: 'My favorite courses',
      icon: Images.ArrowChevron,
    },
    {
      image: Images.Placeholder, 
      text: 'Exchange', 
      icon: Images.ArrowChevron
  },
    {
      image: Images.Placeholder, 
      text: 'My wallet', 
    icon: Images.ArrowChevron
  },
    {
      image: Images.Placeholder,
      text: 'Support Agent',
      icon: Images.ArrowChevron,
    },
    {
      image: Images.Placeholder, 
      text: 'My account', 
      icon: Images.ArrowChevron}
      ,
    {
      image: Images.Placeholder, 
      text: 'Setting', 
      icon: Images.ArrowChevron
    },
    {
      image: Images.Placeholder, 
      text: 'Logout', 
      icon: Images.ArrowChevron
    },
  ];
  return (
    <MainContainer isFlatList>
      <CustomText.ExtraLargeBoldText>
        {t('profile')}
      </CustomText.ExtraLargeBoldText>
      <ScrollView>
        {/* <PrimaryButton
          title={t('Logout')}
          onPress={() => dispatch(AuthActions.loginSuccess(false))}
        />
        <Switch
          trackColor={{
            false: Utills.selectedThemeColors().PrimaryColorOpacity(),
            true: Utills.selectedThemeColors().Primary,
          }}
          thumbColor={'#ffffff'}
          ios_backgroundColor={Utills.selectedThemeColors().PrimaryColorOpacity()}
          onValueChange={toggleDrakMode}
          value={darkMode}
        /> */}
        {CardData.map((option, index) => (
          <NormalCardComponent
            key={index}
            image={option.image}
            text={option.text}
            icon={option.icon}
          />
        ))}
      </ScrollView>
    </MainContainer>
  );
};

interface ProfileScreenStyles {}
const styles = StyleSheet.create<ProfileScreenStyles>({});
