import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Colors,
  FontType,
  Metrix,
  NavigationService,
  RouteNames,
} from '../../../config';
import {AuthHeader, CustomInput, CustomText} from '../../../components';
import {Formik} from 'formik';
import Schema from '../../../formik';
import {LoginScreenProps} from '../../propTypes';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions} from '../../../redux/actions';
import {RootState} from '../../../redux/reducers';
import { t } from 'i18next';

export const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  const dispatch = useDispatch();
  const [hidePassword, setHidePassword] = useState(true);
  const userDetails = useSelector((state: RootState) => state.user.userDetail);
  console.log('========Login', userDetails);
  let passwordRef = useRef<TextInput>(null!);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => {
        console.log(values, '-----');
        const {email, ...restValues} = values;
        dispatch(AuthActions.loginSuccess(true));
        // dispatch(
        //   AuthActions.login({
        //     email: email?.toLocaleLowerCase(),
        //     ...restValues,
        //   }),
        // );
      }}
      // validationSchema={Schema.LoginSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        isValid,
        handleSubmit,
      }) => (
        <AuthHeader
          heading={t("Lets_sign_in")}
          title={t("login")}
          customStyles={{marginTop: Metrix.VerticalSize(20)}}
          isBtn
          isSecondaryBtn
          onPress={() => handleSubmit()}
          onBottomTextPress={() =>
            NavigationService.navigate(RouteNames.AuthRoutes.SignUpScreen)
          }>
          <CustomInput
            heading={t('continue_with_email')}
            placeholder={t("enter_mail")}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            value={values?.email}
            error={errors?.email}
            touched={touched?.email}
            autoCapitalize="none"
            returnKeyType="next"
            keyboardType="email-address"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <CustomInput
            heading={t("password")}
            placeholder={t("enter_your_password")}
            value={values?.password}
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
            error={errors?.password}
            touched={touched?.password}
            secureTextEntry={hidePassword}
            hidepswdState={hidePassword}
            eye
            onEyePress={() => {
              if (values?.password) {
                setHidePassword(prev => !prev);
              }
            }}
            returnKeyType="done"
            inputRef={passwordRef}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              NavigationService.navigate(
                RouteNames.AuthRoutes.ForgotPasswordScreen,
              )
            }>
            <CustomText.RegularText
              customStyle={{
                fontSize: FontType.FontSmall,
                textAlign: 'right',
              }}>
              {t("forgot_password")}
            </CustomText.RegularText>
          </TouchableOpacity>
        </AuthHeader>
      )}
    </Formik>
  );
};

interface LoginScreenStyles {}
const styles = StyleSheet.create<LoginScreenStyles>({});
