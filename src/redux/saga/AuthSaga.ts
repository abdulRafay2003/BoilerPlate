import {AnyAction} from 'redux';
import {call, put, select} from 'redux-saga/effects';
import {AuthAPIS} from '../../services/auth';
import {AuthActions} from '../actions';
import {NavigationService, RouteNames, Utills} from '../../config';
import {RootState} from '../reducers';

// Define the API response type (modify this according to your actual response structure)
interface ApiResponse {
  data?: any;
  status?: any;
}

export function* signup(action: AnyAction) {
  console.log('------patylooo SIGNUP', action.payload);

  try {
    // const response: ApiResponse = yield call(
    //   AuthAPIS.userSignup,
    //   action.payload,
    // );

    yield call(AuthAPIS.userSignup, action.payload);
    yield put({
      type: AuthActions.USER_SIGNUP_SUCCESS,
    });
    NavigationService.navigate(RouteNames.AuthRoutes.OtpScreen, {
      email: action?.payload?.email,
    });
    // console.log('=======repise signun', response?.data);
  } catch (error: any) {
    console.log('=======error signun', error);
    yield put({
      type: AuthActions.USER_SIGNUP_FAILURE,
    });
    Utills.showToast(
      error?.response?.data?.msg,
      error?.response?.data?.msg,
      'error',
    );
  }
}

export function* setOTP(action: AnyAction) {
  console.log('------patyloooOTP', action.payload);

  const {from, ...restOfBody} = action?.payload;
  const body = restOfBody;
  const fromForgotPasswordScreen = from == 'forgotPswd';
  const apiType = fromForgotPasswordScreen
    ? AuthAPIS.setResetPasswordOtp
    : AuthAPIS.setOTP;

  try {
    yield call(apiType, body);
    // console.log('------patyloooOTP', action.payload);
    yield put({
      type: AuthActions.OTP_SUCCESS,
    });
    if (fromForgotPasswordScreen) {
      NavigationService.navigate(RouteNames.AuthRoutes.ChangePasswrod, {
        from,
        data: restOfBody,
      });
    } else {
      Utills.showToast('Account is verified please login.', null, 'success');
      NavigationService.navigate(RouteNames.AuthRoutes.LoginScreen);
    }
  } catch (error: any) {
    console.log('=======error OTP', error?.response?.data);
    yield put({
      type: AuthActions.OTP_FAILURE,
    });
    Utills.showToast(
      error?.response?.data?.msg,
      error?.response?.data?.msg,
      'error',
    );
  }
}

export function* login(action: AnyAction) {
  console.log('------patyloooLogin', action.payload);

  try {
    const response: ApiResponse = yield call(
      AuthAPIS.userLogin,
      action.payload,
    );
    let userData = response?.data?.data;

    // console.log('------res', response?.data?.data);
    yield put({
      type: AuthActions.USER_LOGIN_SUCCESS,
      payload: {accessToken: userData?.accessToken},
    });

    if (!userData?.verified) {
      NavigationService.navigate(RouteNames.AuthRoutes.OtpScreen, {
        email: action?.payload?.email,
      });
    } else if (userData?.country == null) {
      NavigationService.navigate(RouteNames.AuthRoutes.OnBoardingScreen);
    } else {
      // yield put({
      //   type: AuthActions.USER_DETAIL_REQUEST,
      //   payload: {
      //     from: RouteNames.AuthRoutes.LoginScreen,
      //   },
      // });
      yield call(setUserDetail, {
        type: AuthActions.USER_DETAIL_REQUEST,
        payload: {from: RouteNames.AuthRoutes.LoginScreen},
      });
    }

    // NavigationService.navigate(RouteNames.AuthRoutes.OnBoardingScreen);
  } catch (error: any) {
    console.log('=======error  login', error, error?.response?.data);
    yield put({
      type: AuthActions.USER_LOGIN_FAILURE,
    });
    if (error?.response?.data?.msg == 'User Not Verified') {
      NavigationService.navigate(RouteNames.AuthRoutes.OtpScreen, {
        email: action?.payload?.email,
      });
    }
    Utills.showToast(
      error?.response?.data?.msg,
      error?.response?.data?.msg,
      'error',
    );
  }
}

