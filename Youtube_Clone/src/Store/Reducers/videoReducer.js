import { ADD_NEW_VIDEO, FETCH_VIDEO_SUCCESS } from '../Actions/videoAction';
import { CommentActions } from 'semantic-ui-react';
const initialState = [];
export default function videoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_VIDEO:
      return state.concat([action.payload]);

    case FETCH_VIDEO_SUCCESS:
      return state;

    default:
      return state;
  }
}
