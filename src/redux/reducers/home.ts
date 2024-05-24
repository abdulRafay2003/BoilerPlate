import Immutable, {ImmutableObject} from 'seamless-immutable';
import Action from '../actions/Home';
import {ListDataType} from '../../screens/HomeScreens/FavouritesScreen';

interface AppState {
  loader: boolean;
  checkingLoader?: string;
  newConversationsList?: any;
  getNewConversationById?: any;
  getNewPreLearningConversationById?: any;
  completedClassList?: any;
  courseHistoryList?: any;
  favouritecourseList?: any;
  optionalVideo?: any;
  waitingResposeVideo?: any;
  getCourseCategories?: any;
  // new
  darkMode?: boolean;
}

const initialState: ImmutableObject<AppState> = Immutable<AppState>({
  loader: false,
  checkingLoader: '',
  newConversationsList: [],
  getNewConversationById: [],
  getNewPreLearningConversationById: [],
  completedClassList: [],
  courseHistoryList: [],
  favouritecourseList: [],
  optionalVideo: {},
  waitingResposeVideo: {},
  getCourseCategories: [],
  // new
  darkMode: false,
});

export default (state = initialState, action: {type: any; payload: any}) => {
  switch (action.type) {
    // * Start -------->
    case Action.EMPTY_STATE_SUCCESS:
      return Immutable(initialState);
    // <------- Ends
    // * Start -------->
    case Action.IS_DARK_MODE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        darkMode: !state.darkMode,
      });
    // <------- Ends
    // * Start -------->
    case Action.UPLOAD_MEDIA_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: true,
      });
    case Action.UPLOAD_MEDIA_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    case Action.UPLOAD_MEDIA_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    // <------- Ends
    // * Start -------->
    case Action.CHANGE_PASSWORD_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: true,
      });
    case Action.CHANGE_PASSWORD_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    case Action.CHANGE_PASSWORD_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    // <------- Ends
    // * Start -------->
    case Action.GET_NEW_CONVERSATION_LIST_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: true,
      });
    case Action.GET_NEW_CONVERSATION_LIST_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
        newConversationsList: action?.payload,
      });
    case Action.GET_NEW_CONVERSATION_LIST_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    // <------- Ends
    // * Start -------->
    case Action.GET_NEW_CONVERSATION_BY_ID_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: true,
      });
    case Action.GET_NEW_CONVERSATION_BY_ID_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
        getNewConversationById: action?.payload?.mainCourseContentArray,
        getNewPreLearningConversationById: action?.payload?.prelearningArray,
        optionalVideo: action?.payload?.optionalVideo,
        waitingResposeVideo: action?.payload?.waitingResposeVideo,
      });
    case Action.GET_NEW_CONVERSATION_BY_ID_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    // <------- Ends
    // * Start -------->
    case Action.SET_COURSE_HISTORY_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
      });
    case Action.SET_COURSE_HISTORY_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    case Action.SET_COURSE_HISTORY_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    // <------- Ends
    // * Start -------->
    case Action.GET_COURSE_HISTORY_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: true,
      });
    case Action.GET_COURSE_HISTORY_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
        courseHistoryList: action?.payload,
      });
    case Action.GET_COURSE_HISTORY_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
        courseHistoryList: action?.payload,
      });
    // <------- Ends
    // * Start -------->
    case Action.GET_COMPLETE_CLASS_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: true,
      });
    case Action.GET_COMPLETE_CLASS_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
        completedClassList: action?.payload,
      });
    case Action.GET_COMPLETE_CLASS_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    // <------- Ends
    // * Start -------->
    case Action.SET_COMPLETE_CLASS_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        // loader: true,
      });
    case Action.SET_COMPLETE_CLASS_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        // loader: false,
      });
    case Action.SET_COMPLETE_CLASS_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        // loader: false,
      });
    // <------- Ends
    // * Start -------->
    case Action.SET_FAVOURITE_COURSE_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        // loader: true,
      });
    case Action.SET_FAVOURITE_COURSE_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    case Action.SET_FAVOURITE_COURSE_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    // <------- Ends
    // * Start -------->
    case Action.GET_FAVOURITE_COURSE_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: true,
      });
    case Action.GET_FAVOURITE_COURSE_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
        favouritecourseList: action?.payload,
      });
    case Action.GET_FAVOURITE_COURSE_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    // <------- Ends
    // * Start -------->
    case Action.GET_COURSE_CATEGORIES_REQUEST:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: true,
      });
    case Action.GET_COURSE_CATEGORIES_SUCCESS:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
        getCourseCategories: action?.payload,
      });
    case Action.GET_COURSE_CATEGORIES_FAILURE:
      return Immutable(state).merge({
        checkingLoader: action?.type,
        loader: false,
      });
    // <------- Ends
    default:
      return state;
  }
};
