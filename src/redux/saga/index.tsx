import {all, takeEvery, takeLatest, take} from 'redux-saga/effects';
import {AuthActions, HomeActions} from '../actions';
import {
  login,
  setForgotPassword,
  setOTP,
  setResetPassword,
  setUpdateProfile,
  setUserDetail,
  signup,
} from './AuthSaga';
import {setChagnePassword} from './HomeSaga';

export function* rootSaga() {
  // Auth Actions
  yield all([takeLatest(AuthActions.USER_SIGNUP_REQUEST, signup)]);
  yield all([takeLatest(AuthActions.USER_LOGIN_REQUEST, login)]);
  yield all([takeLatest(AuthActions.USER_DETAIL_REQUEST, setUserDetail)]);
  yield all([takeLatest(AuthActions.OTP_REQUEST, setOTP)]);
  yield all([
    takeLatest(AuthActions.FORGOT_PASSWORD_REQUEST, setForgotPassword),
  ]);
  yield all([takeLatest(AuthActions.RESET_PASSWORD_REQUEST, setResetPassword)]);
  yield all([takeLatest(AuthActions.UPDATE_PROFILE_REQUEST, setUpdateProfile)]);

  // Home Actions
  yield all([
    takeLatest(HomeActions.CHANGE_PASSWORD_REQUEST, setChagnePassword),
  ]);
}
