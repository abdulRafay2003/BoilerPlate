export default class Action {
  //Constants
  static EMPTY_STATE_SUCCESS = 'EMPTY_STATE_SUCCESS';
  static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static CHANGE_ROUTE_ON_LANG = 'CHANGE_ROUTE_ON_LANG';

  static USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST';
  static USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
  static USER_SIGNUP_FAILURE = 'USER_SIGNUP_FAILURE';

  static USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
  static USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
  static USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

  static USER_DETAIL_REQUEST = 'USER_DETAIL_REQUEST';
  static USER_DETAIL_SUCCESS = 'USER_DETAIL_SUCCESS';
  static USER_DETAIL_FAIL = 'USER_DETAIL_FAIL';

  static OTP_REQUEST = 'OTP_REQUEST';
  static OTP_SUCCESS = 'OTP_SUCCESS';
  static OTP_FAILURE = 'USER_LOGIN_FAILURE';

  static ONBOARDING_REQUEST = 'ONBOARDING_REQUEST';
  static ONBOARDING_SUCCESS = 'ONBOARDING_SUCCESS';
  static ONBOARDING_FAILURE = 'ONBOARDING_FAILURE';

  static ON_RESPONSE_SUCCESS = 'ON_RESPONSE_SUCCESS';

  static FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
  static FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
  static FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';

  static RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
  static RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
  static RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';

  static RESEND_PASSWORD_REQUEST = 'RESEND_PASSWORD_REQUEST';
  static RESEND_PASSWORD_SUCCESS = 'RESEND_PASSWORD_SUCCESS';
  static RESEND_PASSWORD_FAILURE = 'RESEND_PASSWORD_FAILURE';

  static UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';
  static UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
  static UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';

  //Actions

  static loginSuccess(payload: any) {
    return {
      type: Action.LOGIN_SUCCESS,
      payload,
    };
  }

  static emptyState() {
    return {
      type: Action.EMPTY_STATE_SUCCESS,
    };
  }

  static changeRouteOnLang(payload: any) {
    return {
      type: Action.CHANGE_ROUTE_ON_LANG,
      payload,
    };
  }

  static signup(payload: any) {
    return {
      type: Action.USER_SIGNUP_REQUEST,
      payload,
    };
  }

  static login(payload: any) {
    return {
      type: Action.USER_LOGIN_REQUEST,
      payload,
    };
  }

  static setOTP(payload: any) {
    return {
      type: Action.OTP_REQUEST,
      payload,
    };
  }

  static setOnBoarding(payload: any) {
    return {
      type: Action.ONBOARDING_REQUEST,
      payload,
    };
  }

  static setOnRespose(payload: any) {
    return {
      type: Action.ON_RESPONSE_SUCCESS,
      payload,
    };
  }

  static setUserDetail(payload?: any) {
    return {
      type: Action.USER_DETAIL_REQUEST,
      payload,
    };
  }

  static setForgotPassword(payload: any) {
    return {
      type: Action.FORGOT_PASSWORD_REQUEST,
      payload,
    };
  }

  static setResetPassword(payload: any) {
    return {
      type: Action.RESET_PASSWORD_REQUEST,
      payload,
    };
  }

  static setResendPassword(payload: any) {
    return {
      type: Action.RESEND_PASSWORD_REQUEST,
      payload,
    };
  }

  static setUpdateProfile(payload: any) {
    return {
      type: Action.UPDATE_PROFILE_REQUEST,
      payload,
    };
  }
}
