import Immutable, {ImmutableObject} from 'seamless-immutable';
import _ from 'lodash';

import Action from '../actions/Auth';

interface AppState {
  authorize: boolean;
  loader: boolean;
  langChange: boolean;
  internetConnect: boolean;
  userDetail: any;
  fcm: string;
  onResponseCompleted: string;
  checkingLoader?: string;
}

const initialState: ImmutableObject<AppState> = Immutable<AppState>({
  authorize: false,
  loader: false,
  langChange: false,
  userDetail: {},
  fcm: '',
  internetConnect: false,
  onResponseCompleted: 'InProcess',
  checkingLoader: '',
});

export default (state = initialState, action: {type: any; payload: any}) => {
  switch (action.type) {
    // * Start -------->
    case Action.LOGIN_SUCCESS: {
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
        authorize: action.payload,
      });
    }
    // <------- Ends
    // * Start -------->
    case Action.EMPTY_STATE_SUCCESS:
      return Immutable(initialState);
    // <------- Ends
    // * Start -------->
    case Action.CHANGE_ROUTE_ON_LANG: {
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
        langChange: action.payload,
      });
    }
    // <------- Ends
    // * Start -------->
    case Action.USER_SIGNUP_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: true,
      });
    case Action.USER_SIGNUP_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    case Action.USER_SIGNUP_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    // <------- Ends
    // * Start -------->
    case Action.USER_LOGIN_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        // loader: true,
      });
    case Action.USER_LOGIN_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
        userDetail: action.payload,
      });
    case Action.USER_LOGIN_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    // <------- Ends
    // * Start -------->
    case Action.USER_DETAIL_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: true,
      });
    case Action.USER_DETAIL_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
        userDetail: action.payload,
      });
    case Action.USER_DETAIL_FAIL:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    // <------- Ends
    // * Start -------->
    case Action.OTP_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: true,
      });
    case Action.OTP_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    case Action.OTP_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    // <------- Ends
    // * Start -------->
    case Action.ONBOARDING_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: true,
      });
    case Action.ONBOARDING_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    case Action.ONBOARDING_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    // <------- Ends
    // * Start -------->
    case Action.ON_RESPONSE_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
        onResponseCompleted: action?.payload,
      });
    // <------- Ends
    // * Start -------->
    case Action.FORGOT_PASSWORD_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: true,
      });
    case Action.FORGOT_PASSWORD_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    case Action.FORGOT_PASSWORD_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    // <------- Ends
    // * Start -------->
    case Action.RESET_PASSWORD_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: true,
      });
    case Action.RESET_PASSWORD_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    case Action.RESET_PASSWORD_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    // <------- Ends
    // * Start -------->
    case Action.RESEND_PASSWORD_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: true,
      });
    case Action.RESEND_PASSWORD_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    case Action.RESEND_PASSWORD_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    // <------- Ends
    // * Start -------->
    case Action.UPDATE_PROFILE_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: true,
      });
    case Action.UPDATE_PROFILE_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
        userDetail: action.payload,
      });
    case Action.UPDATE_PROFILE_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    // <------- Ends
    default:
      return state;
  }
};
