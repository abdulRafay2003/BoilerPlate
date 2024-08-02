import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  AuthHeader,
  CustomInput,
  CustomText,
  MainContainer,
  PrimaryButton,
  SecondaryButton,
} from '../../../components';
import {Formik} from 'formik';
import {
  Colors,
  FontType,
  Images,
  Metrix,
  NavigationService,
  RouteNames,
  Utills,
} from '../../../config';
import Schema from '../../../formik';
import {SignupScreenProps} from '../../propTypes';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reducers';
import {AuthActions, HomeActions} from '../../../redux/actions';
import {t} from 'i18next';

export const SignupScreen: React.FC<SignupScreenProps> = ({}) => {
  const dispatch = useDispatch();
  const [hidePassword, setHidePassword] = useState(true);
  let emailRef = useRef<TextInput>(null!);
  let passwordRef = useRef<TextInput>(null!);

  const languageOptions = [
    {
      id: '1',
      name: t('Login Now'),
      icon: Images.mail,
      onPress: () =>
        NavigationService.navigate(RouteNames.AuthRoutes.LoginScreen),
      // dispatch(HomeActions.setUserDetails({name: 'John Doe', id: '1'})),
    },
    {
      id: '2',
      name: t('Sign Up Now'),
      icon: Images.Signup,
      onPress: () =>
        NavigationService.navigate(RouteNames.AuthRoutes.RegisterScreen),
    },
    {
      id: '3',
      name: t('Continue with Google'),
      icon: Images.GoogleLogo,
      onPress: () =>
        dispatch(HomeActions.setUserDetails({name: 'John Doe', id: '1'})),
    },
  ];
  return (
    <AuthHeader
      heading={t('heading')}
      title={t('continue')}
      topHeader={{flex: 1.7}}
      showBackHeader={false}
      customStyles={{marginTop: Metrix.VerticalSize(20)}}>
      {languageOptions.map((option, index) => (
        <SecondaryButton
          key={index}
          title={option.name}
          source={option.icon}
          isIcon
          icon={0}
          onPress={option.onPress}
        />
      ))}
    </AuthHeader>
  );
};

interface SignupScreenStyles {}
const styles = StyleSheet.create<SignupScreenStyles>({});