export function* setUserDetail(action: AnyAction) {
  console.log('------patyloooGet ME', action.payload);

  const currentState: RootState = yield select(
    (state: RootState) => state.user?.userDetail,
  );

  // const accessToken = action?.payload?.accessToken;

  // console.log('chekkkkimm data respppp merge outututuutu', {
  //   ...currentState,
  // });
  try {
    const response: ApiResponse = yield call(AuthAPIS.getMe);
    // console.log('------res user details', response?.data);

    // console.log('chekkkkimm data respppp merge', {
    //   ...currentState,
    //   ...response?.data?.user,
    // });
    yield put({
      type: AuthActions.USER_DETAIL_SUCCESS,
      payload: {...currentState, ...response?.data?.user},
    });

    if (action?.payload?.from == RouteNames.AuthRoutes.LoginScreen) {
      yield put({
        type: AuthActions.LOGIN_SUCCESS,
        payload: true,
      });
    } else {
      Utills.showToast('Profile successfully updated.');
    }

    // NavigationService.navigate(RouteNames.AuthRoutes.OnBoardingScreen);
  } catch (error: any) {
    console.log('=======error userDetails', error, error?.response?.data);
    yield put({
      type: AuthActions.USER_DETAIL_FAIL,
    });

    Utills.showToast(
      error?.response?.data?.msg,
      error?.response?.data?.msg,
      'error',
    );
  }
}

export function* setForgotPassword(action: AnyAction) {
  console.log('------patyloooForgot password', action.payload);
  try {
    yield call(AuthAPIS.setForgotPasswordApi, action.payload);
    yield put({
      type: AuthActions.FORGOT_PASSWORD_SUCCESS,
    });
    Utills.showToast('OTP is sent to your email.', null, 'success');
    NavigationService.navigate(RouteNames.AuthRoutes.OtpScreen, {
      email: action.payload?.email,
      from: 'forgotPswd',
    });
  } catch (error: any) {
    console.log('=======error Forgot Password', error?.response?.data);
    yield put({
      type: AuthActions.FORGOT_PASSWORD_FAILURE,
    });
    Utills.showToast(
      error?.response?.data?.msg,
      error?.response?.data?.msg,
      'error',
    );
  }
}

export function* setResetPassword(action: AnyAction) {
  console.log('------patylooo reset password', action.payload);

  try {
    const response: ApiResponse = yield call(
      AuthAPIS.setResetPassword,
      action.payload,
    );

    const responseStatus = response?.status == 200 ? 'Done' : 'InProcess';
    yield put({
      type: AuthActions.RESET_PASSWORD_SUCCESS,
    });

    yield put({
      type: AuthActions.ON_RESPONSE_SUCCESS,
      payload: responseStatus,
    });
  } catch (error: any) {
    console.log('=======error resetPassword', error?.response?.data);
    yield put({
      type: AuthActions.RESET_PASSWORD_FAILURE,
    });
    Utills.showToast(
      error?.response?.data?.msg,
      error?.response?.data?.msg,
      'error',
    );
  }
}

export function* setUpdateProfile(action: AnyAction) {
  console.log('------patylooo Update profile', action.payload);

  const currentState: RootState = yield select(
    (state: RootState) => state.user?.userDetail,
  );

  try {
    const response: ApiResponse = yield call(
      AuthAPIS.setUpdateProfileAPI,
      action?.payload,
    );
    let userData = response?.data?.session;
    console.log('------res user update', userData);

    // console.log('chekkkkimm data respppp merge', {
    //   ...currentState,
    //   ...response?.data?.user,
    // });
    yield put({
      type: AuthActions.UPDATE_PROFILE_SUCCESS,
      payload: {...currentState, accessToken: userData?.accessToken},
    });

    yield call(setUserDetail, {
      type: AuthActions.USER_DETAIL_REQUEST,
      payload: {from: RouteNames.HomeRoutes.EditProfileScreen},
    });
    // yield put({
    //   type: AuthActions.USER_DETAIL_REQUEST,
    //   payload: {from: RouteNames.HomeRoutes.EditProfileScreen},
    // });
  } catch (error: any) {
    console.log('=======error update Profile', error, error?.response?.data);
    yield put({
      type: AuthActions.UPDATE_PROFILE_FAILURE,
    });

    Utills.showToast(
      error?.response?.data?.msg,
      error?.response?.data?.msg,
      'error',
    );
  }
}
