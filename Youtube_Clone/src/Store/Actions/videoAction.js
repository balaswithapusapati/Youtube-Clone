export const ADD_NEW_VIDEO = 'ADD_NEW_VIDEO';
export const FETCH_VIDEO_SUCCESS = 'FETCH_VIDEO_SUCCESS';

export const addNewVideo = (videos) => ({
  type: ADD_NEW_VIDEO,
  payload: videos,
});

export const fetchProductsSuccess = (videos) => ({
  type: FETCH_VIDEO_SUCCESS,
  payload: videos,
});
