import httpService from '../https.service';

const setChangePassword = (body: object) => {
  return httpService().patch('auth/changePassword', body);
};

const setMedia = (body: object) => {
  return httpService('multipart/form-data').post('media/upload', body);
};

const getNewConversationListAPI = () => {
  return httpService().get('course');
};

const getNewConversationByIdAPI = (id: string) => {
  return httpService().get(`course-content/${id}`);
};

const setCourseHistoryAPI = (body: object) => {
  return httpService().post('course-history/', body);
};

const getCourseHistoryAPI = () => {
  return httpService().get('course-history/');
};

const setCompletedClassAPI = (body: object) => {
  return httpService().post('course-complete/', body);
};

const getCompletedClassAPI = () => {
  return httpService().get('course-complete/');
};

const setFavouriteCourseAPI = (body: object) => {
  return httpService().post('course-favourite/', body);
};

const getFavouriteCourseAPI = () => {
  return httpService().get('course-favourite/');
};

const getCourseCategoriesAPI = () => {
  return httpService().get('course/getCategoryCourses');
};

export const HomeAPIS = {
  setChangePassword,
  setMedia,
  getNewConversationListAPI,
  getNewConversationByIdAPI,
  setCourseHistoryAPI,
  setCompletedClassAPI,
  setFavouriteCourseAPI,
  getCourseHistoryAPI,
  getCompletedClassAPI,
  getFavouriteCourseAPI,
  getCourseCategoriesAPI
};
