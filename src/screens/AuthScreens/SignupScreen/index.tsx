import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
  AuthHeader,
  CustomInput,
  CustomText,
  MainContainer,
  PrimaryButton,
  SecondaryButton,
} from '../../../components';
import { Formik } from 'formik';
import {
  Colors,
  FontType,
  Images,
  Metrix,
  NavigationService,
  RouteNames,
} from '../../../config';
import Schema from '../../../formik';
import { SignupScreenProps } from '../../propTypes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { AuthActions } from '../../../redux/actions';
import { t } from 'i18next';


export const SignupScreen: React.FC<SignupScreenProps> = ({ }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.user.loader);
  const [hidePassword, setHidePassword] = useState(true);
  let emailRef = useRef<TextInput>(null!);
  let passwordRef = useRef<TextInput>(null!);

  const languageOptions = [
    {
      name: t("continue_with_google"), icon: Images.GoogleLogo,
      onPress: () => NavigationService.navigate(RouteNames.AuthRoutes.GoogleSignUp)
    },
    {
      name: t("continue_with_mail"), icon: Images.mail,
      onPress: () => NavigationService.navigate(RouteNames.AuthRoutes.LoginScreen)
    },
    {
      name: t("continue_with_mobile"), icon: Images.smartphone,
      onPress: () => NavigationService.navigate(RouteNames.AuthRoutes.VerifyUser)
    }
  ];
  return (
    <AuthHeader
      heading={t("heading")}
      title={t("continue")}
      customStyles={{ marginTop: Metrix.VerticalSize(20) }}
    >
      {languageOptions.map((option, index) => (
        <SecondaryButton
          key={index}
          title={option.name}
          source={option.icon}
          isIcon icon={0}
          onPress={option.onPress}
        // onPress={option.onPress}
        />
      ))}
    </AuthHeader>
  );
};

interface SignupScreenStyles { }
const styles = StyleSheet.create<SignupScreenStyles>({});
