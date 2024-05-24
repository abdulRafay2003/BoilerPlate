import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// params Object
type AuthParamList = {
  ChangePassword: {from?: string; data?: object};
  OtpScreen: {email: string; from?: string};
  VideoScreen: {courseId?: string};
};

type HomeParamList = {};

// Auth Screens Types
export type LoginScreenProps = {};

export type OtpScreenProps = {
  navigation: StackNavigationProp<AuthParamList, 'OtpScreen'>;
  route: RouteProp<AuthParamList, 'OtpScreen'>;
};

export type SignupScreenProps = {};

export type ForgotPasswordProps = {};

export type SelectLanguageProps = {};

export type GoogleSignUpProps = {};

export type VerifyUserProps = {};

export type OnBoardingProps = {};

export type ChangePasswordProps = {
  navigation: StackNavigationProp<AuthParamList, 'ChangePassword'>;
  route: RouteProp<AuthParamList, 'ChangePassword'>;
};

// Home Screen Types

export type HomeScreenProps = {};

export type NavigationScreenProps = {};

export type CoursesProps = {};

export type SearchProps = {};

export type ActivityProps = {};

export type ProfileScreenProps = {};

export type EditProfileProps = {};
