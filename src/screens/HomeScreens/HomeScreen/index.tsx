import 'react-native-gesture-handler';
import {Dimensions, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {HomeScreenProps} from '../../propTypes';
import {CustomText, MainContainer, PrimaryButton} from '../../../components';
import {Colors} from '../../../config';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reducers';
import {AuthAPIS} from '../../../services/auth';
import {HomeActions} from '../../../redux/actions';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.home.userDetails);
  const token = useSelector((state: RootState) => state.user.authorize);
  console.log('Vlaue', userData);

  const login = async () => {
    AuthAPIS.userLogin({
      email: 'azeem@gmail.com',
      password: '123456',
      token: 'fcmToken',
    })
      .then(res => {
        console.log('Response', res?.data);
        dispatch(
          HomeActions.setUserDetails({
            ...res?.data,
          }),
        );
      })
      .catch(err => {
        console.log('Error', err);
      });
  };

  return (
    <MainContainer>
      <CustomText.ExtraLargeBoldText>{t('home')}</CustomText.ExtraLargeBoldText>
      <PrimaryButton title="Hit" onPress={login} />
    </MainContainer>
  );
};

interface HomeScreenStyles {}
const styles = StyleSheet.create({
  drawerContent: {
    position: 'absolute',
    zIndex: 999,
    flex: 1,
  },
  userInfoSection: {
    marginTop: 50,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    paddingTop: 25,
    borderTopWidth: 1,
    borderColor: Colors.InActiveTabBar,
    marginTop: 25,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
