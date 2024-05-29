import {
  Animated,
  Image,
  ImageProps,
  ImageStyle,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  AuthHeader,
  BackHeader,
  CustomInput,
  CustomText,
  FadeContainer,
  MainContainer,
  PlaceholderComponent,
  PrimaryButton,
} from '../../../components';
import {Formik} from 'formik';
import Schema from '../../../formik';
import {
  Colors,
  FontType,
  Images,
  Metrix,
  NavigationService,
  RouteNames,
} from '../../../config';
import {ChangePasswordProps} from '../../propTypes';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/reducers';
import {AuthActions, HomeActions} from '../../../redux/actions';

export const ChangePassword: React.FC<ChangePasswordProps> = ({route}) => {
  const {from, data} = route?.params;
  const dispatch = useDispatch();
  // console.log('paramms-------', from, data, onResponseCompleted);

  const [hideOldPassword, setHideOldPassword] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [passwordChanged, setPasswordChanged] = useState(false);

  let passwordRef = useRef<TextInput>(null!);
  let confirmPasswordRef = useRef<TextInput>(null!);

  // useEffect(() => {
  //   if (onResponseCompleted == 'Done') {
  //     setPasswordChanged(true);
  //     // dispatch(AuthActions.setOnRespose('InProcess'));
  //   }
  // }, [onResponseCompleted]);

  return (
    <Formik
      initialValues={{
        ...(from == RouteNames.HomeRoutes.ProfileScreen && {oldPassword: ''}),
        password: '',
        confirmPassword: '',
      }}
      onSubmit={value => {
        console.log('------data', value);
        if (from == RouteNames.HomeRoutes.ProfileScreen) {
          const body = {
            ...value,
          };

          console.log('change pswd', body);
          // dispatch(HomeActions.setChangePassword(body));
        } else {
          const body = {
            ...value,
            ...data,
          };
          console.log('resed pswd', body);
          // dispatch(AuthActions.setResetPassword(body));
        }
      }}
      validationSchema={
        from == RouteNames.HomeRoutes.ProfileScreen
          ? Schema.ChangePasswordSchema
          : Schema.ResetPasswordSchema
      }>
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        isValid,
        handleSubmit,
      }) => (
        <>
          {!passwordChanged ? (
            <AuthHeader
              heading={
                from == RouteNames.HomeRoutes.ProfileScreen
                  ? 'Change Password'
                  : 'New Password'
              }
              paragraph={
                from == RouteNames.HomeRoutes.ProfileScreen
                  ? 'Change password to update your account security'
                  : 'Create your new password so you can share your memories again.'
              }
              showBackHeader={true}
              title={
                from == RouteNames.HomeRoutes.ProfileScreen ? 'Confirm' : 'NEXT'
              }
              customStyles={{marginTop: Metrix.VerticalSize(20)}}
              disabled={!isValid}
              onPress={handleSubmit}>
              {from == RouteNames.HomeRoutes.ProfileScreen && (
                <CustomInput
                  placeholder="Enter Old Password"
                  value={values?.oldPassword}
                  onChangeText={handleChange('oldPassword')}
                  onBlur={() => setFieldTouched('oldPassword')}
                  error={errors?.oldPassword}
                  touched={touched?.oldPassword}
                  secureTextEntry={hideOldPassword}
                  hidepswdState={hideOldPassword}
                  eye
                  onEyePress={() => {
                    setHideOldPassword(prev => !prev);
                  }}
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current.focus()}
                />
              )}

              <CustomInput
                placeholder="Enter Password"
                value={values?.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                error={errors?.password}
                touched={touched?.password}
                secureTextEntry={hidePassword}
                hidepswdState={hidePassword}
                eye
                onEyePress={() => {
                  setHidePassword(prev => !prev);
                }}
                inputRef={passwordRef}
                returnKeyType="next"
                onSubmitEditing={() => confirmPasswordRef.current.focus()}
              />
              <CustomInput
                placeholder="Enter Confirm Password"
                value={values?.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={() => setFieldTouched('confirmPassword')}
                error={errors?.confirmPassword}
                touched={touched?.confirmPassword}
                secureTextEntry={hideConfirmPassword}
                hidepswdState={hideConfirmPassword}
                eye
                onEyePress={() => {
                  setHideConfirmPassword(prev => !prev);
                }}
                returnKeyType="done"
                inputRef={confirmPasswordRef}
              />
              {/* <PrimaryButton
                title={'NEXT'}
                customStyles={{marginTop: Metrix.VerticalSize(20)}}
                disabled={!isValid}
                onPress={handleSubmit}
              /> */}
            </AuthHeader>
          ) : (
            <PlaceholderComponent
              heading="Password changed!"
              image={Images.PasswordChanged}
              subHeading={`Don't worry, we'll let you know if there's a problem with your account`}
              title={
                from == RouteNames.HomeRoutes.ProfileScreen
                  ? 'Done'
                  : 'Back to Login'
              }
              onPress={() => {
                if (from == RouteNames.HomeRoutes.ProfileScreen) {
                  NavigationService.goBack();
                } else {
                  NavigationService.navigate(RouteNames.AuthRoutes.LoginScreen);
                }
              }}
            />
          )}
        </>
      )}
    </Formik>
  );
};

interface ChangePasswordStyles {
  imageStyle: ImageStyle;
  container: ViewStyle;
  textStyle: TextStyle;
}
const styles = StyleSheet.create<ChangePasswordStyles>({
  imageStyle: {
    width: '80%',
    height: Metrix.VerticalSize(200),
  },
  container: {
    // flex: 1,
    alignItems: 'center',
    // borderWidth: 1,
    justifyContent: 'center',
    marginTop: Metrix.VerticalSize(100),
  },
  textStyle: {
    fontSize: FontType.FontLarge,
    textAlign: 'center',
    lineHeight: Metrix.VerticalSize(20),
    marginTop: Metrix.VerticalSize(20),
  },
});
