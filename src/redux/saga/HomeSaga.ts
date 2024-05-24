import {AnyAction} from 'redux';
import {call, put} from 'redux-saga/effects';
import {HomeAPIS} from '../../services/home';
import {AuthActions, HomeActions} from '../actions';
import {Utills} from '../../config';

interface ApiResponse {
  data?: any;
  status?: any;
}

export function* setChagnePassword(action: AnyAction) {
  console.log('------patylooo change password', action.payload);

  try {
    const response: ApiResponse = yield call(
      HomeAPIS.setChangePassword,
      action.payload,
    );

    const responseStatus = response?.status == 200 ? 'Done' : 'InProcess';
    yield put({
      type: HomeActions.CHANGE_PASSWORD_SUCCESS,
    });

    yield put({
      type: AuthActions.ON_RESPONSE_SUCCESS,
      payload: responseStatus,
    });
  } catch (error: any) {
    console.log('=======error changePassword', error?.response?.data);
    yield put({
      type: HomeActions.CHANGE_PASSWORD_FAILURE,
    });
    Utills.showToast(
      error?.response?.data?.msg,
      error?.response?.data?.msg,
      'error',
    );
  }
}
