import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Colors,
  Fonts,
  FontType,
  Metrix,
  NavigationService,
  RouteNames,
  Utills,
} from '../../../config';
import {
  AuthHeader,
  BackHeader,
  CustomInput,
  CustomText,
  Loader,
} from '../../../components';
import {Formik} from 'formik';
import Schema from '../../../formik';
import {LoginScreenProps, RegisterScreenProps} from '../../propTypes';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions, HomeActions} from '../../../redux/actions';
import {RootState} from '../../../redux/reducers';
import {t} from 'i18next';
import {AuthAPIS} from '../../../services/auth/index';
import {log} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PhoneNumberInput from 'react-native-phone-number-input';

const data = [
  {label: 'Client', value: 2},
  {label: 'Employee', value: 3},
  {label: 'Student', value: 4},
];

export const RegisterScreen: React.FC<RegisterScreenProps> = ({}) => {
  const dispatch = useDispatch();
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfPassword, setHideConfPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const userDetails = useSelector((state: RootState) => state.home.userDetails);
  console.log('========Login', value);

  let lNameRef = useRef<TextInput>(null!);
  let emailref = useRef<TextInput>(null!);
  let phoneRef = useRef<TextInput>(null!);
  let nicRef = useRef<TextInput>(null!);
  let passwordRef = useRef<TextInput>(null!);
  let confPasswordRef = useRef<TextInput>(null!);

  const registerUser = (body: Object) => {
    console.log('Body', body);
    setLoading(true);
    AuthAPIS.userSignup(body)
      .then(res => {
        console.log('Res', res?.data?.data);
        dispatch(
          HomeActions.setUserDetails({
            ...res?.data?.data,
          }),
        );
        AsyncStorage.setItem(
          'userData',
          JSON.stringify({
            ...res?.data?.data,
          }),
        );
        dispatch(AuthActions.loginSuccess(true));
        setLoading(false);
        // Alert.alert(res?.data?.data?.message);
      })
      .catch(err => {
        console.log('Err', err.response?.data?.message);
        setLoading(false);
      });
  };

  return (
    <Formik
      initialValues={{
        fName: '',
        lName: '',
        email: '',
        phone: '',
        nicNumber: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={values => {
        NavigationService.navigate(RouteNames.AuthRoutes.OtpScreen);
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
        <>
          <AuthHeader
            heading={t('Lets sign up')}
            title={t('Signup')}
            // customStyles={{marginTop: Metrix.VerticalSize(20)}}
            isBtn
            onPress={() => handleSubmit()}
            onBottomTextPress={() =>
              NavigationService.navigate(RouteNames.AuthRoutes.SignUpScreen)
            }>
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <CustomInput
              heading={t('Full Name')}
              placeholder={t('Enter your full name')}
              onChangeText={handleChange('lName')}
              onBlur={() => setFieldTouched('lName')}
              value={values?.lName}
              error={errors?.lName}
              touched={touched?.lName}
              autoCapitalize="none"
              returnKeyType="next"
              keyboardType="default"
              onSubmitEditing={() => emailref.current.focus()}
              inputRef={lNameRef}
            />
            <CustomInput
              heading={t('Email')}
              placeholder={t('Enter your email')}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              value={values?.email}
              error={errors?.email}
              touched={touched?.email}
              autoCapitalize="none"
              returnKeyType="next"
              keyboardType="email-address"
              onSubmitEditing={() => phoneRef.current.focus()}
              inputRef={emailref}
            />

            <CustomText.RegularText
              customStyle={{
                // textAlign: I18nManager.forceRTL ? 'left' : 'right',
                marginBottom: Metrix.VerticalSize(10),
                marginLeft: Metrix.HorizontalSize(10),
                fontSize: Metrix.customFontSize(15),
              }}>
              {t('Phone Number')}
            </CustomText.RegularText>

            <PhoneNumberInput
              containerStyle={{
                borderRadius: Metrix.HorizontalSize(50),
                borderWidth: 2,
                borderColor: Utills.selectedThemeColors().TextInputBorderColor,
                // backgroundColor: Utills.selectedThemeColors().Base,
                width: '100%',
              }}
              layout={'first'}
              textContainerStyle={{
                backgroundColor: Utills.selectedThemeColors().Base,
                borderRadius: 50,
              }}
              // textInputStyle={{
              //   color: Utills.selectedThemeColors().PrimaryTextColor,
              // }}
              // withDarkTheme
              defaultCode="PK"
              onChangeText={text => console.log(text)}
            />

            <CustomInput
              heading={t('Password')}
              placeholder={t('Enter your password')}
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
              mainContainerStyle={{marginTop: Metrix.VerticalSize(10)}}
              returnKeyType="done"
              onSubmitEditing={() => confPasswordRef.current.focus()}
              inputRef={passwordRef}
            />
            <CustomInput
              heading={t('Confirm Password')}
              placeholder={t('Enter confirm password')}
              value={values?.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={() => setFieldTouched('confirmPassword')}
              error={errors?.confirmPassword}
              touched={touched?.confirmPassword}
              secureTextEntry={hideConfPassword}
              hidepswdState={hideConfPassword}
              eye
              onEyePress={() => {
                if (values?.password) {
                  setHideConfPassword(prev => !prev);
                }
              }}
              returnKeyType="done"
              inputRef={confPasswordRef}
            />
            {/* <Loader isLoading={loading} /> */}
            {/* </ScrollView> */}
          </AuthHeader>
        </>
      )}
    </Formik>
  );
};

interface RegisterScreenStyles {}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: Utills.selectedThemeColors().TextInputBorderColor,
    borderWidth: 2,
    borderRadius: 100,
    paddingHorizontal: 20,
    marginVertical: Metrix.VerticalSize(10),
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Utills.selectedThemeColors().TextInputPlaceholserColor,
  },
  selectedTextStyle: {
    fontSize: Metrix.customFontSize(14),
    fontFamily: Fonts['Regular'],
    color: Utills.selectedThemeColors().PrimaryTextColor,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
